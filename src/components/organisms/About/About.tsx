import "../About/About.css";

interface AboutImageData {
  path: string;
  alt: string;
}

export interface AboutProps {
  title: string;
  subTitle: string;
  text: string;
  aboutImages: AboutImageData[];
}

const About = (props: AboutProps) => {
  const aboutProps = props;

  return (
    <div className="about">
      <div className="about-image-container">
        <img
          className="about__image2"
          src={aboutProps.aboutImages[1].path}
          alt={aboutProps.aboutImages[1].alt}
        />
        <img
          className="about__image1"
          src={aboutProps.aboutImages[0].path}
          alt={aboutProps.aboutImages[0].alt}
        />
      </div>
      <div className="about-text-container">
        <h1 className="heading">{aboutProps.title}</h1>
        <h2 className="subheading">{aboutProps.subTitle}</h2>
        <p className="about__paragraph">{aboutProps.text}</p>
      </div>
    </div>
  );
};
export default About;
