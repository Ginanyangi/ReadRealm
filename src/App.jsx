import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Home from './components/Home';
import GoogleLoginButton from "./components/Login";
import ContactForm from "./components/Contact";

const App = () => {
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path='/login' element={<GoogleLoginButton />} />
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactForm />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  )
}

export default App;