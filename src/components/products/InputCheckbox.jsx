const InputCheckbox = () => {
  return (
    <div className="form-control flex flex-col justify-center items-center gap-2 ">
      <h2>Free shipping</h2>
      <input
        type="checkbox"
        checked="checked"
        className="checkbox checkbox-secondary"
      />
    </div>
  );
};

export default InputCheckbox;
