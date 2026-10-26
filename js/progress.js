
/* =========================================================
   WorldLingua — Progress Manager
   File: js/progress.js

   Features:
   - Save completed lessons in localStorage
   - Keep progress separate for each language
   - Calculate completed lessons, learned vocabulary,
     and overall completion percentage
   - Handle unavailable or invalid localStorage safely
   ========================================================= */

(function () {
  "use strict";

  const STORAGE_KEY = "worldlingua-progress-v1";

  const SUPPORTED_LANGUAGES = ["de", "en", "fr", "es", "ja"];

  /**
   * Create an empty progress data structure.
   */
  function createEmptyData() {
    return {
      version: 1,
      languages: {}
    };
  }

  /**
   * Read saved data from localStorage.
   * Returns an empty structure if storage is unavailable.
   */
  function readData() {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);

      if (!raw) {
        return createEmptyData();
      }

      const parsed = JSON.parse(raw);

      if (
        !parsed ||
        typeof parsed !== "object" ||
        !parsed.languages ||
        typeof parsed.languages !== "object"
      ) {
        return createEmptyData();
      }

      return {
        version: 1,
        languages: parsed.languages
      };
    } catch (error) {
      console.warn(
        "WorldLingua: Could not read saved progress.",
        error
      );

      return createEmptyData();
    }
  }

  /**
   * Write data to localStorage.
   * Returns true if saving succeeded.
   */
  function writeData(data) {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
      );

      return true;
    } catch (error) {
      console.warn(
        "WorldLingua: Could not save progress.",
        error
      );

      return false;
    }
  }

  /**
   * Normalize and validate a language code.
   */
  function normalizeLanguageCode(languageCode) {
    const code = String(languageCode || "")
      .trim()
      .toLowerCase();

    return SUPPORTED_LANGUAGES.includes(code) ? code : null;
  }

  /**
   * Return a normalized language progress object.
   */
  function getLanguageProgress(data, languageCode) {
    if (!data.languages[languageCode]) {
      data.languages[languageCode] = {
        completedLessons: {},
        lastLessonId: null
      };
    }

    const language = data.languages[languageCode];

    if (
      !language.completedLessons ||
      typeof language.completedLessons !== "object" ||
      Array.isArray(language.completedLessons)
    ) {
      language.completedLessons = {};
    }

    if (!("lastLessonId" in language)) {
      language.lastLessonId = null;
    }

    return language;
  }

  /**
   * Get a lesson ID safely.
   */
  function getLessonId(lesson) {
    if (!lesson || lesson.id == null) {
      return null;
    }

    const id = String(lesson.id).trim();

    return id || null;
  }

  /**
   * Count vocabulary items in a lesson.
   */
  function getVocabularyItems(lesson) {
    if (!lesson || !Array.isArray(lesson.vocabulary)) {
      return [];
    }

    return lesson.vocabulary;
  }

  /**
   * Extract a stable text identifier from a vocabulary item.
   */
  function getVocabularyKey(item) {
    if (item == null) {
      return "";
    }

    if (typeof item === "string" || typeof item === "number") {
      return String(item).trim().toLowerCase();
    }

    const value =
      item.word ??
      item.text ??
      item.term ??
      item.original ??
      item.target ??
      item.translation ??
      item.meaning ??
      "";

    return String(value).trim().toLowerCase();
  }

  /**
   * Check whether a lesson is completed.
   */
  function isCompleted(languageCode, lessonId) {
    const code = normalizeLanguageCode(languageCode);

    if (!code || lessonId == null) {
      return false;
    }

    const data = readData();
    const language = getLanguageProgress(data, code);
    const id = String(lessonId);

    return Boolean(language.completedLessons[id]);
  }

  /**
   * Mark a lesson as completed.
   * Returns true if the progress was saved.
   */
  function markCompleted(languageCode, lessonId) {
    const code = normalizeLanguageCode(languageCode);

    if (!code || lessonId == null) {
      return false;
    }

    const id = String(lessonId).trim();

    if (!id) {
      return false;
    }

    const data = readData();
    const language = getLanguageProgress(data, code);

    language.completedLessons[id] = {
      completedAt: new Date().toISOString()
    };

    language.lastLessonId = id;

    const saved = writeData(data);

    if (saved) {
      notifyProgressChanged(code, id, true);
    }

    return saved;
  }

  /**
   * Mark a lesson as incomplete.
   */
  function unmarkCompleted(languageCode, lessonId) {
    const code = normalizeLanguageCode(languageCode);

    if (!code || lessonId == null) {
      return false;
    }

    const id = String(lessonId).trim();

    if (!id) {
      return false;
    }

    const data = readData();
    const language = getLanguageProgress(data, code);

    if (!language.completedLessons[id]) {
      return true;
    }

    delete language.completedLessons[id];

    const saved = writeData(data);

    if (saved) {
      notifyProgressChanged(code, id, false);
    }

    return saved;
  }

  /**
   * Calculate the learning summary for one language.
   *
   * @param {string} languageCode
   * @param {Array} lessons All lessons for the language
   *
   * @returns {{
   *   completed: number,
   *   vocabulary: number,
   *   percent: number
   * }}
   */
  function getSummary(languageCode, lessons) {
    const code = normalizeLanguageCode(languageCode);

    if (!code) {
      return {
        completed: 0,
        vocabulary: 0,
        percent: 0
      };
    }

    const allLessons = Array.isArray(lessons)
      ? lessons
      : [];

    const data = readData();
    const language = getLanguageProgress(data, code);
    const completedMap = language.completedLessons;

    const validLessonIds = new Set(
      allLessons
        .map(getLessonId)
        .filter(Boolean)
    );

    let completedCount = 0;

    const vocabularyKeys = new Set();
    let vocabularyWithoutKeys = 0;

    allLessons.forEach(function (lesson) {
      const id = getLessonId(lesson);

      if (!id || !completedMap[id]) {
        return;
      }

      completedCount += 1;

      getVocabularyItems(lesson).forEach(function (item) {
        const key = getVocabularyKey(item);

        if (key) {
          vocabularyKeys.add(key);
        } else {
          vocabularyWithoutKeys += 1;
        }
      });
    });

    // Ignore completed IDs that no longer exist in the course data.
    const savedCompletedIds = Object.keys(completedMap);

    const validCompletedCount = savedCompletedIds.filter(
      function (id) {
        return validLessonIds.has(id) && Boolean(completedMap[id]);
      }
    ).length;

    // Use the current course data as the source of truth.
    completedCount = validCompletedCount;

    const totalLessons = allLessons.filter(function (lesson) {
      return Boolean(getLessonId(lesson));
    }).length;

    const percent = totalLessons > 0
      ? Math.round((completedCount / totalLessons) * 100)
      : 0;

    return {
      completed: completedCount,
      vocabulary: vocabularyKeys.size + vocabularyWithoutKeys,
      percent: percent
    };
  }

  /**
   * Return the most recently opened/completed lesson ID.
   */
  function getLastLesson(languageCode) {
    const code = normalizeLanguageCode(languageCode);

    if (!code) {
      return null;
    }

    const data = readData();
    const language = getLanguageProgress(data, code);

    return language.lastLessonId || null;
  }

  /**
   * Remember which lesson the learner last opened.
   */
  function setLastLesson(languageCode, lessonId) {
    const code = normalizeLanguageCode(languageCode);

    if (!code || lessonId == null) {
      return false;
    }

    const id = String(lessonId).trim();

    if (!id) {
      return false;
    }

    const data = readData();
    const language = getLanguageProgress(data, code);

    language.lastLessonId = id;

    return writeData(data);
  }

  /**
   * Reset saved progress for one language.
   */
  function resetLanguage(languageCode) {
    const code = normalizeLanguageCode(languageCode);

    if (!code) {
      return false;
    }

    const data = readData();

    delete data.languages[code];

    const saved = writeData(data);

    if (saved) {
      notifyProgressChanged(code, null, false);
    }

    return saved;
  }

  /**
   * Reset all WorldLingua progress.
   */
  function resetAll() {
    const saved = writeData(createEmptyData());

    if (saved) {
      try {
        window.dispatchEvent(
          new CustomEvent("worldlingua:progress", {
            detail: {
              languageCode: null,
              lessonId: null,
              completed: false,
              resetAll: true
            }
          })
        );
      } catch (error) {
        // Progress has already been saved.
      }
    }

    return saved;
  }

  /**
   * Notify other parts of the application about changes.
   */
  function notifyProgressChanged(
    languageCode,
    lessonId,
    completed
  ) {
    try {
      window.dispatchEvent(
        new CustomEvent("worldlingua:progress", {
          detail: {
            languageCode: languageCode,
            lessonId: lessonId,
            completed: completed
          }
        })
      );
    } catch (error) {
      // Event notification is optional.
    }
  }

  /**
   * Public API used by app.js and learner.js.
   */
  window.WorldLinguaProgress = {
    getSummary: getSummary,
    isCompleted: isCompleted,
    markCompleted: markCompleted,
    unmarkCompleted: unmarkCompleted,
    getLastLesson: getLastLesson,
    setLastLesson: setLastLesson,
    resetLanguage: resetLanguage,
    resetAll: resetAll
  };
})();
