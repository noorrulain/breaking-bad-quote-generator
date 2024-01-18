import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Picture from "./Picture";
import Button from "./Button";

function App() {
  const [quote, setQuote] = useState("");
  const [error, setError] = useState("");
  const [author, setAuthor] = useState("");
  useEffect(() => {
    axios
      .get("https://api.breakingbadquotes.xyz/v1/quotes")
      .then((res) => {
        setQuote(res.data[0].quote);
        setAuthor(res.data[0].author);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);
  function handleClick() {
    axios
      .get("https://api.breakingbadquotes.xyz/v1/quotes")
      .then((res) => {
        setQuote(res.data[0].quote);
        setAuthor(res.data[0].author);
      })
      .catch((err) => {
        setError(err.message);
      });
  }
  const imgSrc = require("../images/walter-white.jpg");
  return (
    <div>
    <h1>Breaking Bad Quotes</h1>
      <div className="card">
        <div className="quote-card">
          <p className="quote">{quote}</p>
          <p className="author">{author}</p>
        </div>
        <Picture author={author} />
      </div>
      <div className="button">
        <Button buttonClick={handleClick} />
      </div>
    </div>
  );
}

export default App;
