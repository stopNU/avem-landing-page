import {
  SiTelegram,
  SiTwitter,
  SiLinkedin,
  SiReddit,
  SiMedium,
} from "react-icons/si";

const SocialItem = ({label, platform, link, className}) => {
 
  let icon;

  switch (platform) {
    case "telegram":
      icon = <SiTelegram />;
      break;
    case "twitter":
      icon = <SiTwitter />;
      break;
    case "medium":
      icon = <SiMedium />;
      break;
    case "reddit":
      icon = <SiReddit />;
      break;
    case "linkedin":
      icon = <SiLinkedin />;
      break;
    default:
      icon = "";
  }
  return (
    <a href={link.url} target="_blank" className={className}>
      {icon}
      <p>{label}</p>
    </a>
  );
};

export default SocialItem;
