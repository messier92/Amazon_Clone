// https://www.youtube.com/watch?v=RDV3Z1KCBvo
// https://github.com/CleverProgrammers/react-challenge-amazon-clone
import React, {useEffect} from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage.js";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage.js";
import LoginPage from "./pages/LoginPage/LoginPage.js";
import PaymentPage from "./pages/PaymentPage/PaymentPage.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {auth} from './firebase';
import {useStateValue} from "./StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('USER IS >>> ', authUser);
      if (authUser) {
        // user is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM
    <Router>
      <div className="app">
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/checkout" element={<CheckoutPage />} />
          <Route exact path="/payment" element={<PaymentPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
