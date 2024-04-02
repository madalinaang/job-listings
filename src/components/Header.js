import { useMediaQuery } from "react-responsive";

export default function Headers() {
  const isMobileDevice = useMediaQuery({
    query: "(max-width: 500px)",
  });

  return (
    <header className="header">
      <img
        className="background-img"
        src={
          isMobileDevice
            ? process.env.PUBLIC_URL + "/images/bg-header-mobile.svg"
            : process.env.PUBLIC_URL + "/images/bg-header-desktop.svg"
        }
      />
    </header>
  );
}
