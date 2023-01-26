import "../Styles/homepage.css";
import oreo from "../Images/oreo.png";

const Homepage = (props) => {
  return (
    <div className="homepage">
      <div className="homepage-holder">
        <div>
          <div>This is a home page.</div>
          <div>We sell a bunch of products here on this website.</div>
          
        </div>

        <img className="oreo" src={oreo} alt="oreo"></img>
      </div>
    </div>
  )
}

export default Homepage;