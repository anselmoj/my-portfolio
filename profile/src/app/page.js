import About from "../components/About/About";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import Services from "../components/Services/Services";
import Skills from "../components/Skills/Skills";
import Work from "../components/Work/Work";

export default function App() {
  return (
    <>
    <Header />
    <main className='main'>
      <Home />
      <About />
      <Skills />
      <Services />
      {/* <Work /> */}
      <Footer />
    </main>
    </>
  );
}
