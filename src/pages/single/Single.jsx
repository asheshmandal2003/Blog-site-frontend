import SinglePost from "../../singlepost/SinglePost"
import Slidebar from "../../slidebar/Slidebar"
import "./single.css"

export default function Single() {
  return (
    <div className="single">
        <SinglePost/>
        <Slidebar/>
    </div>
  )
}
