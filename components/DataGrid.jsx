import React from "react";
import TopRated from "./TopRated";
import MostPopular from "./MostPopular";
import Upcoming from "./Upcoming";

export default function DataGrid() {
  return (
    <section className="grid">
      <div className="container">
        <TopRated />
        <MostPopular />
        <Upcoming />
      </div>
    </section>
  );
}
