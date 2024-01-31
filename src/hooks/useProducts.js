import { addDoc, collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";
import { db } from "../firebase/firebase";

export default () => {
  const [loading, setLoading] = useState(false);
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);
  async function getProducts() {
    setLoading(true);
    const col = collection(db, "products");
    const snapShot = await getDocs(col);
    // setDatas(snapShot.docs.map((doc) => doc.data()));
    setDatas(snapShot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoading(false);
  }

  async function addProducts(pro) {
    try {
      setLoading(true);
      const docRef = await addDoc(collection(db, "products"), pro);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setLoading(false);
  }
  return {
    loading,
    datas,
    addProducts,
  };
};
