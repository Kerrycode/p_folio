import React from "react";
import "./App.css";
import Home from "./Components/Home/home";
import Navbar from "./Components/Navbar/navbar";
import Contact from "./Components/Contact/contact";
import Footer from "./Components/Footer/footer";
import { Route, Routes } from "react-router";
import Skills from "./Components/Skills/skill";
import Experience from "./Components/Experience/exp";


function App() {
   const [checked, setChecked] = React.useState(true);

   const handleChange = (event) => {
     setChecked(event.target.checked);
   };
  return (
    <div className="App">
      <>
        <Navbar togger = {handleChange}  chk ={checked}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="ski-info" element={<Skills />} />
          <Route path="exp" element={<Experience />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </>
      <Footer />
    </div>
  );
}

export default App;
