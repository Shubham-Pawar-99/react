import LeftContent from "./LeftContent";
import RightContent from "./RightContent";

function Page1Content(props) {
  return (
    <div className="h-[90vh] pb-16 pt-6 px-16 flex items-center gap-5">
      <LeftContent />
      <RightContent user={props.user} />
    </div>
  );
}

export default Page1Content;
