import './App.css';
import Home from './FirstPage/Home';
import Home2 from './SecondPage/Home2';
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
  );
}

export default App;
