import { useReducer } from "react";
import { Container } from "./styles";
import Header from "../../components/Header";
import BookingForm from "../../components/BookForm";
import Footer from "../../components/Footer";
import { updateTimes, initializeTimes } from "../../utils/temps";

const Bookingpage = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <Container>
      <Header />
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
      <Footer />
    </Container>
  );
};

export default Bookingpage;