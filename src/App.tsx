import "./App.css";
import About from "./components/organisms/About/About";
import Footer from "./components/organisms/Footer/Footer";
import Gallery from "./components/organisms/Gallery/Gallery";
import structure from "./structure.json";

const App = () => {
  const about = structure.about;
  const gallery = structure.gallery;
  const footer = structure.footer;

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
      <Footer followUs={footer.followUs} title={footer.title} copyright={footer.copyright} socialMedia={footer.socialMedia}></Footer>
    </div>
  );
};

export default App;
