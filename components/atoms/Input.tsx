import { useId, useState } from "react";
import { FaEye } from "react-icons/fa";

type InputProps = {
  placeholder: string;
  value: string | number;
  setValue?: Function;
  inputType?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  accept?: string;
  isDisabled?: boolean;
  refprop?: React.Ref<HTMLInputElement>;
  limit?: number;
};

export default function Input({
  placeholder,
  value,
  setValue,
  inputType = "text",
  onBlur,
  onFocus,
  accept,
  isDisabled,
  refprop,
  limit = 40,
}: InputProps) {
  const id = useId();
  const [showPass, setShowPass] = useState(true);

  return (
    <div className="rounded-md relative flex-auto w-full">
      {isDisabled ? (
        value ? (
          <>
            <div className="w-full text-xl pl-4 pb-2 pt-6 border leading-none border-gray-500 bg-transparent rounded-md min-h-[3.6rem] cursor-not-allowed">
              {value}
            </div>
            <label
              className="absolute text-xs text-primary top-1 left-4"
              htmlFor={id}>
              {placeholder}
            </label>
          </>
        ) : (
          <div className="w-full text-xl text-primary pl-4 pb-2 pt-6 border leading-none border-gray-500 bg-transparent rounded-md min-h-[3.6rem] cursor-not-allowed">
            {placeholder}
          </div>
        )
      ) : (
        <>
          <div className="flex items-center text-xl pl-4 pb-2 pt-6 border leading-none border-gray-500 rounded-md focus-within:border-primary">
            <input
              className={`border-none flex-1 w-full bg-transparent  peer placeholder:text-transparent focus:ring-0 focus:outline-none select-auto`}
              autoComplete="off"
              ref={refprop}
              id={id}
              placeholder={placeholder}
              value={value}
              type={
                inputType === "password"
                  ? !showPass
                    ? "text"
                    : "password"
                  : inputType
              }
              onChange={(e) =>
                e.target.value.length < limit &&
                !!setValue &&
                setValue(e.target.value)
              }
              onBlur={onBlur && onBlur}
              accept={accept && accept}
              onFocus={onFocus && onFocus}
            />
            <label
              className="absolute text-xs text-primary duration-100 transform -translate-y-4 top-5 left-4 origin-[0] peer-focus:text-primary peer-focus:top-5 peer-focus:text-xs peer-focus:-translate-y-4 cursor-text peer-placeholder-shown:text-light_gray peer-placeholder-shown:text-2xl peer-placeholder-shown:-translate-y-4 peer-placeholder-shown:top-8"
              htmlFor={id}>
              {placeholder}
            </label>
            {inputType === "password" && (
              <div
                className="cursor-pointer px-4"
                onClick={() => setShowPass(!showPass)}>
                <FaEye />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
