import "./slidebar.css"

export default function Slidebar() {
  return (
    <div className="slidebar">
      <div className="slidebarItem">
        <span className="slidebarTitle">ABOUT ME</span>
        <img
          src="https://i.pinimg.com/564x/e1/9f/47/e19f4768a10c3f399fd5ba92fc4186eb.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
          dolores laudantium, ab quae adipisci aut
        </p>
      </div>
      <div className="slidebarItem">
        <span className="slidebarTitle">CATEGORIES</span>
        <ul className="slidebarList">
            <li className="slidebarListItem">LIFE</li>
            <li className="slidebarListItem">MUSIC</li>
            <li className="slidebarListItem">STYLE</li>
            <li className="slidebarListItem">SPORTS</li>
            <li className="slidebarListItem">CINEMA</li>
            <li className="slidebarListItem">TECH</li>
        </ul>
        </div>
        <div className="slidebarItem">
        <span className="slidebarTitle">FOLLOW US</span>
        <div className="slidebarSocial">
        <div className="slidebarIcon">
          <ion-icon name="logo-facebook"></ion-icon>
        </div>
        <div className="slidebarIcon">
          <ion-icon name="logo-twitter"></ion-icon>
        </div>
        <div className="slidebarIcon">
          <ion-icon name="logo-pinterest" className="topLeftItem"></ion-icon>
        </div>
        <div className="slidebarIcon">
          <ion-icon name="logo-instagram" className="topLeftItem"></ion-icon>
        </div>
        </div>
        </div>
    </div>
  );
}
