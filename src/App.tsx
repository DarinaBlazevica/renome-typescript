import './App.css';
import About from "../src/components/organisms/About/About"
import structure from "./structure.json"

const App: React.FC =() =>{

  const about = structure.about;
  
  return (
    <div className="App">
      <About title={about.title} subtitle={about.subTitle} content={about.text} imageArr={about.aboutImages} altTag={about.aboutImages}></About>
    </div>
  );
}

export default App;
