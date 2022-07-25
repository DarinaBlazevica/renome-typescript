import "../About/About.css";

interface AboutImageData {
  path: string;
  alt: string;
}

interface AboutProps {
  title: string;
  subtitle: string;
  content: string;
  images: AboutImageData[];
}

const About = (props: AboutProps) => {
  const aboutProps = props;

  return (
    <div className="about">
      <div className="about-image-container">
        <img
          className="about__image2"
          src={aboutProps.images[0].path}
          alt={aboutProps.images[0].alt}
        />
        <img
          className="about__image1"
          src={aboutProps.images[1].path}
          alt={aboutProps.images[1].alt}
        />
      </div>
      <div className="about-text-container">
        <h1 className="heading">{aboutProps.title}</h1>
        <h2 className="subheading">{aboutProps.subtitle}</h2>
        <p className="about__paragraph">{aboutProps.content}</p>
      </div>
    </div>
  );
};
export default About;
