import "./styles.css";
import Button from "./Button";
import oceans from "./oceans.json";

let listItem = oceans.map(ocean => (
  <div
    key={ocean.id}
    className={`${ocean.fishCheck === "true" ? "isAFish" : "profile"}`}
  >
    <h1>{ocean.name}</h1>
    <h2>
      Fun Facts!
      <ul>{ocean.fact1}</ul>
      <ul>{ocean.fact2}</ul>
      <ul>{ocean.fact3}</ul>
    </h2>
    <Button />
    <img src={ocean.image} alt={ocean.name} className="img" />
  </div>
));

function Profile() {
  return <ul>{listItem}</ul>;
}

export default Profile;
