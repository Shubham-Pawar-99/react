import RightCard from "./RightCard";

function RightContent(props) {
  return (
    <div
      id="right"
      className="w-2/3 h-full p-6 flex flex-nowrap overflow-x-auto rounded-4xl gap-10"
    >
      {props.user.map(function (e, id) {
        return (
          <div key={id}>
            <RightCard
              img={e.img}
              intro={e.intro}
              tag={e.tag}
              id={id}
              color={e.color}
            />
          </div>
        );
      })}
    </div>
  );
}

export default RightContent;
