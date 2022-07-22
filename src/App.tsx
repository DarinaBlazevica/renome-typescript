import "./App.css";
import About from "./components/organisms/About/About";
import Gallery from "./components/organisms/Gallery/Gallery";
import structure from "./structure.json";

const App = () => {
  const about = structure.about;
  const gallery = structure.gallery;

  return (
    <div className="App">
      <About
        title={about.title}
        subtitle={about.subTitle}
        content={about.text}
        images={about.aboutImages}
      ></About>
      <Gallery
        title={gallery.title}
        subtitle={gallery.subTitle}
        galleryImages={gallery.galleryImages}
      ></Gallery>
    </div>
  );
};

export default App;
