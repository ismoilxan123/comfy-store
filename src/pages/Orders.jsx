const Orders = () => {
  return (
    <div>
      <div className="mb-12">
        <h2 className="text-3xl font-medium tracking-wider capitalize mb-4">
          Your Orders
        </h2>
        <hr className="border-black border-2" />
      </div>
      <div>
        <h1 className="mb-4 capitalize">
          Total orders: <span>2</span>
        </h1>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Address</th>
                <th>Products</th>
                <th>Cost</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="bg-base-200">
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td>$100.0</td>
              </tr>
              {/* row 2 */}
              <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
                <td>$100.0</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
