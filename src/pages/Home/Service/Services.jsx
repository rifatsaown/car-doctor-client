import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://car-doctor-server-cyan-iota.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-4">
      <div className="text-center">
        <h1 className="text-accent text-2xl font-bold">Services</h1>
        <h2 className="text-5xl font-semibold">Our Service Area</h2>
        <p>
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don&apos;t look even slightly
          believable.{" "}
        </p>
      </div>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Service key={service._id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
