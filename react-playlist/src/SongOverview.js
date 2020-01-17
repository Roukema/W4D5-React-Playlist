import React, { useState, useEffect } from "react";
import InputField from "./Components/InputField";
import SongList from "./Components/SongList";
import FilterButtons from "./Components/FilterButtons";
import NavBar from "./NavBar";

function SongOverview() {
  let [, setState] = useState();
  const [songArray, setSongArray] = useState([
    { id: 1, title: "dallo", artist: "aorld", genre: "serrie", rating: 1 },
    { id: 2, title: "allo", artist: "zorld", genre: "aerrie", rating: 4 },
    { id: 3, title: "zallo", artist: "corld", genre: "derrie", rating: 3 },
    { id: 4, title: "hallo", artist: "borld", genre: "zerrie", rating: 2 }
  ]);

  function addSong(props) {
    const [newSong] = props;
    const newId = songArray.length + 1;
    setSongArray([
      ...songArray,
      {
        id: newId,
        title: newSong.title,
        artist: newSong.artist,
        genre: newSong.genre,
        rating: newSong.rating
      }
    ]);
    // console.log("arg addsong", newSong);
  }

  function filter(props) {
    const buttonClicked = props.target.id;

    switch (buttonClicked) {
      case "filterSongA":
        setSongArray(songArray.sort((a, b) => (a.title > b.title ? 1 : -1)));
        setState({});
        break;
      case "filterArtistA":
        setSongArray(songArray.sort((a, b) => (a.artist > b.artist ? 1 : -1)));
        setState({});
        break;
      case "filterGenreA":
        setSongArray(songArray.sort((a, b) => (a.genre > b.genre ? 1 : -1)));
        setState({});
        break;
      case "filterRating5":
        setSongArray(songArray.sort((a, b) => (a.rating > b.rating ? -1 : 1)));
        setState({});
        break;
      case "filterSongZ":
        setSongArray(songArray.sort((a, b) => (a.title > b.title ? -1 : 1)));
        setState({});
        break;
      case "filterArtistZ":
        setSongArray(songArray.sort((a, b) => (a.artist > b.artist ? -1 : 1)));
        setState({});
        break;
      case "filterGenreZ":
        setSongArray(songArray.sort((a, b) => (a.genre > b.genre ? -1 : 1)));
        setState({});
        break;
      case "filterRating1":
        setSongArray(songArray.sort((a, b) => (a.rating > b.rating ? -1 : 1)));
        setState({});
        break;
    }
  }

  function emptyList() {
    setSongArray([]);
  }
  function deleteSong(event) {
    const id = event.target.id;
    setSongArray(songArray.filter(item => item.id != id));
  }

  return (
    <div>
      <InputField onClick={addSong} />
      <FilterButtons onClick={filter} />
      <SongList item={songArray} imgClick={deleteSong} />
      <button onClick={emptyList}>leeg de lijst</button>
    </div>
  );
}
export default SongOverview;
