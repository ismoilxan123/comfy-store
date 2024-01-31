import { useEffect, useState } from "react";

export default () => {
  const [loading, setLoading] = useState(false);
  const [homeProductss, setHomeProducts] = useState([]);

  async function getHomeProducts() {
    setLoading(true);
    const res = await fetch(
      "https://strapi-store-server.onrender.com/api/products?featured=true"
    );
    const datas = await res.json();
    setLoading(false);
    setHomeProducts(datas.data);
  }
  useEffect(() => {
    getHomeProducts();
  }, []);
  return homeProductss, loading;
};
