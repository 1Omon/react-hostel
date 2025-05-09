import React from "react";

const AboutHostel = ({ name, images, content }) => {
  return (
    <div>
      <h1>{name}</h1>
      <img src={images[0].src} alt={images[0].alt} />
      <section className="">
        {images.map((image, index) => (
          <img src={image.src} alt={image.alt} key={index} />
        ))}
      </section>
      <div className="" id="content">
        <h3 className="">About This Hostel</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default AboutHostel;
