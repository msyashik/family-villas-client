import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import FeaturedPropertiesDetailShow from './components/Home/FeturedPropertiesDetailShow/FeaturedPropertiesDetailShow';
import Home from "./components/Home/Home/Home";
import NoMatch from "./components/Home/NoMatch/NoMatch";
import Login from './components/Shared/Login/Login';
import PrivateRoute from './components/Shared/PrivateRoute/PrivateRoute';

import BookingList from './components/User/BookingList/BookingList';
import Book from './components/User/Book/Book';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/login">
            <Login></Login>
          </Route>
          <Route exact path="/signUp">
            <Login></Login>
          </Route>
          <PrivateRoute exact path="/apartment/feature/:id">
            <FeaturedPropertiesDetailShow></FeaturedPropertiesDetailShow>
          </PrivateRoute>
          
          <PrivateRoute path="/cart">
            <Book></Book>
          </PrivateRoute>
          <PrivateRoute path="/bookingsList">
            <BookingList></BookingList>
          </PrivateRoute>
          
          <Route path="*">
            <NoMatch></NoMatch>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
