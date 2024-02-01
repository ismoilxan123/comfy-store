const Carusel = () => {
  return (
    <div className="carousel carousel-center  max-w-md p-4 space-x-4 bg-neutral rounded-box">
      <div className="carousel-item">
        <img
          width="320px"
          src="https://react-vite-comfy-store-v2.netlify.app/assets/hero1-deae5a1f.webp"
          className=" rounded-box h-full w-80 object-cover"
        />
      </div>
      <div className="carousel-item">
        <img
          width="320px"
          src="https://react-vite-comfy-store-v2.netlify.app/assets/hero2-2271e3ad.webp"
          className=" rounded-box h-full w-80 object-cover"
        />
      </div>
      <div className="carousel-item">
        <img
          width="320px"
          src="https://react-vite-comfy-store-v2.netlify.app/assets/hero3-a83f0357.webp"
          className=" rounded-box h-full w-80 object-cover"
        />
      </div>
      <div className="carousel-item">
        <img
          width="320px"
          src="https://react-vite-comfy-store-v2.netlify.app/assets/hero4-4b9de90e.webp"
          className=" rounded-box h-full w-80 object-cover"
        />
      </div>
    </div>
  );
};

export default Carusel;
