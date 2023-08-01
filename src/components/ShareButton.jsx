import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
} from "react-share";

const buttons = [
  { shareBtn: FacebookShareButton, icon: faFacebook },
  { shareBtn: WhatsappShareButton, icon: faWhatsapp },
  { shareBtn: TwitterShareButton, icon: faTwitter },
];

const ShareButton = ({ url }) => {
  return (
    <div className="flex items-center justify-around p-2 mb-6 themeComponentRevert rounded-2xl">
      {buttons.map((button) => (
        <button.shareBtn url={url}>
          <FontAwesomeIcon
            icon={button.icon}
            className="text-2xl transition-all duration-200 ease-in-out hover:scale-150 "
          />
        </button.shareBtn>
      ))}
    </div>
  );
};

export default ShareButton;
