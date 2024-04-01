import desktop_img from "../images/bg-header-desktop.svg";
import mobile_img from "../images/bg-header-mobile.svg";
import { useMediaQuery } from "react-responsive";

export default function Headers() {
  const isMobileDevice = useMediaQuery({
    query: "(max-width: 500px)",
  });

  return (
    <header className="header">
      <img
        className="background-img"
        src={isMobileDevice ? mobile_img : desktop_img}
      />
    </header>
  );
}
