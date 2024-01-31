import Main from "../layout/Main";
import Footer from "../layout/Footer";

const Home = ({
  page,
  setPage,
  setProducts,
  products,
  setAddProduct,
  addProduct,
}) => {
  return (
    <div>
      <Main />
      <Footer
        setProducts={setProducts}
        products={products}
        setPage={setPage}
        page={page}
        setAddProduct={setAddProduct}
        addProduct={addProduct}
      />
    </div>
  );
};

export default Home;
