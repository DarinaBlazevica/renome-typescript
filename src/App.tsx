import "./App.css";
import About from "./components/organisms/About/About";
import structure from "./structure.json";

const App: React.FC = () => {
  const about = structure.about;

  return (
    <div className="App">
      <About
        title={about.title}
        subtitle={about.subTitle}
        content={about.text}
        images={about.aboutImages}
      ></About>
    </div>
  );
};

export default App;
