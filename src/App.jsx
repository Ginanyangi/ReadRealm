import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Home from './components/Home';
import GoogleLoginButton from "./components/Login";
import ContactForm from "./components/Contact";
import BookList from "./components/BookList";
import Books from './components/Books';
import ReadingList from "./components/ReadingList";


const App = () => {
  return(
    <Router>
      <Navbar />
      <div>
      <Routes>
        <Route path='/login' element={<GoogleLoginButton />} />
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<ContactForm />} />
        <Route path='/books' element={<BookList />} />
        <Route path='/books/:bookId' element={<Books/>} />
        <Route path='/readinglist' element={<ReadingList />} /> 

      </Routes>
      </div>
      {/* <Footer /> */}
    </Router>
  );
};

export default App;