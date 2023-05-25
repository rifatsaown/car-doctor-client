import parts from "../../../assets/images/about_us/parts.jpg";
import person from "../../../assets/images/about_us/person.jpg";

const About = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative">
          <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
          <img
            src={parts}
            className="w-7/12 border-8 border-white absolute right-8 top-1/2 rounded-lg shadow-2xl"
          />
        </div>
        <div className="lg:w-1/2 p-4">
          <h3 className="text-2xl text-orange-600 font-bold mb-5">About Us</h3>
          <h1 className="text-5xl font-bold">
            We are qualified & of experience in this field
          </h1>
          <p className="py-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&#39;t look even slightly
            believable.
          </p>
          <p className="mb-6">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&#39;t look even slightly
            believable.
          </p>
          <button className="btn btn-accent">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
