import React from "react";

function SongListItems(props) {
  //   console.log("propies", props);

  return (
    <li id={props.item.id} className="SongListItems">
      <ul>
        <li>{props.item.title} </li>
        <li>{props.item.artist} </li>
        <li>{props.item.genre} </li>
        <li>{props.item.rating} </li>
      </ul>{" "}
    </li>
  );
}

export default SongListItems;
