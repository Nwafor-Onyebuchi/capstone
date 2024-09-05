import { Container } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CTA from "../../components/CTA";
import Specials from "../../components/Specials";
import FeedBack from "../../components/FeedBack";
import Boston from "../../components/Boston";

const Home = ()=> {
  return (
    <Container>
      <Header />
      <CTA />
      <Specials />
      <FeedBack />
      <Boston />
      <Footer />
    </Container>
  );
};

export default Home;