
/* =========================================================
   WorldLingua — Main application controller
   File: js/app.js
   ========================================================= */

(() => {
  "use strict";

  const LANGUAGES = {
    de: {
      name: "German",
      nativeName: "Deutsch",
      description:
        "Learn German step by step through everyday life, travel, work and real conversations."
    },
    en: {
      name: "English",
      nativeName: "English",
      description:
        "Build your English skills with useful vocabulary, natural expressions and practical conversations."
    },
    fr: {
      name: "French",
      nativeName: "Français",
      description:
        "Learn French through everyday situations, travel, work and useful conversations."
    },
    es: {
      name: "Spanish",
      nativeName: "Español",
      description:
        "Develop your Spanish with practical vocabulary, useful sentences and real-life dialogues."
    },
    ja: {
      name: "Japanese",
      nativeName: "日本語",
      description:
        "Learn Japanese step by step with useful expressions, kana readings and practical dialogues."
    }
  };

  const LEVELS = {
    A0: {
      title: "First steps",
      description:
        "Start from the beginning. Learn essential words, basic expressions and your first simple conversations."
    },
    A1: {
      title: "Beginner",
      description:
        "Handle familiar everyday situations, introduce yourself and communicate with simple sentences."
    },
    A2: {
      title: "Elementary",
      description:
        "Talk about daily routines, travel, shopping, work and past experiences using connected sentences."
    },
    B1: {
      title: "Independent",
      description:
        "Express opinions, explain experiences, discuss familiar topics and communicate more independently."
    }
  };

  const state = {
    languageCode: "de",
    level: "A0",
    lessonId: null,
    section: "vocabulary",
    languageData: null
  };

  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) =>
    Array.from(root.querySelectorAll(selector));

  function getLanguageCode() {
    const params = new URLSearchParams(window.location.search);
    const code = (params.get("lang") || "de").toLowerCase();

    return Object.prototype.hasOwnProperty.call(LANGUAGES, code)
      ? code
      : "de";
  }

  function getLanguageData(code) {
    const candidates = [
      window.WorldLinguaLanguages,
      window.WORLINGUA_LANGUAGES,
      window.worldLinguaLanguages
    ];

    for (const registry of candidates) {
      if (registry && registry[code]) {
        return registry[code];
      }
    }

    const globalNames = {
      de: ["WorldLinguaDE", "LANG_DE", "GermanCourse"],
      en: ["WorldLinguaEN", "LANG_EN", "EnglishCourse"],
      fr: ["WorldLinguaFR", "LANG_FR", "FrenchCourse"],
      es: ["WorldLinguaES", "LANG_ES", "SpanishCourse"],
      ja: ["WorldLinguaJA", "LANG_JA", "JapaneseCourse"]
    };

    for (const name of globalNames[code] || []) {
      if (window[name]) {
        return window[name];
      }
    }

    return null;
  }

  function normalizeLessons(data) {
    if (!data) {
      return [];
    }

    const rawLessons = Array.isArray(data)
      ? data
      : Array.isArray(data.lessons)
        ? data.lessons
        : Array.isArray(data.course)
          ? data.course
          : [];

    return rawLessons.map((lesson, index) => ({
      ...lesson,
      id: String(lesson.id ?? `${lesson.level || "A0"}-${index + 1}`),
      level: String(lesson.level || "A0").toUpperCase(),
      title: lesson.title || `Lesson ${index + 1}`,
      description: lesson.description || lesson.intro || "",
      category: lesson.category || "Everyday life",
      vocabulary: Array.isArray(lesson.vocabulary)
        ? lesson.vocabulary
        : [],
      sentences: Array.isArray(lesson.sentences)
        ? lesson.sentences
        : [],
      dialogue: Array.isArray(lesson.dialogue)
        ? lesson.dialogue
        : [],
      exercises: Array.isArray(lesson.exercises)
        ? lesson.exercises
        : Array.isArray(lesson.practice)
          ? lesson.practice
          : []
    }));
  }

  function getLessons() {
    const data = state.languageData;

    if (!data) {
      return [];
    }

    return normalizeLessons(data);
  }

  function getLessonsForLevel(level = state.level) {
    return getLessons().filter(
      lesson => lesson.level === level
    );
  }

  function getCurrentLesson() {
    return getLessons().find(
      lesson => lesson.id === state.lessonId
    ) || null;
  }

  function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => {
      const entities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      };

      return entities[char];
    });
  }

  function getText(value, fallback = "") {
    if (value === null || value === undefined) {
      return fallback;
    }

    if (typeof value === "string" || typeof value === "number") {
      return String(value);
    }

    return fallback;
  }

  function getTranslation(item) {
    return getText(
      item.translation ??
      item.meaning ??
      item.translations?.en ??
      item.en ??
      item.translations?.zh ??
      item.zh ??
      item.meaningEn ??
      item.meaningZh,
      ""
    );
  }

  function getOriginal(item) {
    return getText(
      item.word ??
      item.text ??
      item.sentence ??
      item.original ??
      item.target ??
      item.question ??
      "",
      ""
    );
  }

  function getReading(item) {
    return getText(
      item.reading ??
      item.romaji ??
      item.pinyin ??
      item.pronunciation ??
      "",
      ""
    );
  }

  function getExample(item) {
    return getText(
      item.example ??
      item.exampleSentence ??
      "",
      ""
    );
  }

  function getExampleTranslation(item) {
    return getText(
      item.exampleTranslation ??
      item.exampleMeaning ??
      "",
      ""
    );
  }

  function getCurrentLanguageName() {
    const data = state.languageData;

    return getText(
      data?.name ??
      data?.language ??
      data?.nativeName,
      LANGUAGES[state.languageCode].name
    );
  }

  function getProgress() {
    if (
      window.WorldLinguaProgress &&
      typeof window.WorldLinguaProgress.getSummary === "function"
    ) {
      return window.WorldLinguaProgress.getSummary(
        state.languageCode,
        getLessons()
      );
    }

    return {
      completed: 0,
      vocabulary: 0,
      percent: 0
    };
  }

  function isCompleted(lessonId) {
    if (
      window.WorldLinguaProgress &&
      typeof window.WorldLinguaProgress.isCompleted === "function"
    ) {
      return window.WorldLinguaProgress.isCompleted(
        state.languageCode,
        lessonId
      );
    }

    return false;
  }

  function updateProgressDisplay() {
    const summary = getProgress();

    const completed = $("#completed-count");
    const vocabulary = $("#vocabulary-count");
    const percent = $("#progress-percent");

    if (completed) {
      completed.textContent = String(summary.completed ?? 0);
    }

    if (vocabulary) {
      vocabulary.textContent = String(summary.vocabulary ?? 0);
    }

    if (percent) {
      percent.textContent = `${summary.percent ?? 0}%`;
    }
  }

  function updateLevelDisplay() {
    const currentLevel = $("#current-level");

    if (currentLevel) {
      currentLevel.textContent = state.level;
    }

    $$(".level-tab").forEach(button => {
      const active = button.dataset.level === state.level;

      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    const levelInfo = LEVELS[state.level];

    const eyebrow = $("#selected-level-eyebrow");
    const title = $("#selected-level-title");
    const description = $("#level-description");

    if (eyebrow) {
      eyebrow.textContent = `LEVEL ${state.level}`;
    }

    if (title) {
      title.textContent = levelInfo.title;
    }

    if (description) {
      description.textContent = levelInfo.description;
    }
  }

  function updateLanguageDisplay() {
    const languageInfo = LANGUAGES[state.languageCode];
    const data = state.languageData;

    const title = $("#language-title");
    const description = $("#language-description");

    const name = getCurrentLanguageName();

    if (title) {
      title.textContent = `${name} course`;
    }

    if (description) {
      description.textContent = getText(
        data?.description,
        languageInfo.description
      );
    }

    document.documentElement.lang = state.languageCode;
    document.title = `${name} | WorldLingua`;
  }

  function setWorkspaceVisible(visible) {
    const listSection = $("#lesson-list-section");
    const workspace = $("#lesson-workspace");

    if (listSection) {
      listSection.hidden = visible;
    }

    if (workspace) {
      workspace.hidden = !visible;
    }
  }

  function renderLessonList() {
    const list = $("#lesson-list");
    const total = $("#lesson-total");

    if (!list) {
      return;
    }

    const lessons = getLessonsForLevel();

    if (total) {
      total.textContent = `${lessons.length} ${
        lessons.length === 1 ? "lesson" : "lessons"
      }`;
    }

    if (lessons.length === 0) {
      list.innerHTML = `
        <div class="empty-lessons">
          <p><strong>No lessons available yet.</strong></p>
          <p>
            Course content for ${escapeHTML(state.level)}
            will appear here when the language data is added.
          </p>
        </div>
      `;

      return;
    }

    list.innerHTML = lessons.map((lesson, index) => {
      const completed = isCompleted(lesson.id);

      const vocabCount = lesson.vocabulary.length;
      const sentenceCount = lesson.sentences.length;

      const category = escapeHTML(lesson.category);
      const title = escapeHTML(lesson.title);
      const description = escapeHTML(lesson.description);

      return `
        <button
          class="lesson-card ${completed ? "completed" : ""}"
          type="button"
          data-lesson-id="${escapeHTML(lesson.id)}"
          aria-label="Open lesson ${index + 1}: ${title}"
        >
          <span class="lesson-card-number">
            ${String(index + 1).padStart(2, "0")}
          </span>

          <span class="lesson-card-content">
            <span class="word-category">${category}</span>
            <span class="lesson-card-content-title">
              <h3>${title}</h3>
            </span>

            <span class="lesson-card-content-description">
              <p>${description}</p>
            </span>

            <span class="lesson-card-meta">
              <span class="lesson-card-tag">
                ${vocabCount} words
              </span>

              <span class="lesson-card-tag">
                ${sentenceCount} sentences
              </span>
            </span>
          </span>

          <span class="lesson-card-status" aria-label="${
            completed ? "Completed" : "Not completed"
          }">
            ${completed ? "✓" : "→"}
          </span>
        </button>
      `;
    }).join("");

    list.querySelectorAll("[data-lesson-id]").forEach(button => {
      button.addEventListener("click", () => {
        openLesson(button.dataset.lessonId);
      });
    });
  }

  function renderVocabulary(items) {
    if (!items.length) {
      return `
        <div class="status-message">
          Vocabulary for this lesson will be available soon.
        </div>
      `;
    }

    return `
      <h3 class="lesson-section-title">Essential vocabulary</h3>

      <div class="vocabulary-grid">
        ${items.map(item => {
          const original = getOriginal(item);
          const translation = getTranslation(item);
          const reading = getReading(item);
          const example = getExample(item);
          const exampleTranslation = getExampleTranslation(item);
          const gender = getText(item.gender, "");
          const partOfSpeech = getText(
            item.partOfSpeech ?? item.pos ?? item.type,
            ""
          );

          const lang = state.languageCode;

          return `
            <article class="vocabulary-card">
              <div class="vocabulary-card-top">
                <div>
                  <div
                    class="vocabulary-word"
                    lang="${lang}"
                  >
                    ${escapeHTML(original)}
                    ${
                      reading
                        ? `<span class="vocabulary-reading">${escapeHTML(reading)}</span>`
                        : ""
                    }
                  </div>

                  ${
                    gender
                      ? `<span class="word-category">${escapeHTML(gender)}</span>`
                      : ""
                  }

                  ${
                    partOfSpeech
                      ? `<span class="word-category">${escapeHTML(partOfSpeech)}</span>`
                      : ""
                  }
                </div>

                <button
                  class="speaker-button"
                  type="button"
                  data-speak="${escapeHTML(original)}"
                  data-speak-lang="${lang}"
                  aria-label="Listen to ${escapeHTML(original)}"
                  title="Listen"
                >🔊</button>
              </div>

              <p class="vocabulary-translation">
                ${escapeHTML(translation)}
              </p>

              ${
                example
                  ? `
                    <div class="vocabulary-example">
                      <strong>${escapeHTML(example)}</strong>
                      ${
                        exampleTranslation
                          ? `<p>${escapeHTML(exampleTranslation)}</p>`
                          : ""
                      }
                    </div>
                  `
                  : ""
              }
            </article>
          `;
        }).join("")}
      </div>
    `;
  }

  function renderSentences(items) {
    if (!items.length) {
      return `
        <div class="status-message">
          Example sentences for this lesson will be available soon.
        </div>
      `;
    }

    return `
      <h3 class="lesson-section-title">Useful sentences</h3>

      <div class="sentence-list">
        ${items.map(item => {
          const original = getOriginal(item);
          const translation = getTranslation(item);
          const reading = getReading(item);
          const lang = state.languageCode;

          return `
            <article class="sentence-card">
              <div class="sentence-card-main">
                <div>
                  <p class="sentence-original" lang="${lang}">
                    ${escapeHTML(original)}
                  </p>

                  ${
                    reading
                      ? `<p class="sentence-reading">${escapeHTML(reading)}</p>`
                      : ""
                  }

                  <p class="sentence-translation">
                    ${escapeHTML(translation)}
                  </p>
                </div>

                <button
                  class="speaker-button"
                  type="button"
                  data-speak="${escapeHTML(original)}"
                  data-speak-lang="${lang}"
                  aria-label="Listen to sentence"
                  title="Listen"
                >🔊</button>
              </div>
            </article>
          `;
        }).join("")}
      </div>
    `;
  }

  function renderDialogue(items) {
    if (!items.length) {
      return `
        <div class="status-message">
          Dialogue content for this lesson will be available soon.
        </div>
      `;
    }

    return `
      <h3 class="lesson-section-title">A real-life conversation</h3>

      <div class="dialogue-list">
        ${items.map((item, index) => {
          const speaker = getText(
            item.speaker ?? item.role,
            index % 2 === 0 ? "Person A" : "Person B"
          );

          const original = getOriginal(item);
          const translation = getTranslation(item);
          const reading = getReading(item);
          const lang = state.languageCode;

          return `
            <article class="dialogue-turn">
              <span class="dialogue-speaker">
                ${escapeHTML(speaker)}
              </span>

              <div class="dialogue-bubble">
                <div class="dialogue-bubble-content">
                  <p class="dialogue-original" lang="${lang}">
                    ${escapeHTML(original)}
                  </p>

                  ${
                    reading
                      ? `<p class="dialogue-reading">${escapeHTML(reading)}</p>`
                      : ""
                  }

                  <p class="dialogue-translation">
                    ${escapeHTML(translation)}
                  </p>
                </div>

                <button
                  class="speaker-button"
                  type="button"
                  data-speak="${escapeHTML(original)}"
                  data-speak-lang="${lang}"
                  aria-label="Listen to dialogue line"
                  title="Listen"
                >🔊</button>
              </div>
            </article>
          `;
        }).join("")}
      </div>
    `;
  }

  function renderPractice(items) {
    const panel = $("#lesson-panel");

    if (!panel) {
      return;
    }

    if (!items.length) {
      panel.innerHTML = `
        <div class="status-message">
          Practice questions for this lesson will be available soon.
        </div>
      `;

      return;
    }

    if (
      window.WorldLinguaLearner &&
      typeof window.WorldLinguaLearner.renderPractice === "function"
    ) {
      window.WorldLinguaLearner.renderPractice({
        items,
        languageCode: state.languageCode,
        container: panel,
        onComplete: () => updateProgressDisplay()
      });

      return;
    }

    panel.innerHTML = `
      <div class="status-message">
        The practice module is not loaded yet. Check that
        <code>js/learner.js</code> exists and loads before <code>js/app.js</code>.
      </div>
    `;
  }

  function renderCurrentSection() {
    const lesson = getCurrentLesson();
    const panel = $("#lesson-panel");

    if (!lesson || !panel) {
      return;
    }

    $$(".lesson-step-tab").forEach(button => {
      const active = button.dataset.step === state.section;

      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    if (state.section === "vocabulary") {
      panel.innerHTML = renderVocabulary(lesson.vocabulary);
    } else if (state.section === "sentences") {
      panel.innerHTML = renderSentences(lesson.sentences);
    } else if (state.section === "dialogue") {
      panel.innerHTML = renderDialogue(lesson.dialogue);
    } else if (state.section === "practice") {
      renderPractice(lesson.exercises);
    }

    updateLessonNavigation();
  }

  function updateLessonNavigation() {
    const previousButton = $("#previous-lesson");
    const nextButton = $("#next-lesson");

    const lessons = getLessonsForLevel();
    const index = lessons.findIndex(
      lesson => lesson.id === state.lessonId
    );

    if (previousButton) {
      previousButton.disabled = index <= 0;
    }

    if (nextButton) {
      nextButton.disabled = index < 0 || index >= lessons.length - 1;
    }
  }

  function updateCompletionButton() {
    const button = $("#complete-lesson");
    const completionSection = $(".lesson-completion");

    if (!button) {
      return;
    }

    const completed = state.lessonId
      ? isCompleted(state.lessonId)
      : false;

    button.textContent = completed
      ? "Completed ✓"
      : "Mark as complete";

    button.setAttribute("aria-pressed", String(completed));

    if (completionSection) {
      completionSection.classList.toggle("is-complete", completed);
    }
  }

  function openLesson(lessonId) {
    const lesson = getLessons().find(
      item => item.id === String(lessonId)
    );

    if (!lesson) {
      return;
    }

    state.lessonId = lesson.id;
    state.level = lesson.level;
    state.section = "vocabulary";

    const title = $("#lesson-title");
    const category = $("#lesson-category");
    const intro = $("#lesson-intro");
    const badge = $("#lesson-level-badge");

    if (title) {
      title.textContent = lesson.title;
    }

    if (category) {
      category.textContent = lesson.category;
    }

    if (intro) {
      intro.textContent = lesson.description;
    }

    if (badge) {
      badge.textContent = lesson.level;
    }

    updateLevelDisplay();
    setWorkspaceVisible(true);
    renderCurrentSection();
    updateCompletionButton();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  function backToLessons() {
    state.lessonId = null;

    setWorkspaceVisible(false);
    updateLevelDisplay();
    renderLessonList();

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  function changeLevel(level) {
    if (!Object.prototype.hasOwnProperty.call(LEVELS, level)) {
      return;
    }

    state.level = level;
    state.lessonId = null;
    state.section = "vocabulary";

    setWorkspaceVisible(false);
    updateLevelDisplay();
    renderLessonList();

    updateProgressDisplay();
  }

  function changeSection(section) {
    const allowed = [
      "vocabulary",
      "sentences",
      "dialogue",
      "practice"
    ];

    if (!allowed.includes(section)) {
      return;
    }

    state.section = section;
    renderCurrentSection();
  }

  function navigateLesson(direction) {
    const lessons = getLessonsForLevel();
    const currentIndex = lessons.findIndex(
      lesson => lesson.id === state.lessonId
    );

    const targetIndex = currentIndex + direction;

    if (targetIndex < 0 || targetIndex >= lessons.length) {
      return;
    }

    openLesson(lessons[targetIndex].id);
  }

  function markLessonComplete() {
    if (!state.lessonId) {
      return;
    }

    if (
      window.WorldLinguaProgress &&
      typeof window.WorldLinguaProgress.markCompleted === "function"
    ) {
      window.WorldLinguaProgress.markCompleted(
        state.languageCode,
        state.lessonId
      );
    } else {
      console.warn(
        "WorldLinguaProgress is unavailable. Check js/progress.js."
      );

      return;
    }

    updateCompletionButton();
    updateProgressDisplay();
    renderLessonList();
  }

  function speakFromButton(button) {
    const text = button.dataset.speak;
    const lang = button.dataset.speakLang || state.languageCode;

    if (!text) {
      return;
    }

    if (
      window.WorldLinguaSpeech &&
      typeof window.WorldLinguaSpeech.speak === "function"
    ) {
      window.WorldLinguaSpeech.speak(text, lang, button);
      return;
    }

    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);

      const voices = window.speechSynthesis.getVoices();
      const preferredPrefix = {
        de: "de",
        en: "en",
        fr: "fr",
        es: "es",
        ja: "ja"
      }[lang] || lang;

      const voice = voices.find(item =>
        item.lang.toLowerCase().startsWith(preferredPrefix)
      );

      if (voice) {
        utterance.voice = voice;
      }

      utterance.lang = {
        de: "de-DE",
        en: "en-GB",
        fr: "fr-FR",
        es: "es-ES",
        ja: "ja-JP"
      }[lang] || lang;

      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    } else {
      console.warn("Speech synthesis is not supported in this browser.");
    }
  }

  function bindEvents() {
    $$(".level-tab").forEach(button => {
      button.addEventListener("click", () => {
        changeLevel(button.dataset.level);
      });
    });

    $$(".lesson-step-tab").forEach(button => {
      button.addEventListener("click", () => {
        changeSection(button.dataset.step);
      });
    });

    const backButton = $("#back-to-lessons");
    const previousButton = $("#previous-lesson");
    const nextButton = $("#next-lesson");
    const completeButton = $("#complete-lesson");

    if (backButton) {
      backButton.addEventListener("click", backToLessons);
    }

    if (previousButton) {
      previousButton.addEventListener("click", () => {
        navigateLesson(-1);
      });
    }

    if (nextButton) {
      nextButton.addEventListener("click", () => {
        navigateLesson(1);
      });
    }

    if (completeButton) {
      completeButton.addEventListener("click", markLessonComplete);
    }

    document.addEventListener("click", event => {
      const button = event.target.closest("[data-speak]");

      if (button) {
        speakFromButton(button);
      }
    });
  }

  function showMissingDataMessage() {
    const list = $("#lesson-list");

    if (!list) {
      return;
    }

    list.innerHTML = `
      <div class="status-message error">
        <strong>Course data could not be loaded.</strong>
        <p>
          Please check that the language data file exists in the
          <code>languages/</code> folder and is included in
          <code>learn.html</code>.
        </p>
      </div>
    `;
  }

  function init() {
    state.languageCode = getLanguageCode();
    state.languageData = getLanguageData(state.languageCode);

    updateLanguageDisplay();
    updateLevelDisplay();
    bindEvents();

    if (!state.languageData) {
      showMissingDataMessage();
      updateProgressDisplay();

      console.error(
        `WorldLingua: no language data found for "${state.languageCode}".`
      );

      return;
    }

    renderLessonList();
    updateProgressDisplay();

    /*
      Optional deep link:
      learn.html?lang=de&level=A1&lesson=de-a1-01
    */
    const params = new URLSearchParams(window.location.search);
    const requestedLevel = (params.get("level") || "A0").toUpperCase();
    const requestedLesson = params.get("lesson");

    if (Object.prototype.hasOwnProperty.call(LEVELS, requestedLevel)) {
      state.level = requestedLevel;
      updateLevelDisplay();
      renderLessonList();
    }

    if (requestedLesson) {
      const lesson = getLessons().find(
        item => item.id === requestedLesson
      );

      if (lesson) {
        openLesson(lesson.id);
      }
    }
  }

  window.WorldLinguaApp = {
    init,
    getState: () => ({ ...state }),
    getLessons,
    getLessonsForLevel,
    openLesson,
    changeLevel,
    changeSection,
    updateProgressDisplay
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
