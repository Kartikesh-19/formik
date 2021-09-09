import React from "react";
import "./App.css";
// import Reservation from "./Reservation";
import img1 from './assets/img1.png'
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-5">
           <Signup/>
          </div>
          <div className="col-md-6">
             <img className="img-fluid w-100 mt-5" src={img1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
