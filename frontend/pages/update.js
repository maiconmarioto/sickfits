import React from "react";
import Link from "next/link";
import UpdateItem from "../components/UpdateItem";

const Sell = ({ query: { id } }) => (
  <div>
    <UpdateItem id={id} />
  </div>
);

export default Sell;
