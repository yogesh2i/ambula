import React from "react";
import "./News.scss";
import useFetchNews from "../../../../CustomHooks/useFetchNews";
//component displaying fetched news

export default function News() {
  const [data] = useFetchNews(
    "https://gnews.io/api/v4/top-headlines?category=general&country=in&max=9&apikey=a9ab379445766f55422f9af0410feae3"
  );
  //getting data from custom hook
  return (
    <div>
      <h2>Top News Today</h2>
      <div className="news__list">
        {!data ? (
          <h2>Getting some hot news for you...</h2>
        ) : data === "error" ? (
          "We are facing some issue."
        ) : (
          data.articles.map((item, index) => {
            return (
              <div key={index} className="news__item">
                <img src={item.image} alt={item.title} />
                <p>{item.title}</p>
                <p>{item.description.slice(0, 100)}...</p>
                <a href={item.url} target="_blank" rel="noreferrer">
                  Read more
                </a>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
