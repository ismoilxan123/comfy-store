const InputRange = () => {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">Select price</span>
        <span className="label-text-alt">Top Right label</span>
      </div>
      <input
        type="range"
        min={0}
        max="100000"
        value="10"
        className="range range-secondary"
      />
      <div className="label">
        <span className="label-text-alt">0</span>
        <span className="label-text-alt">Max: $1,000.00</span>
      </div>
    </label>
  );
};

export default InputRange;
