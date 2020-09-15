import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import './App.css';

function App() {
  return (
    <div>
      {/*BEM naming convention*/}

      <h1>Hello</h1>

      {/* header */}
      <Header /> 
      {/* sidebar */}
      <div className="app__body">
        <Sidebar />
      </div>
      {/* React-Router -> Chat screen */}
    </div>
  );
}

export default App;
