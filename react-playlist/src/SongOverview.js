import React, { useState, useEffect } from "react";
import InputField from "./Components/InputField";
import SongList from "./Components/SongList";
import FilterButtons from "./Components/FilterButtons";

function SongOverview() {
  //   const songArray = {
  //     songInfo: [
  //       { id: 1, title: "hallo", artist: "world", genre: "herrie", rating: 1 },
  //       { id: 2, title: "hallo", artist: "world", genre: "herrie", rating: 1 },
  //       { id: 3, title: "hallo", artist: "world", genre: "herrie", rating: 1 },
  //       { id: 4, title: "hallo", artist: "world", genre: "herrie", rating: 1 }
  //     ]
  //   };
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
  function filterSong() {
    const arrayAZ = songArray.sort((a, b) => (a.title > b.title ? 1 : -1));
    setSongArray(arrayAZ);
    console.log("je bent langs sort", songArray);
  }

  function filter(props) {
    const buttonClicked = props.target.id;
    switch (buttonClicked) {
      case "filterSong":
        filterSong();
        break;
    }
  }

  return (
    <div>
      <InputField onClick={addSong} />
      <FilterButtons onClick={filter} />
      <SongList item={songArray} />
    </div>
  );
}
export default SongOverview;
