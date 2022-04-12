import React, { createContext, useState, useEffect } from "react";
import { getNewsAPI, getSourceAPI } from "./api";
import axios from "axios";
import i18n from "i18n-js";

// export type NewsContextType = {
//   news: [];
//   category: string;
//   index: number;
// };

export const NewsContext = createContext(null);

const Context = ({ children }) => {
  const [news, setNews] = useState([]);
  const [category, setCategory] = useState("general");
  const [index, setIndex] = useState(1);
  const [source, setSource] = useState();
  // TODO: Add state for each color code to change the colors in one place
  const [darkTheme, setDarkTheme] = useState(true);
  const [lang, setLang] = useState("en");

  const en = {
    Discover: "Discover",
    AllNews: "All News",
    Settings: "Settings",
    SearchForNews: "Search for news",
    Categories: "Categories",
    NewsFeed: "News Feed",
    General: "General",
    Business: "Business",
    Entertainment: "Entertainment",
    Health: "Health",
    Science: "Science",
    Sports: "Sports",
    Technology: "Technology",
    Language: "Language",
    WrittenBy: "Written by"
  };

  const fr = {
    Discover: "Découvrir",
    AllNews: "Toutes les nouvelles",
    Settings: "Réglages",
    SearchForNews: "Rechercher des nouvelles",
    Categories: "Catégories",
    NewsFeed: "Fil d'actualité",
    General: "Générale",
    Business: "Affaires",
    Entertainment: "Divertissement",
    Health: "Santé",
    Science: "Science",
    Sports: "Des sports",
    Technology: "Technologie",
    Language: "Langue",
    WrittenBy: "Écrit par"
  };

  i18n.translations = { fr, en };

  useEffect(() => {
    i18n.locale = lang;
  }, [lang]);

  const fetchNews = async (cat = category) => {
    const { data } = await axios.get(getNewsAPI(cat));
    setNews(data);
    setIndex(1);
  };

  const fetchNewsFromSource = async () => {
    try {
      const { data } = await axios.get(getSourceAPI(source));
      setNews(data);
      setIndex(1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [category]);

  useEffect(() => {
    fetchNewsFromSource();
  }, [source]);

  return (
    <NewsContext.Provider
      value={{
        news,
        index,
        setIndex,
        fetchNews,
        category,
        setCategory,
        source,
        setSource,
        darkTheme,
        setDarkTheme,
        setLang
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default Context;
