import React from "react";

interface Props {
  children: React.ReactNode;
}

export const PhoneLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="PhoneLayout">
      {children}
    </div>
  );
};
