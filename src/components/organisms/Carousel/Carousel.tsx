import "./Carousel.css";
import { useState } from "react";
import Arrows from "../../atoms/buttons/Arrows";

interface CarouselData {
  title: string;
  subTitle: string;
  altTag: string;
  path: string;
}
enum CarouselSlider {
  justifyContentImg = "carousel-container__carousel",
  justifyContentText = "carousel-text-container__text-carousel",
  justifyNextSlide = "carousel-container__carousel justifyNext",
  justifyPrevSlide = "carousel-container__carousel justifyPrevious",
  justifyNextSlideText = "carousel-text-container__text-carousel justifyNext",
  justifyPrevSlideText = "carousel-text-container__text-carousel justifyPrevious",
  resetSliderImg = "carousel-container__carousel__slider resetSlide",
  resetSliderText = "carousel-text-container__text-slider resetSlide",
  sliderDirectionImg = "carousel-container__carousel__slider",
  sliderDirectionText = "carousel-text-container__text-slider", 
  sliderDirectionNext = "carousel-container__carousel__slider slideNext",
  sliderDirectionPrev = "carousel-container__carousel__slider slidePrevious",
  textSliderDirectionNext = "carousel-text-container__text-slider slideNext",
  textSliderDirectionPrev = "carousel-text-container__text-slider slidePrevious"
}

export interface CarouselProps {
  carouselData: CarouselData[];
}

const Carousel = (props: CarouselProps) => {
  const carouselProps = props;

  const [justifyContent, setJustifyContent] = useState(CarouselSlider.justifyContentImg);
  const [slideDirection, setSlideDirection] = useState(CarouselSlider.sliderDirectionImg);

  const [justifyTextContent, setJustifyTextContent] = useState(CarouselSlider.justifyContentText);
  const [textSlideDirection, setTextSlideDirection] = useState(CarouselSlider.sliderDirectionText);

  const [direction, setDirection] = useState(-1);

  const [disabled, setDisable] = useState(false);

  const slideNext = () => {
    if (direction === 1) {
      setDirection(-1);
      carouselProps.carouselData.unshift(carouselProps.carouselData.pop()!);
    }
    setJustifyContent(CarouselSlider.justifyNextSlide);
    setSlideDirection(CarouselSlider.sliderDirectionNext);

    setJustifyTextContent(CarouselSlider.justifyNextSlideText);
    setTextSlideDirection(CarouselSlider.textSliderDirectionNext);
    setDisable(true);
  };

  const slidePrev = () => {
    if (direction === -1) {
      setDirection(1);
      carouselProps.carouselData.push(carouselProps.carouselData.shift()!);
    }

    setJustifyContent(CarouselSlider.justifyPrevSlide);
    setSlideDirection(CarouselSlider.sliderDirectionPrev);

    setJustifyTextContent(CarouselSlider.justifyPrevSlideText);
    setTextSlideDirection(CarouselSlider.textSliderDirectionPrev);
    setDisable(true);
  };

  const slideShow = () => {
    if (direction === 1) {
      carouselProps.carouselData.unshift(carouselProps.carouselData.pop()!);
    } else {
      carouselProps.carouselData.push(carouselProps.carouselData.shift()!);
    }
    setSlideDirection(CarouselSlider.resetSliderImg);
    setTextSlideDirection(CarouselSlider.resetSliderText);
    setDisable(false);
  };

  return (
    <div className="carousel-container">
      <div className={justifyContent}>
        <div className={slideDirection} onTransitionEnd={() => slideShow()}>
          {carouselProps.carouselData.map((item, i) => (
            <section key={i}>
              <img src={item.path} alt={item.altTag} />
            </section>
          ))}
        </div>
        <div className="carousel-text-container">
          <div className={justifyTextContent}>
            <div className={textSlideDirection}>
              {carouselProps.carouselData.map((item, i) => (
                <section key={i}>
                  <h1>{item.title}</h1>
                  <h2
                    className={
                      item.subTitle === "for everyone"
                        ? "subheading--oranges"
                        : "subheading"
                    }
                  >
                    {item.subTitle}
                  </h2>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Arrows
        slideNext={()=>slideNext()}
        slidePrev={()=>slidePrev()}
        disabled={disabled}
      />
    </div>
  );
};

export default Carousel;
