import { useState, useEffect, useRef } from "react";
import { Globe } from "lucide-react";
import "../styles/LanguageSelector.css";
import i18n from "i18next";

export default function LanguageSelector() {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { code: "en", name: "English", flag: "EN" },
    { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
  ];

  // Load saved language
  // useEffect(() => {
  //   const saved = window.appLanguage || "en";
  //   setCurrentLanguage(saved);
  // }, []);

  // useEffect(() => {
  //   // Always start in English
  //   setCurrentLanguage("en");
  //   window.appLanguage = "en";
  // }, []);

  useEffect(() => {
    // Load saved language from sessionStorage (survives refresh)
    const saved = sessionStorage.getItem("appLanguage") || "en";
    setCurrentLanguage(saved);
    window.appLanguage = saved; // keep for dispatch
    i18n.changeLanguage(saved); // set language on app load
  }, []);

  const currentLang =
    languages.find((lang) => lang.code === currentLanguage) || languages[0];

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  // const handleLanguageChange = (langCode) => {
  //   setCurrentLanguage(langCode);
  //   window.appLanguage = langCode;
  //   window.dispatchEvent(
  //     new CustomEvent("languageChange", { detail: { language: langCode } })
  //   );
  //   setIsOpen(false);
  // };

  const handleLanguageChange = (langCode) => {
    setCurrentLanguage(langCode);
    window.appLanguage = langCode;
    sessionStorage.setItem("appLanguage", langCode); // survive refresh
    window.dispatchEvent(
      new CustomEvent("languageChange", { detail: { language: langCode } })
    );
    setIsOpen(false);
  };

  // rotating chevron icon
  const chevronStyle = {
    width: "16px",
    height: "16px",
    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 0.2s ease",
  };

  return (
    <div
      ref={dropdownRef}
      className="position-fixed bottom-0 end-0 m-4"
      style={{ zIndex: 9999 }}
    >
      {/* Dropdown */}
      {isOpen && (
        <div className="position-absolute bottom-100 end-0 mb-2 bg-white rounded shadow-lg border overflow-hidden">
          {languages.map((lang) => {
            const isActive = currentLang.code === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-100 d-flex align-items-center gap-3 px-3 py-2 border-0 fw-medium text-start ${
                  isActive ? "bg-light text-primary" : "bg-white text-secondary"
                }`}
                style={{ transition: "background-color 0.2s ease" }}
                onMouseEnter={(e) => {
                  if (!isActive)
                    e.currentTarget.classList.add("bg-light", "text-primary");
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    e.currentTarget.classList.remove(
                      "bg-light",
                      "text-primary"
                    );
                }}
              >
                <span style={{ fontSize: "24px" }}>{lang.flag}</span>
                <span>{lang.name}</span>
                {isActive && (
                  <span className="ms-auto text-primary fw-bold">✓</span>
                )}
              </button>
            );
          })}
        </div>
      )}

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn btn-custom-blue rounded-pill d-flex align-items-center gap-2 px-3 py-2 fw-medium shadow-sm"
        onMouseEnter={(e) => e.currentTarget.classList.add("shadow", "bg-blue")}
        onMouseLeave={(e) =>
          e.currentTarget.classList.remove("shadow", "bg-light")
        }
      >
        <Globe size={20} />
        <span>{currentLang.name}</span>
        <svg
          style={chevronStyle}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </div>
  );
}
