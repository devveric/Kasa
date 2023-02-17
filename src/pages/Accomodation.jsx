import React from "react";
import Card from "../models/Card";

const Accomodation = ({ props }) => {
  return (
    <section>
      <Card data={props} />
    </section>
  );
};

export default Accomodation;