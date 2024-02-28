import "./SliderImage.css";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Sliderimage = () => {
  const images = [
    {
      original: "https://olc.kg/wp-content/uploads/2023/01/1-8-scaled.jpg",
      thumbnail: "https://olc.kg/wp-content/uploads/2023/01/1-8-scaled.jpg"
    },
    {
      original: "https://olc.kg/wp-content/uploads/2023/01/1-32-scaled.jpg",
      thumbnail: "https://olc.kg/wp-content/uploads/2023/01/1-32-scaled.jpg"
    },
    {
      original: "https://olc.kg/wp-content/uploads/2023/01/1-34-scaled.jpg",
      thumbnail: "https://olc.kg/wp-content/uploads/2023/01/1-34-scaled.jpg"
    }
  ];

  return (
    <div className="App" style={{margin: '20px 20px'}}>
        <h1 className="mb-5" style={{textAlign: 'center'}}>ФОТОГАЛЕРЕЯ</h1>
      <ImageGallery
        items={images}
        showPlayButton={false}
        showFullscreenButton={true}
        slideInterval={2000}
        slideOnThumbnailOver={true}
        showIndex={true}
      />
    </div>
  );
}
export default Sliderimage