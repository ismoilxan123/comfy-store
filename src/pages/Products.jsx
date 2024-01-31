import { useEffect, useState } from "react";

import InputCheckbox from "../components/products/InputCheckbox";
import InputRange from "../components/products/InputRange";
import InputText from "../components/products/InputText";
import ResetBtn from "../components/products/ResetBtn";
import SearchBtn from "../components/products/SearchBtn";
import Select from "../components/products/SelectCategory";
import SelectCompany from "../components/products/SelectCompany";
import SelectSory from "../components/products/SelectSory";

import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setCount, setUrl } from "../redux/appSlice";

const Products = ({
  page,
  setPage,
  setProducts,
  products,
  setAddProduct,
  addProduct,
}) => {
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  function handleSelect(e) {
    dispatch(setCount(e.target.value));
  }

  const url = useSelector((state) => state.url);
  // first page link
  function firstClick() {
    dispatch(setUrl("https://strapi-store-server.onrender.com/api/products"));
    setOne(true);
    setTwo(false);
    setThree(false);
  }
  // second page link
  function secondClick() {
    dispatch(
      setUrl("https://strapi-store-server.onrender.com/api/products?page=2")
    );
    setOne(false);
    setTwo(true);
    setThree(false);
  }
  // third page link
  function thirdClick() {
    dispatch(
      setUrl("https://strapi-store-server.onrender.com/api/products?page=3")
    );
    setOne(false);
    setTwo(false);
    setThree(true);
  }
  console.log(url);

  const getProducts = async () => {
    const res = await fetch(url);
    const datas = await res.json();
    setProducts(datas.data);
  };

  useEffect(() => {
    getProducts();
  }, [url]);
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
  function handleMiss() {
    setPage(false);
    setAddProduct(null);
  }

  return (
    <>
      {page ? (
        <div className="">
          <div className="flex justify-between">
            <div className="flex justify-start mb-5">
              <a>
                <NavLink to={"/"}>Home / </NavLink>
              </a>
              <a>
                <NavLink to={"/products"}>Products</NavLink>
              </a>
            </div>
            <div>
              <button
                onClick={handleMiss}
                className="btn btn-square btn-secondary"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="grid lg:grid-cols-2 md:grid-cols-1 md:gap-5">
            <div>
              <img
                className="w-96 h-96 object-cover rounded-lg lg:w-96"
                src={addProduct.image}
                alt={addProduct.title}
              />
            </div>
            <div>
              <h1 className="capitalize text-3xl font-bold">
                {addProduct.title}
              </h1>
              <h2 className="text-xl text-neutral-content font-bold mt-2">
                {addProduct.company}
              </h2>
              <h2 className="mt-3 text-xl">${addProduct.price}</h2>
              <p className="mt-6 leading-8 mb-5 ">{addProduct.description}</p>
              <h2>Colors</h2>
              <div className="mt-2">
                <button
                  type="button"
                  class={`badge w-6 h-6 mr-2 border-2  bg-[${addProduct.colors[0]}]`}
                ></button>
                <button
                  type="button"
                  class={`badge w-6 h-6 mr-2 border-2  bg-[${addProduct.colors[1]}] `}
                ></button>
                <button
                  type="button"
                  class={`badge w-6 h-6 mr-2 border-2  bg-[${addProduct.colors[2]}]`}
                ></button>
              </div>
              <h1 className="text-md font-medium -tracking-wider capitalize mb-5">
                Amount
              </h1>
              <div className="mb-6">
                <select
                  className="select select-bordered w-full max-w-xs"
                  onChange={handleSelect}
                >
                  <option disabled selected value={1}>
                    1
                  </option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                  <option value={4}>4</option>
                  <option value={5}>5</option>
                </select>
              </div>
              <div onClick={() => handleSubmit()} className="btn btn-secondary">
                Add to Bag
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4  gap-y-8 bg-[#121212] rounded-md px-8 py-8 mb-8">
            <InputText />
            <Select />
            <SelectCompany />
            <SelectSory />
            <InputRange />
            <InputCheckbox />
            <SearchBtn />
            <ResetBtn />
          </div>
          <div>
            <div className="mb-12">
              <h2 className="text-3xl font-medium tracking-wider capitalize mb-4">
                22 products
              </h2>
              <hr className="border-black border-2" />
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-row-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleClick(product.id)}
                  className="card w-[350px] bg-base-100 shadow-xl products__card cursor-pointer"
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
                    <p className="text-secondary">
                      ${product.attributes.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-end  mb-4">
              <ul className="menu menu-vertical lg:menu-horizontal md:menu-horizontal sm:menu-horizontal  bg-base-200 rounded-box">
                <li className={one ? "bg-secondary rounded-lg text-black" : ""}>
                  <a onClick={firstClick}>1</a>
                </li>
                <li className={two ? "bg-secondary rounded-lg text-black" : ""}>
                  <a onClick={secondClick}>2</a>
                </li>
                <li
                  className={three ? "bg-secondary rounded-lg text-black" : ""}
                >
                  <a onClick={thirdClick}> 3</a>
                </li>
              </ul>
            </div>
            <div className="h-4"></div>
          </div>
        </div>
      )}
    </>
  );
};

export default Products;
