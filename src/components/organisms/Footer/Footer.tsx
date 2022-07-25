import "./Footer.css";
import SocialMedia, { SocialMediaData } from "../../molecules/SocialMedia/SocialMedia";


interface FooterProps {
  followUs: string;
  title: string;
  copyright: string;
  socialMedia: SocialMediaData[];
}

const Footer = (props: FooterProps) => {
  const footerProps = props;

  return (
    <footer>
      <div className="contact">
        <h1 className="contact__follow-us">{footerProps.followUs}</h1>
        <SocialMedia socialMediaData={footerProps.socialMedia} />
        <p className="renome">{footerProps.title}</p>
        <p className="contact__copyright">{footerProps.copyright}</p>
      </div>
    </footer>
  );
};
export default Footer;
