import './App.css';

// import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { RouterProvider } from 'react-router-dom';
import { Suspense, useState } from 'react';
import routes from './routes';
import { Provider } from 'react-redux';
import { persistor, store } from './services/store';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Suspense>
          <RouterProvider router={routes} />
        </Suspense>
      </PersistGate>
    </Provider>
  );
}

export default App;
