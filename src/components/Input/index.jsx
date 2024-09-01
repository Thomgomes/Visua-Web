import { useState } from "react";

/* eslint-disable react/prop-types */
export default function Input({
  type,
  placeholder,
  value,
  onChange,
  icon: Icon,
  ariaLabel,
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative mb-9">
      {Icon && (
        <Icon
          className={`absolute top-1/2 transform -translate-y-1/2 text-gray-400 transition-all duration-300 ${
            isFocused || value ? "-left-7" : "left-3"
          }`}
        />
      )}
      <input
        type={type}
        placeholder={isFocused ? null : placeholder}
        aria-label={ariaLabel}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="block w-full placeholder:pl-10 py-2.5 border-2 bg-Visua-Input placeholder:text-Visua-Placeholder/icon border-Visua-Blue rounded-full focus:ring-2 focus:outline-none focus:ring-Visua-Placeholder/icon transition duration-300 ease-in-out"
      />
    </div>
  );
}
