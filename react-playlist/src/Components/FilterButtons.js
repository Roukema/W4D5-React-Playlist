import React from "react";

function FilterButtons(props) {
  return (
    <div className="FilterButtons">
      <ul>
        <li id="filterSong" onClick={props.onClick}>
          Song
        </li>
        <li id="filterArtist">Artist</li>
        <li id="filterGenre">Genre</li>
        <li id="filterRating">Rating</li>
      </ul>
    </div>
  );
}

export default FilterButtons;
