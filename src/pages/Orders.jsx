import useProducts from "../hooks/useProducts";

const Orders = () => {
  const { loading, datas } = useProducts();

  return (
    <div>
      <div className="mb-12">
        <h2 className="text-3xl font-medium tracking-wider capitalize mb-4">
          Your Orders
        </h2>
        <hr className="border-black border-2" />
      </div>
      <div>
        <h1 className="mb-4 capitalize">Total orders:</h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Count</th>
                <th>Cost</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((data, i) => (
                <tr key={i} className={i % 2 == 0 ? "bg-base-200" : ""}>
                  <th>{i + 1}</th>
                  <td>{data.title}</td>
                  <td>{data.count}</td>
                  <td>${data.price}</td>
                  <td>${data.updatedAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
