import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Root from "./pages/Root";
import Checkout from "./pages/Checkout";
import { useState } from "react";
import Orders from "./pages/Orders";

const App = () => {
  const [page, setPage] = useState(false);
  const [products, setProducts] = useState([]);
  const [addProduct, setAddProduct] = useState(null);
  const [empty, setEmpty] = useState(true);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: (
            <Home
              setProducts={setProducts}
              products={products}
              setPage={setPage}
              page={page}
              setAddProduct={setAddProduct}
              addProduct={addProduct}
            />
          ),
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "products",
          element: (
            <Products
              setProducts={setProducts}
              products={products}
              setPage={setPage}
              page={page}
              setAddProduct={setAddProduct}
              addProduct={addProduct}
              setEmpty={setEmpty}
            />
          ),
        },
        {
          path: "cart",
          element: <Cart setEmpty={setEmpty} empty={empty} />,
        },
        {
          path: "checkout",
          element: <Checkout />,
        },
        {
          path: "orders",
          element: <Orders />,
        },
      ],
    },
  ]);

  return (
    <div className="dark">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
