import React from "react";
import "./Footer.css";
import { Facebook, Instagram, Twitter, Youtube } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <div className="footer-dark mt-5">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#">Bikes</a>
                </li>
                <li>
                  <a href="#">Our Brands</a>
                </li>
                <li>
                  <a href="#">Our Loaction</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="#">Bikes</a>
                </li>
                <li>
                  <a href="#">Team</a>
                </li>
                <li>
                  <a href="#">Admins</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <h3>Big Bike</h3>
              <p>
                The motorcycle on the right is priced above the suggested Kelley
                Blue Book retail value. The seller does not state whether or not
                the price is firm or negotiable. Nothing about this listing is
                inviting. Potential buyers are likely to skip it based on the
                price and lack of price justification.
              </p>
            </div>
            <div className="col item social">
              <a href="#">
                <Facebook></Facebook>
              </a>
              <a href="#">
                <Twitter></Twitter>
              </a>
              <a href="#">
                <Youtube></Youtube>
              </a>
              <a href="#">
                <Instagram></Instagram>
              </a>
            </div>
          </div>
          <p className="copyright">Big Bike © 2021</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
