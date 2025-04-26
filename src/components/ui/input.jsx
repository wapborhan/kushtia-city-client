/* eslint-disable react/prop-types */
function Input({
  className,
  type,
  name,
  register,
  errors,
  required,
  ...props
}) {
  return (
    <>
      <input
        type={type}
        className={className}
        {...register(name, { required })}
        {...props}
      />
      {errors?.[name] && (
        <span style={{ color: "red" }} role="alert">
          {[name]} আবশ্যক
        </span>
      )}
    </>
  );
}

export { Input };
