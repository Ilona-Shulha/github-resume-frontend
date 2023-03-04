import { useState } from "react";
import { getUserInfo } from "../../utils/fetch";

export const Main = (props) => {
  const [userInput, setUserInput] = useState('');
  const { setCurrentComponent } = props;
  const handleSubmit = async (event) => {
    event.preventDefault();

    const infoRespons = await getUserInfo(userInput);
    
    infoRespons.ok
      ? setCurrentComponent('UserPage')
      : setCurrentComponent('NotFoundPage');

    const infoData = await infoRespons.json(infoRespons)
    console.log(infoData)
  };

  return (
    <>
      <header>
          <h1>my github resume</h1>
      </header>
      {/* body???????? */}
      <main>
        <p>For what?</p>
        <form
          onSubmit={handleSubmit}
        >
          <input
            value={userInput}
            onChange={event => setUserInput(event.target.value)}
          />
          <button type="submit">find</button>
        </form>
      </main>
      <p>a little about project</p>
      <footer>who created</footer>
    </>
  );
};