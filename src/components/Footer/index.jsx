import { HashLink } from "react-router-hash-link";
import { Container, Content, Copyright, Column, Image } from "./styles";
import restaurant from "../../assets/Asset 20@4x.png";

const Footer = (props)=> {
  return (
    <Container {...props}>
      <Content>
        <Image src={restaurant} alt="Restaurant Food" />
        <Column>
          <h4>Little<br />Lemon</h4>
          <ul>
            <li> <HashLink to="/">Home</HashLink> </li>
            <li> <HashLink to="/#">Menu</HashLink> </li>
            <li> <HashLink to="/bookings">Reservations</HashLink> </li>
            <li> <HashLink to="/#">Order Online</HashLink> </li>
            <li> <HashLink to="/#">Login</HashLink> </li>
          </ul>
        </Column>
        <Column>
          <h4>Contact</h4>
          <ul>
            <li>
              <address>
                Little Lemon <br />
                331 E Lorem. <br />
                Lorem, ipsum dolor.,<br />
                Lorem, ipsum. <br />
                Lorem.
              </address>
            </li>
            <li> <a href="tel:+551199999999" target="_blank" rel="external noreferrer">+12 34 5678-9000</a> </li>
            <li> <a href="mailto:contact@lilemon.com" target="_blank" rel="external noreferrer">contact@lilemon.com</a> </li>
          </ul>
        </Column>
        <Column>
          <h4>Social Media</h4>
          <ul>
            <li> <a href="#" target="_blank" rel="external noreferrer">Facebook</a> </li>
            <li> <a href="#" target="_blank" rel="external noreferrer">Instagram</a> </li>
            <li> <a href="#" target="_blank" rel="external noreferrer">Twitter</a> </li>
          </ul>
        </Column>
      </Content>
      <Copyright>
        <p>© {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
      </Copyright>
    </Container>
  );
};

export default Footer;