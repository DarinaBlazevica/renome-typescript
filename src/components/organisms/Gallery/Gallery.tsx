import GalleryGrid from "../../molecules/GalleryGrid/GalleryGrid";
import "../Gallery/Gallery.css";
import { GalleryImagesData } from "../../molecules/GalleryGrid/GalleryGrid";

interface GalleryProps {
  title: string;
  subtitle: string;
  galleryImages: GalleryImagesData[];
}

const Gallery = (props: GalleryProps) => {
  const galleryProps = props;
  return (
    <div className="gallery">
      <h1 className="heading">{galleryProps.title}</h1>
      <h2 className="subheading">{galleryProps.subtitle}</h2>
      <GalleryGrid galleryImages={galleryProps.galleryImages} />
    </div>
  );
};
export default Gallery;
