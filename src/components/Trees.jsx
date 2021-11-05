import { useTrees } from "../";

const Trees = () => {
  const { trees } = useTrees();

  return (
    <div>
      <h1>Trees I've heard of</h1>
      <ul>
        {trees.map((tree) => (
          <li key={tree.id}>{tree.type}</li>
        ))}
      </ul>
    </div>
  );
};

export default Trees;
