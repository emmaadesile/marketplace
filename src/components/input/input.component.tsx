import React from "react";

export const Input = ({
  value,
  handleChange,
}: {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return <input value={value} onChange={handleChange} />;
};
