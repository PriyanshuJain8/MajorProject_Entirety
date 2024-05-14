import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedin } from 'react-icons/fa';

const HeaderSocialLinks = function () {
  const handleOpenNewTab = (url) => {
    window.open(url, "_blank");
  };
  return (
    <div className="ltn__social-media">
      <ul>
      <li>
                        <a
                          href="#"
                          title="Facebook"
                          onClick={() => handleOpenNewTab("https://facebook.com")}
                        >
                          <FaFacebookF />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Twitter"
                          onClick={() => handleOpenNewTab("https://twitter.com")}
                        >
                          <FaTwitter />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          title="Linkedin"
                          onClick={() => handleOpenNewTab("https://linkedin.com")}
                        >
                          <FaLinkedin />
                        </a>
                      </li>
                      
        
      </ul>
    </div>
  );
};


export default HeaderSocialLinks;