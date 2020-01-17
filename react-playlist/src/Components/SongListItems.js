import React from "react";

function SongListItems(props) {
  return (
    <li id={props.item.id} className="SongListItems">
      <ul>
        <li>{props.item.title} </li>
        <li>{props.item.artist} </li>
        <li>{props.item.genre} </li>
        <li>{props.item.rating} </li>
        <img
          id={props.item.id}
          onClick={props.imgClick}
          src=".\trash-delete-icon.png"
        />
      </ul>{" "}
    </li>
  );
}

export default SongListItems;
