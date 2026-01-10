import React from "react";

function Topper() {
  return (
    <div className="topper">
      <picture>
        <source
          srcSet="https://res.cloudinary.com/dvjavf8xh/image/upload/v1767895814/misc/Headshots/headshot_lighter_green_zqjmgq.webp"
          type="image/webp"
          className="topper-image"
        />
        <source
          srcSet="https://res.cloudinary.com/dvjavf8xh/image/upload/v1767895746/misc/Headshots/headshot_lighter_green_pbswtt.png"
          type="image/png"
          className="topper-image"
        />
        <img
          className="topper-image"
          src="https://res.cloudinary.com/dvjavf8xh/image/upload/v1767895746/misc/Headshots/headshot_lighter_green_pbswtt.png"
          alt="headshot of the website creator smiling and waving on a neon green-colored background in the shape of a flower."
        />
      </picture>
      <div className="topper-text-wrapper">
        <h1 className="topper-intro-text">
          Hey there, I’m Stephanie– professional pixel wrangler and bug maker.
        </h1>
        <h2 className="topper-intro-subtext">
          In other words, I'm a digital designer and front-end developer. I also
          write and illustrate sometimes. Welcome to my little corner of the
          internet!
        </h2>
      </div>
    </div>
  );
}

export default Topper;
