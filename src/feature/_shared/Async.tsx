import * as React from "react";

type AsyncProps = { hasData: boolean };

export const Async: React.FunctionComponent<AsyncProps> = ({
  hasData,
  children
}) => {
  return !!hasData ? <>{children}</> : <p>Loading...</p>;
};
