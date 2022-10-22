import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import ListGroup from "react-bootstrap/ListGroup";
import BrandCarousel from "../BrandCarousel/BrandCarousel";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const RightSideNav = () => {

  const {providerLogin} = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider()


  const handleGoogleSignIn = () =>{
    providerLogin(googleProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch( error => console.error(error))
  }

  return (
    <div>
      <ButtonGroup vertical>
        <Button onClick={handleGoogleSignIn} variant="outline-success">
          {" "}
          <FaGoogle></FaGoogle> Login With Google
        </Button>
        <Button variant="outline-primary">
          {" "}
          <FaFacebook></FaFacebook> Login With Facebook
        </Button>
        <Button variant="outline-dark">
          <FaGithub></FaGithub> Login With Github
        </Button>
      </ButtonGroup>
      <div className="mt-4">
        <h5>Find Us On</h5>
        <ListGroup vertical>
          <ListGroup.Item
            className="mb-2"
            as="a"
            href="https://www.facebook.com/"
          >
            <FaFacebook></FaFacebook>Facebook
          </ListGroup.Item>
          <ListGroup.Item
            className="mb-2"
            as="a"
            href="https://www.github.com/"
          >
            <FaGithub></FaGithub>GitHub
          </ListGroup.Item>
          <ListGroup.Item
            className="mb-2"
            as="a"
            href="https://www.linkedin.com/"
          >
            <FaLinkedin></FaLinkedin>LinkedIn
          </ListGroup.Item>
          <ListGroup.Item
            className="mb-2"
            as="a"
            href="https://www.instagram.com"
          >
            <FaInstagram></FaInstagram>Instagram
          </ListGroup.Item>
          <ListGroup.Item
            className="mb-2"
            as="a"
            href="https://www.youtube.com/"
          >
            <FaYoutube></FaYoutube>Youtube
          </ListGroup.Item>
          <ListGroup.Item
            className="mb-2"
            as="a"
            href="https://www.twitter.com/"
          >
            <FaTwitter></FaTwitter>Twitter
          </ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarousel></BrandCarousel>
      </div>
    </div>
  );
};

export default RightSideNav;
