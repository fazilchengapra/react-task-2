import React, { useEffect, useState } from "react";

function Quotes() {
  const [quote, setQuote] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((result) => result.json())
      .then((res) => {
        setQuote(res.quotes.slice(0, 10));
      });
  }, [quote]);
  return (
    <div className="container">
      {quote?.map((e) => (
        <div class="card">
          <div class="card-body">{e.quote}</div>
          <div className="aut">
            <p>-{e.author}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Quotes;
