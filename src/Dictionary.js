import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log("📘 Dictionary API response:", response);
    setResults(response.data[0]);
  }

  function search() {
    let dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(dictionaryApiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    console.log("🔤 Keyword updated:", event.target.value);
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <h1>What are you looking for?</h1>
        <section>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleKeywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">suggested words: sunset, flowers, coffee</div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
