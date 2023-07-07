import { useEffect, useState } from "react";
//custom hook for making api call
//returns fetched object as data
//takes url to api as parameter

const useFetchNews = (url) => {
  const [data, setData] = useState(null);

  async function fetchnews(url) {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    } catch (error) {
      setData("error");
    }
  }

  useEffect(() => {
    fetchnews(url);
  }, [url]);

  return [data];
};

export default useFetchNews;
