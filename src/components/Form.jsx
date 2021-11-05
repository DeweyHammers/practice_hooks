import { useInput } from "../hooks/useInput";

const Form = () => {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#00000");

  const submit = (e) => {
    e.preventDefault();
    resetTitle("");
    resetColor("#000000");
  };

  return (
    <form>
      <input {...titleProps} type="text" placeholder="Sound..." />
      <input {...colorProps} type="color" />
      <button type="submit" onClick={submit}>
        Add
      </button>
    </form>
  );
};

export default Form;
