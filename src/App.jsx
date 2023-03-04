import { Main } from "./components/Main/Main";
import { NotFoundUser } from "./components/NotFoundUser/NotFoundUser";
import { UserPage } from "./components/UserPage/UserPage";
import { React, useState } from 'react';

function App() {
  const [currentComponent, setCurrentComponent] = useState('main');
  // const [currentUser, setCurrentUser] = useState(null);

  return (
    <div className="App">
      {/* This is App.jsx file. */}
      {currentComponent === 'main' && (
        <Main
          setCurrentComponent={setCurrentComponent}
        />
      )}

      {currentComponent === 'UserPage' && (
        <UserPage/>
      )}

      {currentComponent === 'NotFoundPage' && (
        <NotFoundUser/>
      )}
    </div>
  );
}

export default App;
