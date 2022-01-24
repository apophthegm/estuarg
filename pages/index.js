import About from "components/about/Index/About";
import Header from "components/header";
import ServicesIndex from "components/services/ServicesIndex";

export const Home = () => {
  return (
    <>
      <Header />
      <About />
      <ServicesIndex />
    </>
  );
};

export default Home;
