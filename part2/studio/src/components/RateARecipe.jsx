let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe() {
  function giveRating(props) {
    return props.rating >= 1 && props.rating <= 5 ? (
      <h3>{stars[props.rating - 1]}</h3>
    ) : null;
  }
  return stars;
}

export default RateARecipe;

//conditional to render stars based on a number provided in App.js
