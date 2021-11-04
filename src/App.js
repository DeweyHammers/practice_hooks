import StarRating from "./components/StarRating";
import Congratulation from "./components/Congratulation";
import Github from "./components/Github";

const App = () => {
  return (
    <div>
      <StarRating totalStars={5} />
      <Congratulation />
      <Github />
    </div>
  );
};

export default App;
