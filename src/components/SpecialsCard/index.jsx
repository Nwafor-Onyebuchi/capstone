import { Container, Image, Header, Body, CallToAction } from "./styles";



const SpecialFoodCard = ({ imageUrl, title, price, description, ...props })=> {

  return (
    <Container {...props}>
      <Image src={imageUrl}/>
      <Header>
        <span className="title card-title">{title}</span>
        <span className="price highlight">$ {price}</span>
      </Header>
      <Body>
        {description}
      </Body>
      <CallToAction>
        <button className="highlight">Order a delivery</button>
      </CallToAction>
    </Container>
  );
};

export default SpecialFoodCard;