import React from "react";
import Project_Card from "./Project_Card";

const Project_Cards = ({ projects }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((card_data) => (
        <Project_Card card_data={card_data} key={card_data.id} />
      ))}
    </div>
  );
};

export default Project_Cards;
