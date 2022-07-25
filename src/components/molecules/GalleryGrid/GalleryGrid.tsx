import "../GalleryGrid/GalleryGrid.css";

export interface GalleryImagesData {
  path: string;
  alt: string;
}

interface GalleryImagesProps {
  galleryImages: GalleryImagesData[];
}

const GalleryGrid = (props: GalleryImagesProps) => {
  const galleryGrid = props;

  return (
    <div className="gallery__images">
      {galleryGrid.galleryImages.map((item, i) => (
        <img key={i} src={item.path} alt={item.alt} />
      ))}
    </div>
  );
};
export default GalleryGrid;
