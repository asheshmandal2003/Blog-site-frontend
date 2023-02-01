import Header from "../../components/header/Header";
import Posts from "../posts/Posts";
import Slidebar from "../slidebar/Slidebar";
import "./home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <Slidebar />
      </div>
    </>
  );
}
