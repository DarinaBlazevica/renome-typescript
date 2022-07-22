import GalleryGrid from "../../molecules/GalleryGrid/GalleryGrid";
import "../Gallery/Gallery.css";
import { GalleryImagesData } from "../../molecules/GalleryGrid/GalleryGrid";

interface GalleryProps {
  title: string;
  subtitle: string;
  galleryImages: GalleryImagesData[];
}

const Gallery = (props: GalleryProps) => {
  const Gallery = props;
  return (
    <div className="gallery">
      <h1 className="heading">{Gallery.title}</h1>
      <h2 className="subheading">{Gallery.subtitle}</h2>
      <GalleryGrid galleryImages={Gallery.galleryImages} />
    </div>
  );
};
export default Gallery;
