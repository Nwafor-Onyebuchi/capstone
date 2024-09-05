import { Container, Content, Image } from "./styles";
import Mario_and_Adrian_A from "../../assets/Mario_and_Adrian_A.jpg";
import Mario_and_Adrian_B from "../../assets/Mario_and_Adrian_B.jpg";

const Boston = () => {
  return (
    <Container id="about">
      <Content>
        <h1>Little Lemon</h1>
        <h2>Boston</h2>
        <p className="lead-txt">
          Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.
        </p>
        <p className="lead-txt">
          To craft the menu, Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor repellendus ab repellat quia id nihil hic architecto expedita! Laudantium inventore delectus fugiat distinctio?
        </p>
      </Content>
      <Image>
        <img src={Mario_and_Adrian_A} alt="Mario and Adrian" />
        <img src={Mario_and_Adrian_B} alt="Mario and Adrian" />
      </Image>
    </Container>
  );
};

export default Boston;