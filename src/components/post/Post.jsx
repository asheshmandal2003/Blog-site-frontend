import { useState } from "react";
import { Link } from "react-router-dom";
import "./post.css";

export default function Post({ image, descrip, path }) {
  const [bookMark, setBookMark] = useState(false);
  const handleClick = () => {
    setBookMark(!bookMark);
  };
  const toggleClass = bookMark ? "active" : null;
  return (
    <div className="post">
      <div
        className={`postBookmark${toggleClass}`}
        onClick={handleClick}
        style={{
          position: "relative",
          left: "365px",
          top: "28px",
          fontSize: "27px",
          zIndex: 100,
        }}
      >
        <i class="fa-solid fa-bookmark"></i>
      </div>
      <div className="postImg">
        <img
          src={image}
          alt=""
          className="post__img"
        />
      </div>
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Flower</span>
          <span className="postCat">Love</span>
          <div className="postTitle">
            <Link to={path}>Lorem ipsum dolor sit.</Link>
          </div>
          <hr />
          <div className="postDate">1 hour ago</div>
          <div className="postDescription">{descrip}</div>
        </div>
      </div>
    </div>
  );
}
