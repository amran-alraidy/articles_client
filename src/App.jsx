import './App.css'
import { Routes, Route } from "react-router";
import Home from './Pages/Home';
import About from './Pages/About';
import Navbar from './Componnents/Navbar'
import Articles from './Pages/Articles';
import ArticleDetails from './Pages/ArticleDetails';
import Register from './Pages/Register';
import Login from './Pages/Login';

function App() {

  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticleDetails />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>

  );
}

export default App
