import "./SocialMedia.css";

export interface SocialMediaData {
  path: string;
  alt: string;
}

interface SocialMediaProps {
  socialMediaData: SocialMediaData[];
}

const SocialMedia = (props: SocialMediaProps) => {
  const socialMedia = props;

  return (
    <div className="contact__socialmedia">
      {socialMedia.socialMediaData.map((item, i) => (
        <div key={i}>
          <img src={item.path} alt={item.alt} />
        </div>
      ))}
    </div>
  );
};
export default SocialMedia;
