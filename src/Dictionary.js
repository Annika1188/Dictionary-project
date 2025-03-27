import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    console.log("📘 Dictionary API response:", response);
    setResults(response.data[0]);
  }

  function handlePexelsResponse(response) {
    console.log("✅ PEXELS RESPONSE:", response);
    if (response && response.data && response.data.photos) {
      setPhotos(response.data.photos);
    } else {
      console.warn("⚠️ No photos found in Pexels response.");
    }
  }

  function search() {
    // Dictionary API
    let dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(dictionaryApiUrl).then(handleResponse);

    // Pexels API (via cors-anywhere)
    let pexelsApiKey =
      "a1tf0iUi51wOQOO01KNPc3hQDHwBtzi6uVoNHYvudGAgqGpoyGuRaP60";
    let pexelsApiUrl = `https://cors-anywhere.herokuapp.com/https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;

    let headers = {
      Authorization: `Bearer ${pexelsApiKey}`,
      "X-Requested-With": "XMLHttpRequest",
    };

    console.log("📸 Calling Pexels:", pexelsApiUrl);

    axios
      .get(pexelsApiUrl, { headers: headers })
      .then(handlePexelsResponse)
      .catch((error) => {
        console.error("❌ Pexels API error:", error);
      });
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
