import React, { useState, useEffect } from "react";
import InputField from "./Components/InputField";
import SongList from "./Components/SongList";
import FilterButtons from "./Components/FilterButtons";
import NavBar from "./NavBar";

function SongOverview() {
  let [, setState] = useState();
  const [songArray, setSongArray] = useState([
    { id: 1, title: "dallo", artist: "world", genre: "herrie", rating: 1 },
    { id: 2, title: "allo", artist: "world", genre: "herrie", rating: 1 },
    { id: 3, title: "zallo", artist: "world", genre: "herrie", rating: 1 },
    { id: 4, title: "hallo", artist: "world", genre: "herrie", rating: 1 }
  ]);

  console.log("songs in overview", songArray);

  function addSong(props) {
    console.log("props addsong", props);
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
    console.log("arg addsong", newSong);
  }

  // function filterSong() {

  //   // });
  // }

  function filter(props) {
    const buttonClicked = props.target.id;
    switch (buttonClicked) {
      case "filterSong":
        filterAZ();
        break;
    }
  }

  function filterAZ() {
    setSongArray(songArray.sort((a, b) => (a.title > b.title ? 1 : -1)));
    setState({});
  }
  console.log("je bent langs sort", songArray);
  function emptyList() {
    setSongArray([]);
  }
  function deleteSong(event) {
    const id = event.target.id;
    setSongArray(songArray.filter(item => item.id != id));
  }
  // songArray.splice(id, 1);
  // setSongArray([...songArray]);

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
