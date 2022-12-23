import "./about-me-section.scss";
import Socials from '../../components/Socials';

const AboutMeSection = () => {
  return (
    <div className="about-me-section-container">
      <div className="about-me-section">
        <h1 className="purple">Jared</h1>
        <h1 className="white">Hernandez</h1>
        <p>
          My name is Jared and I'm a full stack developer passionate about
          creating intuitive and user-friendly websites and applications. <br/>  I'm
          experienced in HTML, CSS, JavaScript, Rust and other programming
          languages, and I'm always looking to learn new technologies and
          understand the world around me. <br/> I'm committed to creating solutions
          that will make a positive difference in people's lives. I take great
          pride in my work and strive to create the best solutions possible. I'm
          passionate about people, animals, learning, coding, the ocean and
          especially jellyfish.
        </p>
        <Socials />
      </div>
    </div>

  );
};

export default AboutMeSection;
