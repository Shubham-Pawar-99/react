import Card from "./components/Card";
import VCard from "./components/V-Card";

function App() {
  return (
    <div className="my-2 mx-auto flex gap-4">
      {/* <Card user="Shubham" />
      <Card user="Sham" />
      <Card user="Danny"  /> */}
      <VCard username="Shubham" btnText="Click ME"/>
      <VCard username="Sham" btnText="Visit ME"/>
    </div>
  );
}

export default App;
