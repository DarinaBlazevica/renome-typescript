import React from "react";
import "../About/About.css";


interface AboutImageData{
  path: string;
  alt: string;
}

interface AboutProps {
  title: string;
  subtitle: string;
  content: string;
  images: Array<AboutImageData>;
}

const About: React.FC<AboutProps> = (props) => {
  const About = props;

  return (
    <div className="about">
      <div className="about-image-container">
        <img
          className="about__image2"
          src={About.images[0].path}
          alt={About.images[0].alt}
        />
        <img
          className="about__image1"
          src={About.images[1].path}
          alt={About.images[1].alt}
        />
      </div>
      <div className="about-text-container">
        <h1 className="heading">{About.title}</h1>
        <h2 className="subheading">{About.subtitle}</h2>
        <p className="about__paragraph">{About.content}</p>
      </div>
    </div>
  );
};
export default About;
