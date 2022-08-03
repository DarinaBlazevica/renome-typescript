import "./Arrows.css";

interface SliderProps {
  slideNext: () => void;
  slidePrev: () => void;
  disabled: boolean;
}

const Arrows = (props: SliderProps) => {
  const slide = props;
  return (
    <div className="carousel__arrow">
      <button
        disabled={slide.disabled}
        type="button"
        className="carousel__arrow--left"
        id="left-arrow"
        onClick={slide.slidePrev}
      >
        <img src="./svg_icons/angle-left-solid.svg" alt="left arrow" />
      </button>
      <div className="carousel__space"></div>
      <button
        disabled={slide.disabled}
        type="button"
        className="carousel__arrow--right"
        id="right-arrow"
        onClick={slide.slideNext}
      >
        <img src="./svg_icons/angle-right-solid.svg" alt="right arrow" />
      </button>
    </div>
  );
};
export default Arrows;
