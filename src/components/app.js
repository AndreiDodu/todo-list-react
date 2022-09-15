import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoPage from './todo';
import MainMenu from './mainMenu';
import Protected from './protected';
import LoginForm from './loginForm';
import Logout from './logout';
import RegistrationForm from './registrationForm';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState({});

  function login(user) {
    setUser(user);
  }

  function isLoggedIn() {
    return user && user.username;
  }

  function logout() {
    setUser({});
  }

  function registerAndLogin(regForm) {
    // register
    // login
    setUser({ username: regForm.username });
  }

  return (
    <BrowserRouter>
      <MainMenu user={user} isLoggedIn={isLoggedIn} />
      <Routes>
        <Route
          path="/todo"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <TodoPage />
            </Protected>
          }
        />
        <Route path="/signin" element={<LoginForm login={login} />} />
        <Route
          path="/signup"
          element={<RegistrationForm registerAndLogin={registerAndLogin} />}
        />
        <Route path="/logout" element={<Logout logout={logout} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
