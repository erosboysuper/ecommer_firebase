import "./styles.scss";

const FormInput = ({ handle, label, ...otherprops }) => {
  console.log(label, "test");
  console.log(otherprops, "test");

  return (
    <div className="group">
      <input className="form-input" onChange={handle} {...otherprops}></input>
      {label ? (
        <label
          className={`${otherprops.value ? "shrink" : ""} form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};
export default FormInput;
