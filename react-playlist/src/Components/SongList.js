import React from "react";
import SongListItems from "./SongListItems";

function SongList(props) {
  //hier gaan we de array mappen
  const songArray = props.item;
  //   console.log("props", props);
  // console.log("songarray", songArray);
  const songListItems = songArray.map(item => (
    <SongListItems item={item} key={item.id} imgClick={props.imgClick} />
  ));
  return (
    <div className="Songlist">
      <ul className="Songs"> {songListItems} </ul>
    </div>
  );
}
export default SongList;
