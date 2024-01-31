import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Footer = ({
  page,
  setPage,
  setProducts,
  products,
  setAddProduct,
  addProduct,
}) => {
  const [homeProducts, setHomeProducts] = useState([]);
  const getHomeProducts = async () => {
    const res = await fetch(
      "https://strapi-store-server.onrender.com/api/products?featured=true"
    );
    const datas = await res.json();
    setHomeProducts(datas.data);
  };
  useEffect(() => {
    getHomeProducts();
  }, []);

  function firstUpper(w) {
    const word = w;
    const firstLetter = word.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = word.slice(1);
    const capitalizedWord = firstLetterCap + remainingLetters;
    return capitalizedWord;
  }
  function handleClick(v) {
    setPage(true);
    products.map((product) =>
      product.id == v ? setAddProduct(product.attributes) : ""
    );
  }

  return (
    <>
      <div className="mb-20">
        <div className="mb-12">
          <h2 className="text-3xl font-medium tracking-wider capitalize mb-4">
            Featured Products
          </h2>
          <hr className="border-black" />
        </div>
        <div className="flex gap-4 sm:grid grid-cols-1">
          {homeProducts.map((product) => (
            <NavLink to={"/products"}>
              <div
                onClick={() => handleClick(product.id)}
                key={product.attributes.title}
                className="card  w-96 bg-base-100 shadow-xl products__card cursor-pointer"
              >
                <figure className="px-10 pt-10">
                  <img
                    src={product.attributes.image}
                    alt="Shoes"
                    className="rounded-xl h-64 md:h-48 w-full object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h2 className="card-title">
                    {firstUpper(product.attributes.title)}
                  </h2>
                  <p className="text-secondary">${product.attributes.price}</p>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="h-1"></div>
    </>
  );
};

export default Footer;
