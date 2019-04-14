import * as React from "react";
import styled from "styled-components";
import { P } from "../browse/Stock";

const Green = styled.h1`
  color: green;
  font-size: 64px;
  margin-top: 0;
  line-height: 50px;
`;

const Red = styled.h1`
  margin-top: 0;
  line-height: 50px;
  color: red;
  font-size: 64px;
`;

type PercentProps = { amount: number };

export const Percent = ({ amount }: PercentProps) => {
  const number = parseFloat("" + amount);
  return (
    <>
      <P>Change</P>{" "}
      {number > 0 ? (
        <Green>+{number.toFixed(2)}%</Green>
      ) : (
        <Red>{number.toFixed(2)}%</Red>
      )}
    </>
  );
};
