import Carusel from "../components/Carusel";

const Main = () => {
  return (
    <div className="flex justify-between items-center mb-24 ">
      <div className="w-[488px]">
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl mb-8">
          We are changing the way people shop
        </h1>
        <h3 className="mt-8 max-w-xl text-lg leading-8 mb-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore
          repellat explicabo enim soluta temporibus asperiores aut obcaecati
          perferendis porro nobis.
        </h3>
        <div className="btn btn-secondary uppercase active">Our Products</div>
      </div>
      <div>
        <Carusel />
      </div>
    </div>
  );
};

export default Main;
