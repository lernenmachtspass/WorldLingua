
/* =========================================================
   WorldLingua — Main application controller
   File: js/app.js
   中文界面 + 英语翻译 + 中文释义
   ========================================================= */

(() => {
  "use strict";

  const LANGUAGES = {
    de: {
      name: "德语",
      nativeName: "Deutsch",
      description: "通过日常生活、旅行、工作和真实对话，一步步学习德语。"
    },
    en: {
      name: "英语",
      nativeName: "English",
      description: "通过实用词汇、自然表达和生活场景对话，逐步提升英语能力。"
    },
    fr: {
      name: "法语",
      nativeName: "Français",
      description: "从日常生活到旅行和工作，在真实场景中学习法语。"
    },
    es: {
      name: "西班牙语",
      nativeName: "Español",
      description: "通过实用词汇、例句和生活对话，循序渐进地学习西班牙语。"
    },
    ja: {
      name: "日语",
      nativeName: "日本語",
      description: "学习实用日语表达、假名读音和生活场景对话。"
    }
  };

  const LEVELS = {
    A0: {
      title: "入门起步",
      description: "从零开始，学习基础词汇、简单表达和第一段日常对话。"
    },
    A1: {
      title: "初级入门",
      description: "学习介绍自己、理解常见表达，并应对简单的日常交流。"
    },
    A2: {
      title: "基础进阶",
      description: "练习日常生活、旅行、购物、工作和过往经历等话题。"
    },
    B1: {
      title: "独立交流",
      description: "学习表达观点、说明经历、讨论熟悉的话题，并逐步进行独立交流。"
    }
  };

  const LEVEL_NAMES = {
    A0: "入门起步",
    A1: "初级入门",
    A2: "基础进阶",
    B1: "独立交流"
  };

  const SECTION_NAMES = {
    vocabulary: "单词",
    sentences: "例句",
    dialogue: "情景对话",
    practice: "练习"
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

  /* ---------------------------------------------------------
     基础工具
     --------------------------------------------------------- */

  function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[char]);
  }

  function getText(value, fallback = "") {
    if (value === null || value === undefined) return fallback;

    if (typeof value === "string" || typeof value === "number") {
      return String(value);
    }

    return fallback;
  }

  function hasChinese(value) {
    return /[\u3400-\u9FFF]/.test(String(value ?? ""));
  }

  function getLanguageCode() {
    const params = new URLSearchParams(window.location.search);
    const code = (params.get("lang") || "de").toLowerCase();

    return Object.prototype.hasOwnProperty.call(LANGUAGES, code)
      ? code
      : "de";
  }

  function getLanguageData(code) {
    const registries = [
      window.WorldLinguaLanguages,
      window.WORLINGUA_LANGUAGES,
      window.worldLinguaLanguages
    ];

    for (const registry of registries) {
      if (registry && registry[code]) return registry[code];
    }

    const globalNames = {
      de: ["WorldLinguaDE", "LANG_DE", "GermanCourse"],
      en: ["WorldLinguaEN", "LANG_EN", "EnglishCourse"],
      fr: ["WorldLinguaFR", "LANG_FR", "FrenchCourse"],
      es: ["WorldLinguaES", "LANG_ES", "SpanishCourse"],
      ja: ["WorldLinguaJA", "LANG_JA", "JapaneseCourse"]
    };

    for (const name of globalNames[code] || []) {
      if (window[name]) return window[name];
    }

    return null;
  }

  function normalizeLessons(data) {
    if (!data) return [];

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
      title: lesson.title || `第 ${index + 1} 课`,
      description: lesson.description || lesson.intro || "",
      category: lesson.category || "日常生活",
      vocabulary: Array.isArray(lesson.vocabulary) ? lesson.vocabulary : [],
      sentences: Array.isArray(lesson.sentences) ? lesson.sentences : [],
      dialogue: Array.isArray(lesson.dialogue) ? lesson.dialogue : [],
      exercises: Array.isArray(lesson.exercises)
        ? lesson.exercises
        : Array.isArray(lesson.practice)
          ? lesson.practice
          : []
    }));
  }

  function getLessons() {
    return state.languageData ? normalizeLessons(state.languageData) : [];
  }

  function getLessonsForLevel(level = state.level) {
    return getLessons().filter(lesson => lesson.level === level);
  }

  function getCurrentLesson() {
    return getLessons().find(lesson => lesson.id === state.lessonId) || null;
  }

  /* ---------------------------------------------------------
     多语言字段读取
     兼容 meaningZh、translations.zh、translation 等数据结构
     --------------------------------------------------------- */

  function getOriginal(item) {
    return getText(
      item?.word ??
      item?.text ??
      item?.sentence ??
      item?.original ??
      item?.target ??
      item?.prompt ??
      "",
      ""
    );
  }

  function getEnglish(item) {
    if (!item) return "";

    const candidates = [
      item.meaningEn,
      item.translationEn,
      item.translations?.en,
      item.en,
      item.english,
      item.translation,
      item.meaning
    ];

    for (const candidate of candidates) {
      const value = getText(candidate, "").trim();

      if (value && !hasChinese(value)) return value;
    }

    return "";
  }

  function getChinese(item) {
    if (!item) return "";

    const candidates = [
      item.meaningZh,
      item.translationZh,
      item.translations?.zh,
      item.zh,
      item.chinese,
      item.chineseMeaning,
      item.questionZh,
      item.meaningChinese
    ];

    for (const candidate of candidates) {
      const value = getText(candidate, "").trim();

      if (value && hasChinese(value)) return value;
    }

    // 兼容旧数据：如果 translation 本身就是中文，直接使用。
    for (const candidate of [item.translation, item.meaning]) {
      const value = getText(candidate, "").trim();

      if (value && hasChinese(value)) return value;
    }

    return "";
  }

  function getReading(item) {
    return getText(
      item?.reading ??
      item?.kana ??
      item?.romaji ??
      item?.pinyin ??
      item?.pronunciation ??
      "",
      ""
    );
  }

  function getPartOfSpeech(item) {
    return getText(
      item?.partOfSpeech ??
      item?.pos ??
      item?.type ??
      "",
      ""
    );
  }

  function getGender(item) {
    return getText(item?.gender ?? "", "");
  }

  function getExample(item) {
    return getText(item?.example ?? item?.exampleSentence ?? "", "");
  }

  function getExampleEnglish(item) {
    return getText(
      item?.exampleTranslationEn ??
      item?.exampleTranslation ??
      item?.exampleMeaningEn ??
      "",
      ""
    );
  }

  function getExampleChinese(item) {
    return getText(
      item?.exampleMeaningZh ??
      item?.exampleTranslationZh ??
      item?.exampleZh ??
      "",
      ""
    );
  }

  function translationHTML(item, options = {}) {
    const english = getEnglish(item);
    const chinese = getChinese(item);
    const showEnglish = options.english !== false;
    const showChinese = options.chinese !== false;

    return `
      <div class="wl-translations">
        ${
          showEnglish && english
            ? `<p class="wl-english"><span>英语：</span>${escapeHTML(english)}</p>`
            : ""
        }
        ${
          showChinese
            ? `<p class="wl-chinese"><span>中文：</span>${
                chinese
                  ? escapeHTML(chinese)
                  : '<span class="wl-missing-translation">中文释义待补充</span>'
              }</p>`
            : ""
        }
      </div>
    `;
  }

  function getCurrentLanguageName() {
    const data = state.languageData;

    return getText(
      data?.nativeName ?? data?.language ?? data?.name,
      LANGUAGES[state.languageCode].nativeName
    );
  }

  /* ---------------------------------------------------------
     学习进度
     --------------------------------------------------------- */

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

    return { completed: 0, vocabulary: 0, percent: 0 };
  }

  function isCompleted(lessonId) {
    return Boolean(
      window.WorldLinguaProgress &&
      typeof window.WorldLinguaProgress.isCompleted === "function" &&
      window.WorldLinguaProgress.isCompleted(state.languageCode, lessonId)
    );
  }

  function updateProgressDisplay() {
    const summary = getProgress();

    const completed = $("#completed-count");
    const vocabulary = $("#vocabulary-count");
    const percent = $("#progress-percent");

    if (completed) completed.textContent = String(summary.completed ?? 0);
    if (vocabulary) vocabulary.textContent = String(summary.vocabulary ?? 0);
    if (percent) percent.textContent = `${summary.percent ?? 0}%`;
  }

  /* ---------------------------------------------------------
     页面标题、等级和语言
     --------------------------------------------------------- */

  function updateLevelDisplay() {
    const currentLevel = $("#current-level");
    if (currentLevel) currentLevel.textContent = state.level;

    $$(".level-tab").forEach(button => {
      const active = button.dataset.level === state.level;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    const levelInfo = LEVELS[state.level] || LEVELS.A0;
    const eyebrow = $("#selected-level-eyebrow");
    const title = $("#selected-level-title");
    const description = $("#level-description");

    if (eyebrow) eyebrow.textContent = `当前等级 ${state.level}`;
    if (title) title.textContent = levelInfo.title;
    if (description) description.textContent = levelInfo.description;
  }

  function updateLanguageDisplay() {
    const languageInfo = LANGUAGES[state.languageCode];
    const title = $("#language-title");
    const description = $("#language-description");

    if (title) {
      title.textContent = `${languageInfo.name}课程`;
    }

    if (description) {
      description.textContent = getText(
        state.languageData?.descriptionZh ??
        state.languageData?.description,
        languageInfo.description
      );

      // 如果数据中的 description 是英文，则使用中文默认介绍。
      if (!hasChinese(description.textContent)) {
        description.textContent = languageInfo.description;
      }
    }

    // 界面语言是中文，目标语言原文通过各内容元素单独标记。
    document.documentElement.lang = "zh-CN";
    document.title = `${languageInfo.name}课程 | WorldLingua`;
  }

  function setWorkspaceVisible(visible) {
    const listSection = $("#lesson-list-section");
    const workspace = $("#lesson-workspace");

    if (listSection) listSection.hidden = visible;
    if (workspace) workspace.hidden = !visible;
  }

  /* ---------------------------------------------------------
     课程列表
     --------------------------------------------------------- */

  function renderLessonList() {
    const list = $("#lesson-list");
    const total = $("#lesson-total");

    if (!list) return;

    const lessons = getLessonsForLevel();

    if (total) total.textContent = `共 ${lessons.length} 课`;

    if (lessons.length === 0) {
      list.innerHTML = `
        <div class="empty-lessons">
          <p><strong>当前等级暂无课程。</strong></p>
          <p>请检查对应语言文件中是否包含 ${escapeHTML(state.level)} 等级的课程。</p>
        </div>
      `;
      return;
    }

    list.innerHTML = lessons.map((lesson, index) => {
      const completed = isCompleted(lesson.id);

      return `
        <button
          class="lesson-card ${completed ? "completed" : ""}"
          type="button"
          data-lesson-id="${escapeHTML(lesson.id)}"
          aria-label="打开第 ${index + 1} 课：${escapeHTML(lesson.title)}"
        >
          <span class="lesson-card-number">
            ${String(index + 1).padStart(2, "0")}
          </span>

          <span class="lesson-card-content">
            <span class="word-category">${escapeHTML(lesson.category)}</span>

            <span class="lesson-card-content-title">
              <h3>${escapeHTML(lesson.title)}</h3>
            </span>

            <span class="lesson-card-content-description">
              <p>${escapeHTML(lesson.description)}</p>
            </span>

            <span class="lesson-card-meta">
              <span class="lesson-card-tag">${lesson.vocabulary.length} 个单词</span>
              <span class="lesson-card-tag">${lesson.sentences.length} 个例句</span>
            </span>
          </span>

          <span class="lesson-card-status" aria-label="${
            completed ? "已完成" : "未完成"
          }">${completed ? "✓" : "→"}</span>
        </button>
      `;
    }).join("");

    list.querySelectorAll("[data-lesson-id]").forEach(button => {
      button.addEventListener("click", () => {
        openLesson(button.dataset.lessonId);
      });
    });
  }

  /* ---------------------------------------------------------
     单词
     --------------------------------------------------------- */

  function renderVocabulary(items) {
    if (!items.length) {
      return `<div class="status-message">本课暂时没有单词内容。</div>`;
    }

    return `
      <h3 class="lesson-section-title">重点词汇</h3>
      <p class="wl-section-hint">先看目标语言，再结合英语和中文理解词义。</p>

      <div class="vocabulary-grid">
        ${items.map(item => {
          const original = getOriginal(item);
          const reading = getReading(item);
          const gender = getGender(item);
          const pos = getPartOfSpeech(item);
          const example = getExample(item);
          const exampleEn = getExampleEnglish(item);
          const exampleZh = getExampleChinese(item);
          const lang = state.languageCode;

          return `
            <article class="vocabulary-card wl-vocabulary-card">
              <div class="vocabulary-card-top">
                <div>
                  <div class="vocabulary-word" lang="${lang}">
                    ${escapeHTML(original)}
                  </div>

                  ${
                    reading
                      ? `<p class="vocabulary-reading" lang="${lang}">${escapeHTML(reading)}</p>`
                      : ""
                  }

                  <div class="wl-word-meta">
                    ${pos ? `<span class="word-category">${escapeHTML(pos)}</span>` : ""}
                    ${gender ? `<span class="word-category">${escapeHTML(gender)}</span>` : ""}
                  </div>
                </div>

                <button
                  class="speaker-button"
                  type="button"
                  data-speak="${escapeHTML(original)}"
                  data-speak-lang="${lang}"
                  aria-label="播放单词发音：${escapeHTML(original)}"
                  title="播放发音"
                >🔊</button>
              </div>

              ${translationHTML(item)}

              ${
                example
                  ? `
                    <div class="vocabulary-example wl-example">
                      <strong lang="${lang}">${escapeHTML(example)}</strong>
                      ${
                        exampleEn
                          ? `<p class="wl-english"><span>英语：</span>${escapeHTML(exampleEn)}</p>`
                          : ""
                      }
                      ${
                        exampleZh
                          ? `<p class="wl-chinese"><span>中文：</span>${escapeHTML(exampleZh)}</p>`
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

  /* ---------------------------------------------------------
     例句
     --------------------------------------------------------- */

  function renderSentences(items) {
    if (!items.length) {
      return `<div class="status-message">本课暂时没有例句内容。</div>`;
    }

    return `
      <h3 class="lesson-section-title">实用例句</h3>

      <div class="sentence-list">
        ${items.map(item => {
          const original = getOriginal(item);
          const reading = getReading(item);
          const lang = state.languageCode;

          return `
            <article class="sentence-card">
              <div class="sentence-card-main">
                <div class="wl-content-text">
                  <p class="sentence-original" lang="${lang}">
                    ${escapeHTML(original)}
                  </p>

                  ${
                    reading
                      ? `<p class="sentence-reading" lang="${lang}">${escapeHTML(reading)}</p>`
                      : ""
                  }

                  ${translationHTML(item)}
                </div>

                <button
                  class="speaker-button"
                  type="button"
                  data-speak="${escapeHTML(original)}"
                  data-speak-lang="${lang}"
                  aria-label="播放例句发音"
                  title="播放发音"
                >🔊</button>
              </div>
            </article>
          `;
        }).join("")}
      </div>
    `;
  }

  /* ---------------------------------------------------------
     对话
     --------------------------------------------------------- */

  function renderDialogue(items) {
    if (!items.length) {
      return `<div class="status-message">本课暂时没有对话内容。</div>`;
    }

    return `
      <h3 class="lesson-section-title">情景对话</h3>
      <p class="wl-section-hint">阅读原文，参考英语和中文理解每一句话。</p>

      <div class="dialogue-list">
        ${items.map((item, index) => {
          const speaker = getText(
            item.speaker ?? item.role,
            index % 2 === 0 ? "人物 A" : "人物 B"
          );
          const original = getOriginal(item);
          const reading = getReading(item);
          const lang = state.languageCode;

          return `
            <article class="dialogue-turn">
              <span class="dialogue-speaker">${escapeHTML(speaker)}</span>

              <div class="dialogue-bubble">
                <div class="dialogue-bubble-content">
                  <p class="dialogue-original" lang="${lang}">
                    ${escapeHTML(original)}
                  </p>

                  ${
                    reading
                      ? `<p class="dialogue-reading" lang="${lang}">${escapeHTML(reading)}</p>`
                      : ""
                  }

                  ${translationHTML(item)}
                </div>

                <button
                  class="speaker-button"
                  type="button"
                  data-speak="${escapeHTML(original)}"
                  data-speak-lang="${lang}"
                  aria-label="播放对话发音"
                  title="播放发音"
                >🔊</button>
              </div>
            </article>
          `;
        }).join("")}
      </div>
    `;
  }

  /* ---------------------------------------------------------
     练习
     如果 learner.js 提供专用模块，优先调用；
     否则使用这里的中文界面练习作为备用。
     --------------------------------------------------------- */

  function renderPractice(items) {
    const panel = $("#lesson-panel");
    if (!panel) return;

    if (!items.length) {
      panel.innerHTML = `<div class="status-message">本课暂时没有练习题。</div>`;
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
        onComplete: updateProgressDisplay
      });
      return;
    }

    panel.innerHTML = `
      <h3 class="lesson-section-title">练习与自测</h3>
      <p class="wl-section-hint">选择一个答案，检查自己是否理解了本课内容。</p>
      <div class="wl-practice-list">
        ${items.map((item, index) => {
          const question = getText(item.question ?? item.text, `第 ${index + 1} 题`);
          const questionZh = getText(item.questionZh ?? item.meaningZh ?? "", "");
          const options = Array.isArray(item.options) ? item.options : [];
          const answer = getText(item.answer ?? item.correctAnswer ?? "", "");
          const explanation = getText(
            item.explanationZh ?? item.explanation ?? "",
            ""
          );

          return `
            <article class="wl-practice-card" data-practice-index="${index}">
              <p class="wl-practice-number">第 ${index + 1} 题</p>
              <h4>${escapeHTML(question)}</h4>

              ${
                questionZh && questionZh !== question
                  ? `<p class="wl-chinese"><span>中文：</span>${escapeHTML(questionZh)}</p>`
                  : ""
              }

              <div class="wl-practice-options">
                ${
                  options.map(option => {
                    const optionText = getText(
                      typeof option === "object"
                        ? option.text ?? option.label ?? option.value
                        : option,
                      ""
                    );

                    return `
                      <button
                        type="button"
                        class="wl-option-button"
                        data-option="${escapeHTML(optionText)}"
                      >${escapeHTML(optionText)}</button>
                    `;
                  }).join("")
                }
              </div>

              <p class="wl-practice-feedback" aria-live="polite"></p>
              <p class="wl-practice-explanation" hidden>${escapeHTML(explanation)}</p>
              <span class="wl-practice-answer" hidden>${escapeHTML(answer)}</span>
            </article>
          `;
        }).join("")}
      </div>
    `;

    panel.querySelectorAll(".wl-practice-card").forEach(card => {
      const answer = $(".wl-practice-answer", card)?.textContent ?? "";
      const feedback = $(".wl-practice-feedback", card);
      const explanation = $(".wl-practice-explanation", card);
      const buttons = $$(".wl-option-button", card);

      buttons.forEach(button => {
        button.addEventListener("click", () => {
          if (card.dataset.answered === "true") return;

          const selected = button.dataset.option ?? "";
          const correct = selected.trim() === answer.trim();

          card.dataset.answered = "true";

          buttons.forEach(optionButton => {
            optionButton.disabled = true;

            if ((optionButton.dataset.option ?? "").trim() === answer.trim()) {
              optionButton.classList.add("is-correct");
            }
          });

          if (correct) {
            button.classList.add("is-correct");
            if (feedback) {
              feedback.textContent = "回答正确！做得很好。";
              feedback.classList.add("is-correct");
            }
          } else {
            button.classList.add("is-incorrect");
            if (feedback) {
              feedback.textContent = answer
                ? `还差一点。正确答案：${answer}`
                : "这次没有答对，请复习本课内容。";

              feedback.classList.add("is-incorrect");
            }
          }

          if (explanation && explanation.textContent.trim()) {
            explanation.hidden = false;
          }
        });
      });
    });
  }

  /* ---------------------------------------------------------
     渲染当前学习模块
     --------------------------------------------------------- */

  function renderCurrentSection() {
    const lesson = getCurrentLesson();
    const panel = $("#lesson-panel");

    if (!lesson || !panel) return;

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

  /* ---------------------------------------------------------
     课程导航和完成状态
     --------------------------------------------------------- */

  function updateLessonNavigation() {
    const previousButton = $("#previous-lesson");
    const nextButton = $("#next-lesson");
    const lessons = getLessonsForLevel();

    const index = lessons.findIndex(lesson => lesson.id === state.lessonId);

    if (previousButton) {
      previousButton.disabled = index <= 0;
      previousButton.textContent = "上一课";
    }

    if (nextButton) {
      nextButton.disabled = index < 0 || index >= lessons.length - 1;
      nextButton.textContent = "下一课 →";
    }
  }

  function updateCompletionButton() {
    const button = $("#complete-lesson");
    const completionSection = $(".lesson-completion");

    if (!button) return;

    const completed = state.lessonId ? isCompleted(state.lessonId) : false;

    button.textContent = completed ? "已完成 ✓" : "标记为已完成";
    button.setAttribute("aria-pressed", String(completed));

    if (completionSection) {
      completionSection.classList.toggle("is-complete", completed);
    }
  }

  function openLesson(lessonId) {
    const lesson = getLessons().find(item => item.id === String(lessonId));
    if (!lesson) return;

    state.lessonId = lesson.id;
    state.level = lesson.level;
    state.section = "vocabulary";

    const title = $("#lesson-title");
    const category = $("#lesson-category");
    const intro = $("#lesson-intro");
    const badge = $("#lesson-level-badge");

    if (title) title.textContent = lesson.title;
    if (category) category.textContent = lesson.category;
    if (intro) intro.textContent = lesson.description;
    if (badge) badge.textContent = lesson.level;

    updateLevelDisplay();
    setWorkspaceVisible(true);
    renderCurrentSection();
    updateCompletionButton();

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function backToLessons() {
    state.lessonId = null;

    setWorkspaceVisible(false);
    updateLevelDisplay();
    renderLessonList();

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function changeLevel(level) {
    if (!Object.prototype.hasOwnProperty.call(LEVELS, level)) return;

    state.level = level;
    state.lessonId = null;
    state.section = "vocabulary";

    setWorkspaceVisible(false);
    updateLevelDisplay();
    renderLessonList();
    updateProgressDisplay();
  }

  function changeSection(section) {
    if (!Object.prototype.hasOwnProperty.call(SECTION_NAMES, section)) return;

    state.section = section;
    renderCurrentSection();
  }

  function navigateLesson(direction) {
    const lessons = getLessonsForLevel();
    const currentIndex = lessons.findIndex(lesson => lesson.id === state.lessonId);
    const targetIndex = currentIndex + direction;

    if (targetIndex < 0 || targetIndex >= lessons.length) return;

    openLesson(lessons[targetIndex].id);
  }

  function markLessonComplete() {
    if (!state.lessonId) return;

    if (
      window.WorldLinguaProgress &&
      typeof window.WorldLinguaProgress.markCompleted === "function"
    ) {
      window.WorldLinguaProgress.markCompleted(
        state.languageCode,
        state.lessonId
      );
    } else {
      console.warn("找不到学习进度模块，请检查 js/progress.js。");
      return;
    }

    updateCompletionButton();
    updateProgressDisplay();
    renderLessonList();
  }

  /* ---------------------------------------------------------
     发音
     --------------------------------------------------------- */

  function speakFromButton(button) {
    const text = button.dataset.speak;
    const lang = button.dataset.speakLang || state.languageCode;

    if (!text) return;

    if (
      window.WorldLinguaSpeech &&
      typeof window.WorldLinguaSpeech.speak === "function"
    ) {
      window.WorldLinguaSpeech.speak(text, lang, button);
      return;
    }

    if (!("speechSynthesis" in window)) {
      console.warn("当前浏览器不支持语音合成。");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    const langSettings = {
      de: { prefix: "de", locale: "de-DE" },
      en: { prefix: "en", locale: "en-GB" },
      fr: { prefix: "fr", locale: "fr-FR" },
      es: { prefix: "es", locale: "es-ES" },
      ja: { prefix: "ja", locale: "ja-JP" }
    };

    const settings = langSettings[lang] || {
      prefix: lang,
      locale: lang
    };

    const voices = window.speechSynthesis.getVoices();
    const voice = voices.find(item =>
      item.lang.toLowerCase().startsWith(settings.prefix)
    );

    if (voice) utterance.voice = voice;
    utterance.lang = settings.locale;

    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  }

  /* ---------------------------------------------------------
     事件绑定
     --------------------------------------------------------- */

  function bindEvents() {
    $$(".level-tab").forEach(button => {
      button.addEventListener("click", () => changeLevel(button.dataset.level));
    });

    $$(".lesson-step-tab").forEach(button => {
      button.addEventListener("click", () => changeSection(button.dataset.step));
    });

    const backButton = $("#back-to-lessons");
    const previousButton = $("#previous-lesson");
    const nextButton = $("#next-lesson");
    const completeButton = $("#complete-lesson");

    if (backButton) backButton.addEventListener("click", backToLessons);
    if (previousButton) {
      previousButton.addEventListener("click", () => navigateLesson(-1));
    }
    if (nextButton) {
      nextButton.addEventListener("click", () => navigateLesson(1));
    }
    if (completeButton) {
      completeButton.addEventListener("click", markLessonComplete);
    }

    document.addEventListener("click", event => {
      const target = event.target;

      if (!(target instanceof Element)) return;

      const button = target.closest("[data-speak]");
      if (button) speakFromButton(button);
    });
  }

  /* ---------------------------------------------------------
     初始化
     --------------------------------------------------------- */

  function showMissingDataMessage() {
    const list = $("#lesson-list");
    if (!list) return;

    list.innerHTML = `
      <div class="status-message error">
        <strong>课程数据加载失败。</strong>
        <p>请检查 languages 文件夹中的语言文件是否存在，以及 learn.html 是否正确加载了这些文件。</p>
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
        `WorldLingua：找不到语言代码 "${state.languageCode}" 对应的课程数据。`
      );
      return;
    }

    renderLessonList();
    updateProgressDisplay();

    const params = new URLSearchParams(window.location.search);
    const requestedLevel = (params.get("level") || "A0").toUpperCase();
    const requestedLesson = params.get("lesson");

    if (Object.prototype.hasOwnProperty.call(LEVELS, requestedLevel)) {
      state.level = requestedLevel;
      updateLevelDisplay();
      renderLessonList();
    }

    if (requestedLesson) {
      const lesson = getLessons().find(item => item.id === requestedLesson);

      if (lesson) openLesson(lesson.id);
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
