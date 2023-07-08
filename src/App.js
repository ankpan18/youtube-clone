import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Recommend from "./components/Recommend";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
      <Header/>
        <Routes> 
          <Route path="/search/:searchTerm" 
          // <Route path="/search" 
           
          element={   <div className="app_page"><Sidebar />
          <SearchPage/> </div>}
          
          >
     
        </Route>

        <Route path="/" element={ <div className="app_page"><Sidebar />
      <Recommend/> </div>}>
        </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
