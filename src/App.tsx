import NavBar from "./components/nav/navbar";
import { TranslationProvider } from "./localization";
import About from "./pages/about";
import Contact from "./pages/contact";
import Experience from "./pages/experience";
import Expertise from "./pages/expertise";
import Footer from "./pages/footer";
import Home from "./pages/Home";
import Projects from "./pages/projects";

function App() {
  return (
    <TranslationProvider>
      <div className="h-full relative w-full font-sans bg-app_color">
        <NavBar />
        <Home />
        <About />
        <Expertise />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>
    </TranslationProvider>
  );
}

export default App;
