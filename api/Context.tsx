import React, { createContext, useState, useEffect } from "react";
import { getNewsAPI } from "./api";
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

  const fetchNews = async () => {
    const { data } = await axios.get(getNewsAPI(category));
    setNews(data);
    setIndex(1);
  };

  useEffect(() => {
    fetchNews();
  }, [category]);

  return (
    <NewsContext.Provider value={{ news, index, setIndex, fetchNews }}>
      {children}
    </NewsContext.Provider>
  );
};

export default Context;