import './App.css';
import Banner from './components/Banner';
import Header from './components/Header';
import SectionOne from './components/SectionOne';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

      <  Header />
      <  Banner />
      <  SectionOne />
      <  Testimonials />
      <  Gallery />
      <  Footer />

    </div>
  );
}

export default App;
