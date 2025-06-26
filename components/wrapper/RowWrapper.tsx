import React, { ReactNode } from "react";

const RowWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="row-wrapper w-full flex flex-wrap justify-center items-center gap-2 px-2 py-4">
      {children}
    </div>
  );
};

export default RowWrapper;
