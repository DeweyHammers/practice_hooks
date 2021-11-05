import StarRating from "./components/StarRating";
import Congratulation from "./components/Congratulation";
import Github from "./components/Github";
import Checked from "./components/Checked";
import Form from "./components/Form";
import Trees from "./components/Trees";
import FilterUser from "./components/FilterUser";

const App = () => {
  return (
    <div>
      <StarRating totalStars={5} />
      <Congratulation />
      <Github />
      <Checked />
      <Form />
      <Trees />
      <FilterUser login={"dewey"} />
    </div>
  );
};

export default App;
