import GalleryGrid , { GalleryImagesData }from "../../molecules/GalleryGrid/GalleryGrid";
import "../Gallery/Gallery.css";

export interface GalleryProps {
  title: string;
  subTitle: string;
  galleryImages: GalleryImagesData[];
}

const Gallery = (props: GalleryProps) => {
  const galleryProps = props;
  return (
    <div className="gallery">
      <h1 className="heading">{galleryProps.title}</h1>
      <h2 className="subheading">{galleryProps.subTitle}</h2>
      <GalleryGrid galleryImages={galleryProps.galleryImages} />
    </div>
  );
};
export default Gallery;
