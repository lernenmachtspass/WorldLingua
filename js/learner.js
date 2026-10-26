
/* =========================================================
   WorldLingua — Interactive Learning Engine
   File: js/learner.js

   Features:
   - Multiple-choice exercises
   - Immediate answer feedback
   - Score and accuracy tracking
   - Retry incorrect questions
   - Completion callback for app.js
   - Accessible, responsive HTML output
   ========================================================= */

(function () {
  "use strict";

  const state = {
    items: [],
    languageCode: "de",
    container: null,
    onComplete: null,
    currentIndex: 0,
    correctCount: 0,
    answeredCount: 0,
    finished: false,
    questions: [],
    results: []
  };

  const LANGUAGE_NAMES = {
    de: "German",
    en: "English",
    fr: "French",
    es: "Spanish",
    ja: "Japanese"
  };

  /**
   * Escape user/course data before inserting it into HTML.
   */
  function escapeHTML(value) {
    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  /**
   * Read the text of a question.
   */
  function getQuestionText(item) {
    if (typeof item === "string") {
      return item;
    }

    return String(
      item.question ??
      item.prompt ??
      item.text ??
      item.sentence ??
      item.word ??
      item.original ??
      item.target ??
      ""
    );
  }

  /**
   * Read the correct answer from an exercise.
   */
  function getCorrectAnswer(item) {
    if (typeof item === "string") {
      return item;
    }

    const answer =
      item.answer ??
      item.correctAnswer ??
      item.correct ??
      item.translation ??
      item.meaning ??
      item.target ??
      item.word ??
      "";

    if (Array.isArray(answer)) {
      return answer.length ? String(answer[0]) : "";
    }

    return String(answer);
  }

  /**
   * Read possible answer options.
   */
  function getProvidedOptions(item) {
    if (!item || typeof item !== "object") {
      return [];
    }

    const options =
      item.options ??
      item.choices ??
      item.answers ??
      item.alternatives;

    if (!Array.isArray(options)) {
      return [];
    }

    return options.map(function (option) {
      if (typeof option === "object" && option !== null) {
        return String(
          option.text ??
          option.label ??
          option.value ??
          option.answer ??
          ""
        );
      }

      return String(option);
    }).filter(Boolean);
  }

  /**
   * Create a unique list of answer options.
   */
  function uniqueOptions(options) {
    const seen = new Set();

    return options.filter(function (option) {
      const key = String(option).trim().toLowerCase();

      if (!key || seen.has(key)) {
        return false;
      }

      seen.add(key);
      return true;
    });
  }

  /**
   * Shuffle an array without changing the original.
   */
  function shuffleArray(array) {
    const result = array.slice();

    for (let i = result.length - 1; i > 0; i -= 1) {
      const j = Math.floor(Math.random() * (i + 1));

      const temporary = result[i];
      result[i] = result[j];
      result[j] = temporary;
    }

    return result;
  }

  /**
   * Compare answers while ignoring surrounding whitespace
   * and letter case.
   */
  function normalizeAnswer(value) {
    return String(value ?? "")
      .trim()
      .toLocaleLowerCase();
  }

  /**
   * Read a translation or explanation for feedback.
   */
  function getExplanation(item) {
    if (!item || typeof item !== "object") {
      return "";
    }

    return String(
      item.explanation ??
      item.feedback ??
      item.translation ??
      item.meaning ??
      ""
    );
  }

  /**
   * Build exercises from the supplied items.
   *
   * Supports:
   * 1. Explicit exercises with options and correct answers.
   * 2. Vocabulary items with a word and translation.
   * 3. Sentence items with text and translation.
   *
   * If the item does not contain options, distractors are
   * taken from the other items in the same exercise set.
   */
  function buildQuestions(items) {
    const source = Array.isArray(items) ? items : [];

    const prepared = source.map(function (item) {
      const question = getQuestionText(item);
      const answer = getCorrectAnswer(item);

      return {
        source: item,
        question: question,
        answer: answer,
        providedOptions: getProvidedOptions(item),
        explanation: getExplanation(item),
        reading: item && typeof item === "object"
          ? String(item.reading ?? item.romaji ?? "")
          : "",
        promptTranslation: item && typeof item === "object"
          ? String(
              item.questionTranslation ??
              item.promptTranslation ??
              ""
            )
          : ""
      };
    }).filter(function (item) {
      return item.question.trim() && item.answer.trim();
    });

    return prepared.map(function (item, index) {
      const otherAnswers = prepared
        .filter(function (other, otherIndex) {
          return (
            otherIndex !== index &&
            normalizeAnswer(other.answer) !==
              normalizeAnswer(item.answer)
          );
        })
        .map(function (other) {
          return other.answer;
        });

      const options = uniqueOptions([
        ...item.providedOptions,
        item.answer,
        ...shuffleArray(otherAnswers).slice(0, 3)
      ]);

      return {
        question: item.question,
        answer: item.answer,
        options: shuffleArray(options),
        explanation: item.explanation,
        reading: item.reading,
        promptTranslation: item.promptTranslation
      };
    }).filter(function (item) {
      return item.options.length >= 2;
    });
  }

  /**
   * Create the initial practice interface.
   */
  function renderPractice(config) {
    const settings = config || {};

    state.items = Array.isArray(settings.items)
      ? settings.items
      : [];

    state.languageCode = String(
      settings.languageCode || "de"
    ).toLowerCase();

    state.container = settings.container || null;

    state.onComplete = typeof settings.onComplete === "function"
      ? settings.onComplete
      : null;

    state.currentIndex = 0;
    state.correctCount = 0;
    state.answeredCount = 0;
    state.finished = false;
    state.results = [];

    state.questions = buildQuestions(state.items);

    if (!state.container) {
      return;
    }

    if (!state.questions.length) {
      state.container.innerHTML = `
        <div class="empty-state">
          <h3>No exercises available yet</h3>
          <p>
            Add exercise questions or vocabulary items
            with translations to this lesson.
          </p>
        </div>
      `;
      return;
    }

    renderQuestion();
  }

  /**
   * Render the current question.
   */
  function renderQuestion() {
    if (!state.container || state.finished) {
      return;
    }

    const question = state.questions[state.currentIndex];

    if (!question) {
      finishPractice();
      return;
    }

    const total = state.questions.length;
    const current = state.currentIndex + 1;
    const progress = Math.round(
      (state.currentIndex / total) * 100
    );

    const optionsHTML = question.options
      .map(function (option, index) {
        return `
          <button
            type="button"
            class="quiz-option"
            data-option-index="${index}"
            aria-pressed="false"
          >
            <span class="quiz-option-letter">
              ${String.fromCharCode(65 + index)}
            </span>
            <span class="quiz-option-text">
              ${escapeHTML(option)}
            </span>
          </button>
        `;
      })
      .join("");

    const readingHTML = question.reading
      ? `
        <p class="quiz-reading">
          ${escapeHTML(question.reading)}
        </p>
      `
      : "";

    const translationHTML = question.promptTranslation
      ? `
        <p class="quiz-prompt-translation">
          ${escapeHTML(question.promptTranslation)}
        </p>
      `
      : "";

    state.container.innerHTML = `
      <section class="quiz-card" aria-live="polite">
        <div class="quiz-topline">
          <span class="quiz-counter">
            Question ${current} of ${total}
          </span>
          <span class="quiz-score">
            Correct: ${state.correctCount}
          </span>
        </div>

        <div
          class="quiz-progress-track"
          role="progressbar"
          aria-label="Exercise progress"
          aria-valuemin="0"
          aria-valuemax="100"
          aria-valuenow="${progress}"
        >
          <div
            class="quiz-progress-fill"
            style="width: ${progress}%"
          ></div>
        </div>

        <div class="quiz-question">
          <p class="quiz-instruction">
            Choose the correct answer.
          </p>

          <h3>${escapeHTML(question.question)}</h3>

          ${readingHTML}
          ${translationHTML}
        </div>

        <div class="quiz-options">
          ${optionsHTML}
        </div>

        <div
          class="quiz-feedback"
          id="quiz-feedback"
          role="status"
          aria-live="polite"
        ></div>

        <div class="quiz-actions">
          <button
            type="button"
            class="button button-primary"
            id="quiz-check"
            disabled
          >
            Check answer
          </button>

          <button
            type="button"
            class="button button-secondary"
            id="quiz-next"
            hidden
          >
            ${current === total ? "See results" : "Next question"}
          </button>
        </div>
      </section>
    `;

    bindQuestionEvents();
  }

  /**
   * Attach event listeners to the current question.
   */
  function bindQuestionEvents() {
    if (!state.container) {
      return;
    }

    const options = state.container.querySelectorAll(
      ".quiz-option"
    );

    const checkButton = state.container.querySelector(
      "#quiz-check"
    );

    const nextButton = state.container.querySelector(
      "#quiz-next"
    );

    options.forEach(function (button) {
      button.addEventListener("click", function () {
        if (state.finished || button.disabled) {
          return;
        }

        options.forEach(function (option) {
          option.classList.remove("selected");
          option.setAttribute("aria-pressed", "false");
        });

        button.classList.add("selected");
        button.setAttribute("aria-pressed", "true");

        if (checkButton) {
          checkButton.disabled = false;
        }
      });
    });

    if (checkButton) {
      checkButton.addEventListener("click", checkAnswer);
    }

    if (nextButton) {
      nextButton.addEventListener("click", nextQuestion);
    }
  }

  /**
   * Check the selected answer and display feedback.
   */
  function checkAnswer() {
    if (state.finished || !state.container) {
      return;
    }

    const selected = state.container.querySelector(
      ".quiz-option.selected"
    );

    if (!selected) {
      return;
    }

    const question = state.questions[state.currentIndex];

    const selectedIndex = Number(
      selected.getAttribute("data-option-index")
    );

    const selectedAnswer = question.options[selectedIndex];

    const isCorrect =
      normalizeAnswer(selectedAnswer) ===
      normalizeAnswer(question.answer);

    state.answeredCount += 1;

    if (isCorrect) {
      state.correctCount += 1;
    }

    state.results.push({
      question: question.question,
      selectedAnswer: selectedAnswer,
      correctAnswer: question.answer,
      correct: isCorrect
    });

    const options = state.container.querySelectorAll(
      ".quiz-option"
    );

    options.forEach(function (button) {
      button.disabled = true;

      const index = Number(
        button.getAttribute("data-option-index")
      );

      const option = question.options[index];

      if (
        normalizeAnswer(option) ===
        normalizeAnswer(question.answer)
      ) {
        button.classList.add("correct");
      } else if (button === selected && !isCorrect) {
        button.classList.add("incorrect");
      }
    });

    const feedback = state.container.querySelector(
      "#quiz-feedback"
    );

    if (feedback) {
      const explanation = question.explanation
        ? `<p>${escapeHTML(question.explanation)}</p>`
        : "";

      feedback.className = isCorrect
        ? "quiz-feedback is-correct"
        : "quiz-feedback is-incorrect";

      feedback.innerHTML = `
        <strong>
          ${isCorrect ? "Correct!" : "Not quite."}
        </strong>

        ${
          isCorrect
            ? ""
            : `<p>Correct answer: <strong>${escapeHTML(question.answer)}</strong></p>`
        }

        ${explanation}
      `;
    }

    const checkButton = state.container.querySelector(
      "#quiz-check"
    );

    const nextButton = state.container.querySelector(
      "#quiz-next"
    );

    if (checkButton) {
      checkButton.hidden = true;
    }

    if (nextButton) {
      nextButton.hidden = false;
      nextButton.focus();
    }

    updateScoreDisplay();
  }

  /**
   * Update the score display.
   */
  function updateScoreDisplay() {
    if (!state.container) {
      return;
    }

    const score = state.container.querySelector(".quiz-score");

    if (score) {
      score.textContent =
        `Correct: ${state.correctCount}`;
    }
  }

  /**
   * Move to the next question.
   */
  function nextQuestion() {
    if (state.finished) {
      return;
    }

    state.currentIndex += 1;

    if (state.currentIndex >= state.questions.length) {
      finishPractice();
      return;
    }

    renderQuestion();
  }

  /**
   * Show the final score.
   */
  function finishPractice() {
    if (!state.container || state.finished) {
      return;
    }

    state.finished = true;

    const total = state.questions.length;
    const correct = state.correctCount;

    const accuracy = total > 0
      ? Math.round((correct / total) * 100)
      : 0;

    let title = "Keep practising!";
    let message = "Review the answers and try again.";

    if (accuracy === 100) {
      title = "Perfect score!";
      message = "Excellent work. You answered every question correctly.";
    } else if (accuracy >= 80) {
      title = "Great work!";
      message = "You are making good progress.";
    } else if (accuracy >= 60) {
      title = "Good effort!";
      message = "A little more practice will help.";
    }

    state.container.innerHTML = `
      <section class="quiz-card quiz-results">
        <div class="quiz-results-icon" aria-hidden="true">
          ${accuracy === 100 ? "★" : "✓"}
        </div>

        <h3>${escapeHTML(title)}</h3>

        <p>${escapeHTML(message)}</p>

        <div class="quiz-results-score">
          <strong>${correct} / ${total}</strong>
          <span>Correct answers</span>
        </div>

        <div class="quiz-results-track">
          <div
            class="quiz-results-fill"
            style="width: ${accuracy}%"
          ></div>
        </div>

        <p class="quiz-results-accuracy">
          Accuracy: ${accuracy}%
        </p>

        <div class="quiz-results-actions">
          <button
            type="button"
            class="button button-primary"
            id="quiz-retry"
          >
            Try again
          </button>
        </div>
      </section>
    `;

    const retryButton = state.container.querySelector(
      "#quiz-retry"
    );

    if (retryButton) {
      retryButton.addEventListener("click", function () {
        renderPractice({
          items: state.items,
          languageCode: state.languageCode,
          container: state.container,
          onComplete: state.onComplete
        });
      });
    }

    if (typeof state.onComplete === "function") {
      state.onComplete({
        total: total,
        correct: correct,
        accuracy: accuracy,
        results: state.results.slice()
      });
    }
  }

  /**
   * Public API used by app.js.
   */
  window.WorldLinguaLearner = {
    renderPractice: renderPractice,

    getState: function () {
      return {
        languageCode: state.languageCode,
        currentIndex: state.currentIndex,
        total: state.questions.length,
        correctCount: state.correctCount,
        answeredCount: state.answeredCount,
        finished: state.finished,
        results: state.results.slice()
      };
    },

    restart: function () {
      renderPractice({
        items: state.items,
        languageCode: state.languageCode,
        container: state.container,
        onComplete: state.onComplete
      });
    }
  };
})();
