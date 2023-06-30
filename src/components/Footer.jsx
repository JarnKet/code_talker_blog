import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { contactLinks, sectionDescription } from "../constants";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" themeComponent ">
      <div className="container flex flex-col items-center justify-center w-full h-40 px-8 mx-auto lg:flex-row lg:justify-between">
        <div className="lg:w-[30%]">
          <h1 className={`text-4xl font-bold `}>CODE TALKER</h1>
          <p className="hidden lg:block">{sectionDescription.hero}</p>
        </div>
        <div>
          <p className="hidden lg:block">ຕິດຕາມໄດ້ທີ່</p>
          <div className="flex mt-2">
            <Link href={contactLinks.github} target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                className="mr-4 text-2xl transition-all duration-200 ease-in-out hover:scale-150 "
              />
            </Link>

            <Link href={contactLinks.facebook} target="_blank">
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-2xl transition-all duration-200 ease-in-out hover:scale-150 "
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
