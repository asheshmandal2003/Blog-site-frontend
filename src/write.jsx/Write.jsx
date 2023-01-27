import "./write.css";

export default function Write() {
  return (
    <div className="write">
      <div className="writeImg">
        <img
          src="https://images.pexels.com/photos/545042/pexels-photo-545042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
        />
      </div>
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <span className="writeIcon">
              <ion-icon name="add-circle-outline"></ion-icon>
            </span>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            placeholder="Title..."
            className="writeInput"
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Write your story..."
            className="writeInput writeText"
            type="text"
          ></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  );
}
