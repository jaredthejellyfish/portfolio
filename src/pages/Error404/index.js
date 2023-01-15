import "./error404.scss";
import { WavyLink } from "react-wavy-transitions";

const Error404 = () => {
  return (
    <div className="error404-container">
      <div class="error404-text">
        <h1>404 Error</h1>
        <p>You dove too deep</p>
      </div>

      <WavyLink to="/" color="#212121" duration={1100} direction="down">
        HOME
      </WavyLink>
    </div>
  );
};

export default Error404;
