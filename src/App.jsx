import './App.css';
import { useEffect, useState } from "react"
import Loader from './Loaders/Loader';
import Header from "./components/header/header";
import Home from "./components/home/home";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Techs from "./components/tech/tech";
import Footer from "./components/footer/footer";
import Project from './components/project/project';
import Navbar from "./components/nav/nav";

function App() {
  const [loading , setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 5000);
    
  }, [])

  if(loading){
    return(<>
      <Loader/>
    </>)
  }

  return (
      <>
        <div className="bg-circle1"></div>
        <div className="bg-circle2"></div>
        <section id='homeSect'>
          <div id="home" className='h-screen bg-[url("./components/props/bg1.jpg")] bg-cover bg-center'>
            <Header/>
            <Home />
          </div>
        </section>
        <section id='aboutSect'>
          <About />
        </section>
        <section id='skillsSect'>
          <Techs />
        </section>
        <section id='projectSect'>
          <Project/>
        </section>
        <section id='contactSect'>
          <Contact />
        </section>
          <Footer />
        <Navbar/>
      </>
  );
}

export default App;
