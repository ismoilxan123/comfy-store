const SelectCategory = () => {
  return (
    <label className="form-control w-full max-w-full ">
      <div className="label">
        <span className="label-text">Select Category</span>
      </div>
      <select className="select select-bordered select-sm w-full max-w-xs">
        <option disabled selected>
          all
        </option>
        <option>Small Apple</option>
        <option>Small Orange</option>
        <option>Small Tomato</option>
      </select>
    </label>
  );
};

export default SelectCategory;
