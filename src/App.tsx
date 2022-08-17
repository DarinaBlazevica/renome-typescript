import { useState, useEffect } from "react";
import "./App.css";
import { CartMenuProps } from "./components/molecules/CartMenu/CartMenu";
import About, { AboutProps } from "./components/organisms/About/About";
import Carousel, {
  CarouselProps,
} from "./components/organisms/Carousel/Carousel";
import Footer, { FooterProps } from "./components/organisms/Footer/Footer";
import Gallery, { GalleryProps } from "./components/organisms/Gallery/Gallery";
import Topnavigation, {
  TopnavigationProps,
} from "./components/organisms/Topnavigation/Topnavigation";

const App = () => {
  type JSONData = {
    about: AboutProps;
    gallery: GalleryProps;
    footer: FooterProps;
    carousel: CarouselProps;
    topnav: TopnavigationProps;
    cartMenu: CartMenuProps;
  };

  const [data, setData] = useState<JSONData>();
  const getData = async () => {
    fetch("structure.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
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
          <Topnavigation
            title={data.topnav.title}
            cart={data.topnav.cart}
            cart_content={data.topnav.cart_content}
            divider={data.topnav.divider}
            cartMenu={data.topnav.cartMenu}
            menu={data.topnav.menu}
            subMenu={data.topnav.subMenu}
          />
          <Carousel carouselData={data.carousel.carouselData}></Carousel>
          <About
            title={data.about.title}
            subTitle={data.about.subTitle}
            text={data.about.text}
            aboutImages={data.about.aboutImages}
          ></About>
          <Gallery
            title={data.gallery.title}
            subTitle={data.gallery.subTitle}
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
