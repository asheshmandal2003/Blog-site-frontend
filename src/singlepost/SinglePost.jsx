import { NavLink } from "react-router-dom";
import "./singlepost.css";
import { data } from "../posts/Posts";

export default function SinglePost() {
  const index = data.map((item) => {
    return item.path;
  });
  const id = data.map((item) => {
    return item.id;
  });
  const idImage = data.filter((item)=>{
    return index == item.path
  }).
  map((item) => {
    return <img src={item.image} alt="image" className="singlePostImg" />;
  });
  return (
    <div className="singlepost">
      <NavLink to={index} key={id}>
        <div className="singlePostWrapper">
          {idImage}
          <h1 className="singlePostTitle">
            Lorem ipsum dolor sit.
            <div className="singlePostEdit">
              <span className="singlePostIcon">
                <ion-icon name="create-outline"></ion-icon>
              </span>
              <span className="singlePostIcon">
                <ion-icon name="trash-outline"></ion-icon>
              </span>
            </div>
          </h1>
          <div className="singlePostInfo">
            <span className="singlePostAuthor">
              Author: <b>Ashesh</b>
            </span>
            <span className="singlePostDate">1 hour ago</span>
          </div>
          <p className="singlePostDesc">
            {data.map((item) => {
              return item.description;
            })}
          </p>
        </div>
      </NavLink>
    </div>
  );
}
//
