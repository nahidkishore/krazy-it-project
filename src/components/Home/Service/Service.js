import React from "react";
import web from "../../../images/icons/service1.png";
import graphic from "../../../images/icons/service2.png";
import development from "../../../images/icons/service3.png";
import ServiceDetail from "./ServiceDetail";
import "./service.css";
const serviceData = [
  {
    id: 1,
    title: "Web & Mobile design",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptates odit incidunt, aliquid rem eius!",
    img: web,
  },
  {
    id: 2,
    title: "Grapic design",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptates odit incidunt, aliquid rem eius!",
    img: graphic,
  },
  {
    id: 3,
    title: "Web development",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptates odit incidunt, aliquid rem eius!",
    img: development,
  },
  {
    id: 4,
    title: "Design",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem voluptates odit incidunt, aliquid rem eius!",
    img: development,
  },
];
const Service = () => {
  return (
    <section className="service mt-5">
      <h1 className="text-center text-white pt-2">What We offer</h1>
      <div className="d-flex justify-content-center">
        <div className="row w-75 mt-5 ">
          {serviceData.map((service) => (
            <ServiceDetail service={service}></ServiceDetail>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;
