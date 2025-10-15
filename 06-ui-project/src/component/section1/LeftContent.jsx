import "remixicon/fonts/remixicon.css";
import HeroText from "./HeroText";
import Arrow from "./Arrow";

function LeftContent() {
  return (
    <div className="w-1/3 h-full flex flex-col justify-between">
      <HeroText />
      <Arrow />
    </div>
  );
}

export default LeftContent;
