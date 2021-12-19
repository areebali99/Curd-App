import React from "react";
import "./App.css";
//  import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Home from "./Component/Pages/Home";
import About from "./Component/Pages/About";
import Contact from "./Component/Pages/Contact"
import Navbar from "./Component/Navbar";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

import NotFound from "./Component/Pages/NotFound";
import AddUser from "./Component/Users/AddUser";
import EditUser from "./Component/Users/EditUser";
import User from "./Component/Users/User";

function App(props) {
  return (

    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/about" element={<About />} />
        <Route  path="/contact" element={<Contact />} />
        <Route  path="/users/add" element={<AddUser />} />
        <Route  path="/users/edit/:id" element={<EditUser />} />
        <Route  path="/users/:id" element={<User />} />
        <Route path="/notfound" element={<NotFound/>} />
      </Routes>
    </div>




  );
}

export default App;
