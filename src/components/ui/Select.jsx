/* eslint-disable react/prop-types */
import { Controller } from "react-hook-form";

const Select = ({
  control,
  name,
  value,
  onChange,
  options,
  placeholder,
  required,
  errors,
}) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={{
          required: required,
        }}
        render={({ field }) => (
          <select name={name} value={value} onChange={onChange} {...field}>
            {placeholder && (
              <option value={placeholder} selected="selected" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}
      />
      {errors && errors[name] && (
        <span style={{ color: "red" }} role="alert">
          {name} আবশ্যক
        </span>
      )}
    </>
  );
};

export default Select;
