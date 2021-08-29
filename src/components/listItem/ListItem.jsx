import {
  Add,
  PlayArrow,
  ThumbDownOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useState } from "react";
import "./listItem.scss";

export default function ListItem({ index }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src="https://images.indianexpress.com/2017/12/lord-of-the-rings-759.jpg"
        alt=""
      />

      <div className="itemInfo">
        <div className="icons">
          <PlayArrow />
          <Add />
          <ThumbUpAltOutlined />
          <ThumbDownOutlined />
        </div>
        <div className="itemInfoTop">
          <span>1 hour 14 mins</span>
          <span className="limit">+16</span>
          <span>1999</span>
        </div>
        <div className="desc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt in
          ipsa minus rerum est error at sint eligendi quos laborum, eos eius
          tempore quidem nisi, mollitia quaerat nihil alias vero.
        </div>
        <div className="genre">Action</div>
      </div>
    </div>
  );
}
