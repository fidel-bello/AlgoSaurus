import React, { useEffect, useState } from "react";
import styles from "./snippetsLanguages.module.css";

interface Props {
  snippets: any;
}

const SnippetsLanguages = ({ snippets }: Props): JSX.Element | null => {
  const [languages, setLanguages] = useState<string[] | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  useEffect(() => {
    const keys = Object.keys(snippets);
    setLanguages(keys);
    setSelectedLanguage(keys[0]);
  }, []);

  if (!languages) return null;
  if (!selectedLanguage) return null;

  return (
    <div className={styles.container}>
      {languages.map((language, index) => {
        return <div key={`${language}-${index}`}>{language}</div>;
      })}
    </div>
  );
};

export default SnippetsLanguages;
