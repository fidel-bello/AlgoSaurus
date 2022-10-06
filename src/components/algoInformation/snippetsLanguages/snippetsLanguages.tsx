/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from "react";
import styles from "./snippetsLanguages.module.css";

import SyntaxHighlighter from "react-syntax-highlighter";
import { gruvboxDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
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
      <div className={styles.list}>
        {languages.map((language, index) => {
          return (
            <div
              onClick={() => setSelectedLanguage(language)}
              className={
                selectedLanguage === language
                  ? styles.list_item_selected
                  : styles.list_item
              }
              key={`${language}-${index}`}
            >
              {language}
            </div>
          );
        })}
      </div>
      <div className={styles.code_container}>
        {/* @ts-ignore */}
        <SyntaxHighlighter language={selectedLanguage} style={gruvboxDark}>
          {snippets[`${selectedLanguage}`]}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default SnippetsLanguages;
