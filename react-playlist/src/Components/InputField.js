import React, { useState, useEffect } from "react";

function InputField(props) {
  const [song, setSong] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");

  const clicked = () => {
    props.onClick([
      { id: 0, title: song, artist: artist, genre: genre, rating: rating }
    ]);
  };

  return (
    <div className="InputField">
      <input
        type="text"
        name="song"
        onChange={e => setSong(e.target.value)}
      ></input>
      <input
        type="text"
        name="artist"
        onChange={e => setArtist(e.target.value)}
      ></input>
      <select name="genre" onChange={e => setGenre(e.target.value)}>
        <option value="">Kies een genre</option>
        <option value="rock">Rock</option>
        <option value="codmus">Codmus</option>
        <option value="jazz">Jazz</option>
        <option value="herrie">Herrie</option>
      </select>
      <select name="rating" onChange={e => setRating(e.target.value)}>
        <option value="">kies een rating</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button onClick={clicked}>Voeg Toe</button>
    </div>
  );
}
export default InputField;
