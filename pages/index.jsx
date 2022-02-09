import About from "components/about/Index/About";
import IndexFooter from "components/footer/indexFooter/IndexFooter";
import ServicesIndex from "components/services/ServicesIndex";
import IndexTestimonies from "components/testimonies/IndexTestimonies";

export const Home = () => {
  return (
    <div id="inicio">
      <About />
      <ServicesIndex />
      <IndexTestimonies />
      <IndexFooter />
    </div>
  );
};

export default Home;
