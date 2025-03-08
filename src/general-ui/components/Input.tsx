import React, { ChangeEvent } from "react";
import "./Input.css";
interface InputProps {
  type: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, placeholder, onChange }) => {
  return (
    <>
      <label className="label">
        <input
          type={type}
          className="input placeholder:font-extrabold "
          placeholder={placeholder}

          onChange={onChange}
        />
      </label>
    </>
  );
};
export default Input;