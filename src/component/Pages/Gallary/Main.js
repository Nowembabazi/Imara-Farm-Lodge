// import Header from '../../Components/header/Header';
import React, { useState } from 'react';
import './gallery.css';


const Ourgallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: 'https://www.muddypawstravels.com/wp-content/uploads/2020/12/89917508_1908186885981791_3884286951267762176_o.jpg', alt: 'Image 1' },
    { id: 2, src: 'https://i.travelapi.com/lodging/9000000/8760000/8751000/8750918/a1c2e7de_z.jpg', alt: 'Image 2' },
    { id: 3, src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/353414809.jpg?k=befec9b6177aa79eb86fd86c5f863aca113d405b2ca8b4e91755b03ce0e62171&o=&hp=1.jpg', alt: 'Image 3' },
    // Add more images as needed
    { id: 4, src: 'https://www.muddypawstravels.com/wp-content/uploads/2020/12/89917508_1908186885981791_3884286951267762176_o.jpg', alt: 'Image 4' },
    { id: 5, src: 'https://i.travelapi.com/lodging/9000000/8760000/8751000/8750918/a1c2e7de_z.jpg', alt: 'Image 5' },
    { id: 6, src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/353414809.jpg?k=befec9b6177aa79eb86fd86c5f863aca113d405b2ca8b4e91755b03ce0e62171&o=&hp=1.jpg', alt: 'Image 6' },

    { id: 7, src: 'https://www.muddypawstravels.com/wp-content/uploads/2020/12/89917508_1908186885981791_3884286951267762176_o.jpg', alt: 'Image 7' },
    { id: 8, src: 'https://i.travelapi.com/lodging/9000000/8760000/8751000/8750918/a1c2e7de_z.jpg', alt: 'Image 8' },
    { id: 9, src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/353414809.jpg?k=befec9b6177aa79eb86fd86c5f863aca113d405b2ca8b4e91755b03ce0e62171&o=&hp=1.jpg', alt: 'Image 9' },
  ];

  const openPopup = (image) => {
    setSelectedImage(image);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };

  return (
    <section className="gallery-page">
      <div className="gallery-container">
        {images.map((image) => (
          <div key={image.id} className="image-item" onClick={() => openPopup(image)}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="popup-container" onClick={closePopup}>
          <div className="popup-content">
            <img src={selectedImage.src} alt={selectedImage.alt} />
          </div>
        </div>
      )}
    </section>
  );
};

export default Ourgallery;