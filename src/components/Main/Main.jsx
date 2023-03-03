import { useState } from "react";
import { getUser } from "../../utils/fetch";

export const Main = (props) => {
  const [userInput, setUserInput] = useState('');
  const { setCurrentComponent } = props;
  const handleSubmit = async(event) => {
    event.preventDefault();

    await getUser(userInput)
      ? setCurrentComponent('UserPage')
      : setCurrentComponent('NotFoundPage');
  };

  return (
    <div>
      This is Main.jsx file
      <form
        onSubmit={handleSubmit}
      >
        <input
          value={userInput}
          onChange={event => setUserInput(event.target.value)}
        />
      </form>
    </div>

  );
};