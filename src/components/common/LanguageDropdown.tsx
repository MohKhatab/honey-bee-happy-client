import { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useTranslation } from "react-i18next"; // Import useTranslation

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: "fin", name: "Finnish", flag: "flags/language-finnish.png" },
  { code: "en", name: "English", flag: "flags/language-english.png" },
  { code: "sv", name: "Swedish", flag: "flags/language-swedish.png" },
];

export const LanguageDropdown = ({ textClass }: { textClass: string }) => {
  const { i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const [selectedLanguage, setSelectedLanguage] = useState<Language>(
    languages.find((lang) => lang.code === i18n.language) || languages[0]
  );

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectLanguage = (language: Language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language.code);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const currentI18nLanguage = i18n.language;
    const foundLanguage = languages.find(
      (lang) => lang.code === currentI18nLanguage
    );
    if (foundLanguage && foundLanguage.code !== selectedLanguage.code) {
      setSelectedLanguage(foundLanguage);
    }
  }, [i18n.language, selectedLanguage.code]);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={toggleDropdown}
        className={`flex items-center justify-center gap-2 cursor-pointer ${textClass}`}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <img
          src={selectedLanguage.flag}
          alt={`${selectedLanguage.name} flag`}
          className="w-8 h-auto"
        />
        <span className="font-semibold">
          {selectedLanguage.code.toUpperCase()}
        </span>
        <FaChevronDown className="text-primary-500 text-xl" />
      </button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-xl bg-primary-200/50 backdrop-blur-lg focus:outline-none"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="py-1" role="none">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleSelectLanguage(language)}
                className="w-full text-left flex items-center gap-3 px-4 py-2 text-md text-grayscale-900 hover:bg-primary-300/50 cursor-pointer transition-colors"
                role="menuitem"
              >
                <img
                  src={language.flag}
                  alt={`${language.name} flag`}
                  className="w-8 h-auto"
                />
                <span>{language.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
