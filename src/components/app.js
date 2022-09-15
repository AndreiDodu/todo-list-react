import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoPage from './todo/todo';
import MainMenu from './common/mainMenu';
import Protected from './security/protected';
import LoginForm from './user/loginForm';
import Logout from './user/logout';
import RegistrationForm from './user/registrationForm';
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
