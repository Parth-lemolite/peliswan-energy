const CURRENT_YEAR = new Date().getFullYear();
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faWhatsapp,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export function Footer() {
  return (
    <footer className="bg-gray-800 pt-6 md:pt-12 text-white">
      <div className="container flex md:justify-around">
        <div className="">
          <p className="text-center text-base md:text-xl font-normal text-white">
            Peliswan Impex Private Limited
          </p>
          <p className="">1103, Colonnade</p>
          <p className="">Iskcon Sanidhya, Ahmedabad, 380059</p>
          <p className="">Gujarat, India</p>
        </div>

        <div className="flex space-y-2 flex-col">
          <div className="mt-4">
            <p className="">Phone: +91 9099037979</p>
            <p className="">Email: sales@peliswan.com</p>
          </div>
          <div className="flex justify-between">
            <span>
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </span>
            <span>
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </span>
            <span>
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </span>
            <span>
              <FontAwesomeIcon icon={faWhatsapp} size="lg" />
            </span>
          </div>
        </div>
      </div>
      <div className="mt-6 md:mt-12 pb-3">
        <p className="text-center font-normal text-white text-sm">
          {" "}
          © Copy right {CURRENT_YEAR} All Rights Reserved .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
