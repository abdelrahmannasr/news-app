import React, { createContext, useState, useEffect } from "react";
import { getNewsAPI, getSourceAPI } from "./api";
import axios from "axios";

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
        setSource
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default Context;
