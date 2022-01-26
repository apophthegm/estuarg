import About from "components/about/Index/About";
import Header from "components/header";
import ServicesIndex from "components/services/ServicesIndex";
import IndexTestimonies from "components/testimonies/IndexTestimonies";

export const Home = () => {
  return (
    <>
      <Header />
      <About />
      <ServicesIndex />
      <IndexTestimonies />
    </>
  );
};

export default Home;
