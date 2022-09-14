import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoPage from './components/todo';
import MainMenu from './components/mainMenu';
import Protected from './components/protected';
import LoginForm from './components/loginForm';
import RegistrationForm from './components/registrationForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <MainMenu />
      <Routes>
        <Route
          path="/todo"
          element={
            <Protected>
              <TodoPage />
            </Protected>
          }
        />
        <Route path="/signin" element={<LoginForm />} />
        <Route path="/signup" element={<RegistrationForm />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
