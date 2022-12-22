import { Link } from "react-router-dom";
import "./landing-cta.scss";

const LandingCTA = () => {
  return (
    <div class="landing-cta-container">
      <h2> jaredthejelly </h2>
      <p>
        I'm a full stack developer experienced in HTML, CSS, JavaScript and
        other programming languages, committed to creating intuitive,
        user-friendly websites and applications that will make a positive
        difference in people's lives and help businesses succeed.
      </p>
      <Link to="/about">
        <div> LEARN MORE </div>
      </Link>
    </div>
  );
};

export default LandingCTA;
