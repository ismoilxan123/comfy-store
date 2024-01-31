import useProducts from "../hooks/useProducts";
import { NavLink } from "react-router-dom";

const Cart = ({ setEmpty, empty }) => {
  const { loading, datas } = useProducts();
  function deleteClick(e) {
    console.log(e);
  }
  return (
    <>
      <div className="mb-12">
        <div className="mb-12">
          <h2 className="text-3xl font-medium tracking-wider capitalize mb-4">
            {empty ? "Your Card is Empty" : "Shopping Cart"}
          </h2>
          <hr className="border-black border-2 mb-1" />
        </div>
        <div>
          {empty ? (
            ""
          ) : (
            <div className="grid lg:grid-cols-3 md:grid-cols-1  gap-6">
              <div className=" lg:col-span-2 ">
                <div className="mb-6">
                  {datas.map((data) => (
                    <div className="mb-8">
                      <div className="flex  justify-around items-start">
                        <img
                          className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
                          src={data.image}
                          alt={data.title}
                        />
                        <div>
                          <h1>{data.title}</h1>
                          <h1>{data.company}</h1>
                          <h1 className="flex items-center gap-2">
                            Color:{" "}
                            <span className="badge badge-sm bg-red-500"></span>
                          </h1>
                        </div>
                        <div>
                          <h1>Amount</h1>
                          <select
                            className="select select-bordered select-xs  max-w-xs"
                            value={data.count}
                          >
                            <option disabled selected>
                              1
                            </option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </select>
                          <h1
                            className="text-red-500 cursor-pointer"
                            onClick={deleteClick(data.id)}
                          >
                            remove
                          </h1>
                        </div>
                        <div>
                          <h1 className="font-medium sm:ml-auto">
                            ${data.count * data.price}
                          </h1>
                        </div>
                      </div>
                      <hr className="border-black border-2 mt-4" />
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-full">
                <div className="p-8 bg-[#121212] rounded-2xl mb-8">
                  <div>
                    <div className="flex justify-between mb-1">
                      <h3>Subtotal</h3>
                      <h3>$201</h3>
                    </div>
                    <hr className="border-black border-2 mb-1" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <h3>Shipping</h3>
                      <h3>$100</h3>
                    </div>
                    <hr className="border-black border-2 mb-1" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <h3>Tax</h3>
                      <h3>$50</h3>
                    </div>
                    <hr className="border-black border-2 mb-1" />
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <h3>Order</h3>
                      <h3>$</h3>
                    </div>
                  </div>
                </div>
                <div className="btn btn-secondary uppercase w-full">
                  <NavLink to={"/checkout"}>proceed to checkout</NavLink>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="h-2"></div>
    </>
  );
};

export default Cart;
