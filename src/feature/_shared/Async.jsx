import * as React from "react";

export const Async = ({ hasData, children }) => {
  return !!hasData ? <>{children}</> : <p>Loading...</p>;
};
