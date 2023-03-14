<<<<<<< HEAD
import './App.css';
import Home from './FirstPage/Home';
import Home2 from './SecondPage/Home2';
<<<<<<< HEAD
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route  path="/" element={<Home/>}/>
        <Route  path="/second" element={<Home2/>}/>
      </Routes>
      </Router>
    </>
=======
=======
import logo from './logo.svg';
import './App.css';
import Home from './FirstPage/Home';
import Home2 from './SecondPage/Home2';
>>>>>>> e2a664c8fa4a51071f40ac092e4831600a1d2b28

function App() {
  return (
    <div className="App">
     {/* <Home/> */}
     <Home2/>
    </div>
<<<<<<< HEAD
>>>>>>> e2a664c (First Commit)
=======
>>>>>>> e2a664c8fa4a51071f40ac092e4831600a1d2b28
  );
}

export default App;
