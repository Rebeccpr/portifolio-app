import { Navbar } from "./components/Navbar";
import { HomePage } from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Hobbies from "./components/Hobbies";

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <AboutMe />
      <Skills />
      <Experience />
      <Hobbies />
    </div>
  );
}

export default App;
