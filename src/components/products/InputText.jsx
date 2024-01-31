const InputText = () => {
  return (
    <label className="form-control w-full max-w-full h-[70px]">
      <div className="label">
        <span className="label-text">Search product</span>
      </div>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered input-sm w-full max-w-xs"
      />
    </label>
  );
};

export default InputText;
