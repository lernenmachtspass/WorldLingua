
/* =========================================================
   WorldLingua — Speech and pronunciation
   File: js/speech.js
   ========================================================= */

(() => {
  "use strict";

  const LANGUAGE_CONFIG = {
    de: {
      lang: "de-DE",
      alternatives: ["de-DE", "de-AT", "de-CH"],
      rate: 0.78,
      pitch: 1
    },

    en: {
      lang: "en-GB",
      alternatives: ["en-GB", "en-US", "en-AU", "en-CA"],
      rate: 0.82,
      pitch: 1
    },

    fr: {
      lang: "fr-FR",
      alternatives: ["fr-FR", "fr-CA", "fr-BE", "fr-CH"],
      rate: 0.78,
      pitch: 1
    },

    es: {
      lang: "es-ES",
      alternatives: ["es-ES", "es-MX", "es-AR", "es-CO"],
      rate: 0.78,
      pitch: 1
    },

    ja: {
      lang: "ja-JP",
      alternatives: ["ja-JP"],
      rate: 0.75,
      pitch: 1
    }
  };

  let availableVoices = [];
  let currentUtterance = null;
  let currentButton = null;
  let voicesLoaded = false;

  const supported =
    typeof window !== "undefined" &&
    "speechSynthesis" in window &&
    typeof window.SpeechSynthesisUtterance !== "undefined";

  function getConfig(languageCode) {
    return LANGUAGE_CONFIG[languageCode] || LANGUAGE_CONFIG.de;
  }

  function loadVoices() {
    if (!supported) {
      return [];
    }

    try {
      availableVoices = window.speechSynthesis.getVoices() || [];
      voicesLoaded = availableVoices.length > 0;
    } catch (error) {
      availableVoices = [];
      voicesLoaded = false;
    }

    return availableVoices;
  }

  function normalizeLanguage(language) {
    return String(language || "")
      .trim()
      .replace("_", "-")
      .toLowerCase();
  }

  function findVoice(languageCode) {
    const config = getConfig(languageCode);

    if (!availableVoices.length) {
      loadVoices();
    }

    if (!availableVoices.length) {
      return null;
    }

    const desiredLanguages = config.alternatives.map(
      normalizeLanguage
    );

    /*
      Prefer an exact regional match, for example de-DE
      before accepting another German voice.
    */
    for (const desired of desiredLanguages) {
      const exact = availableVoices.find(voice =>
        normalizeLanguage(voice.lang) === desired
      );

      if (exact) {
        return exact;
      }
    }

    /*
      Fall back to another regional voice for the same language.
    */
    const primaryLanguage = languageCode.toLowerCase();

    const regional = availableVoices.find(voice =>
      normalizeLanguage(voice.lang).startsWith(primaryLanguage + "-")
    );

    if (regional) {
      return regional;
    }

    /*
      Last language-specific fallback.
    */
    return availableVoices.find(voice =>
      normalizeLanguage(voice.lang) === primaryLanguage
    ) || null;
  }

  function setButtonSpeaking(button, speaking) {
    if (!button) {
      return;
    }

    button.classList.toggle("speaking", speaking);
    button.setAttribute("aria-pressed", String(speaking));

    if (speaking) {
      button.dataset.speechState = "speaking";
    } else {
      delete button.dataset.speechState;
    }
  }

  function resetCurrentButton() {
    if (currentButton) {
      setButtonSpeaking(currentButton, false);
    }

    currentButton = null;
    currentUtterance = null;
  }

  function stop() {
    if (!supported) {
      resetCurrentButton();
      return;
    }

    try {
      window.speechSynthesis.cancel();
    } catch (error) {
      console.warn("WorldLingua: unable to stop speech.", error);
    }

    resetCurrentButton();
  }

  function buildUtterance(text, languageCode, options = {}) {
    const config = getConfig(languageCode);
    const utterance = new SpeechSynthesisUtterance(text);

    utterance.lang = config.lang;
    utterance.rate = Number.isFinite(options.rate)
      ? options.rate
      : config.rate;

    utterance.pitch = Number.isFinite(options.pitch)
      ? options.pitch
      : config.pitch;

    utterance.volume = Number.isFinite(options.volume)
      ? options.volume
      : 1;

    const voice = findVoice(languageCode);

    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
    }

    return utterance;
  }

  function speak(text, languageCode = "de", button = null, options = {}) {
    const cleanText = String(text ?? "").trim();

    if (!cleanText) {
      return false;
    }

    if (!supported) {
      alert(
        "Speech playback is not supported in this browser. Please try an up-to-date version of Chrome, Edge, or Safari."
      );

      return false;
    }

    /*
      Stop any previous utterance before starting a new one.
      This prevents overlapping words and sentences.
    */
    stop();

    const utterance = buildUtterance(
      cleanText,
      languageCode,
      options
    );

    currentUtterance = utterance;
    currentButton = button;

    if (button) {
      setButtonSpeaking(button, true);
    }

    utterance.onend = () => {
      if (currentUtterance === utterance) {
        resetCurrentButton();
      }
    };

    utterance.onerror = event => {
      if (currentUtterance === utterance) {
        resetCurrentButton();
      }

      /*
        "canceled" and "interrupted" are normal when a user
        clicks another speaker button.
      */
      if (
        event.error !== "canceled" &&
        event.error !== "interrupted"
      ) {
        console.warn(
          "WorldLingua speech error:",
          event.error
        );
      }
    };

    try {
      window.speechSynthesis.speak(utterance);
      return true;
    } catch (error) {
      resetCurrentButton();

      console.error(
        "WorldLingua: speech playback could not start.",
        error
      );

      return false;
    }
  }

  function speakSlow(text, languageCode = "de", button = null) {
    const config = getConfig(languageCode);

    return speak(text, languageCode, button, {
      rate: Math.max(0.55, config.rate - 0.12)
    });
  }

  function speakNormal(text, languageCode = "de", button = null) {
    const config = getConfig(languageCode);

    return speak(text, languageCode, button, {
      rate: Math.min(1, config.rate + 0.12)
    });
  }

  function getVoiceStatus(languageCode) {
    if (!supported) {
      return {
        supported: false,
        voicesAvailable: false,
        selectedVoice: null,
        message: "Speech synthesis is not supported."
      };
    }

    loadVoices();

    const voice = findVoice(languageCode);

    return {
      supported: true,
      voicesAvailable: availableVoices.length > 0,
      selectedVoice: voice ? voice.name : null,
      selectedVoiceLanguage: voice ? voice.lang : null,
      voicesLoaded,
      message: voice
        ? `Using ${voice.name} (${voice.lang}).`
        : "Using the browser's default voice if available."
    };
  }

  function getAvailableVoices() {
    if (!availableVoices.length) {
      loadVoices();
    }

    return availableVoices.map(voice => ({
      name: voice.name,
      lang: voice.lang,
      default: voice.default,
      localService: voice.localService
    }));
  }

  /*
    Browsers may load voices asynchronously.
    Refresh the list when the browser announces that voices
    have become available.
  */
  if (supported) {
    loadVoices();

    window.speechSynthesis.addEventListener?.(
      "voiceschanged",
      () => {
        loadVoices();
      }
    );
  }

  window.WorldLinguaSpeech = {
    speak,
    speakSlow,
    speakNormal,
    stop,
    getVoiceStatus,
    getAvailableVoices,
    supported
  };
})();
