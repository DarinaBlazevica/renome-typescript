import { useState, useEffect } from "react";
import "./App.css";
import About from "./components/organisms/About/About";
import Footer from "./components/organisms/Footer/Footer";
import Gallery from "./components/organisms/Gallery/Gallery";

const App = () => {
  const [data, setData] = useState<any>();
  const getData = async () => {
    fetch("structure.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })

      .then(function (structureJson) {
        setData(structureJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      {data && (
        <>
          <About
            title={data.about.title}
            subtitle={data.about.subTitle}
            content={data.about.text}
            images={data.about.aboutImages}
          ></About>
          <Gallery
            title={data.gallery.title}
            subtitle={data.gallery.subTitle}
            galleryImages={data.gallery.galleryImages}
          ></Gallery>
          <Footer
            followUs={data.footer.followUs}
            title={data.footer.title}
            copyright={data.footer.copyright}
            socialMedia={data.footer.socialMedia}
          ></Footer>
        </>
      )}
    </div>
  );
};

export default App;
