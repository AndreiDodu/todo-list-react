import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoPage from './todo/todo';
import MainMenu from './common/mainMenu';
import Protected from './security/protected';
import LoginForm from './user/loginForm';
import Logout from './user/logout';
import RegistrationForm from './user/registrationForm';
import { useState } from 'react';
import { register, loginUser, me } from '../service/userService';

function App() {
  const [user, setUser] = useState({});
  const [jwt, setJwt] = useState('');

  function login(user) {
    return loginUser(user).then((data) => {
      setJwt(data.jwt);
      return me(data.jwt).then((data) => {
        setUser(data);
      });
    });
  }

  function isLoggedIn() {
    return user && user.username;
  }

  function logout() {
    setUser({});
  }

  function registerAndLogin(regForm) {
    return register(regForm).then((data) => {
      setJwt(data.jwt);
      return me(data.jwt).then((data) => {
        setUser(data);
      });
    });
  }

  return (
    <BrowserRouter>
      <MainMenu user={user} isLoggedIn={isLoggedIn} />
      <Routes>
        <Route
          path="/todo"
          element={
            <Protected isLoggedIn={isLoggedIn}>
              <TodoPage jwt={jwt} />
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
