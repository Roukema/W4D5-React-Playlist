import React from "react";

function FilterButtons(props) {
  return (
    <div className="FilterButtons">
      <ul>
        <li>
          <p>Song</p>
          <div className="up" id="filterSongA" onClick={props.onClick}>
            <img alt="up/down" id="filterSongA" src="./arrow.png" />
          </div>
          <div className="down" id="filterSongZ" onClick={props.onClick}>
            <img alt="up/down" id="filterSongZ" src="./arrow.png" />
          </div>
        </li>
        <li>
          <p> Artist</p>
          <div className="up" id="filterArtistA" onClick={props.onClick}>
            <img alt="up/down" id="filterArtistA" src="./arrow.png" />
          </div>
          <div className="down" id="filterSongZ" onClick={props.onClick}>
            <img alt="up/down" id="filterSongZ" src="./arrow.png" />
          </div>
        </li>
        <li>
          <p> Genre</p>
          <div className="up" id="filterGenreA" onClick={props.onClick}>
            <img alt="up/down" id="filterGenreA" src="./arrow.png" />
          </div>
          <div className="down" id="filterGenreZ" onClick={props.onClick}>
            <img alt="up/down" id="filterGenreZ" src="./arrow.png" />
          </div>
        </li>
        <li>
          <p>Rating</p>
          <div className="up" id="filterRating5" onClick={props.onClick}>
            <img alt="up/down" id="filterRating5" src="./arrow.png" />
          </div>
          <div className="down" id="filterRating1" onClick={props.onClick}>
            <img alt="up/down" id="filterRating1" src="./arrow.png" />
          </div>
        </li>
      </ul>
    </div>
  );
}

export default FilterButtons;
