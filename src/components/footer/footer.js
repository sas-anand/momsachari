import React from "react";
import "./footer.css";
// import Logo from "../../assets/images/logo.svg";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import HeadphonesOutlinedIcon from "@mui/icons-material/HeadphonesOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import WatchLaterOutlinedIcon from "@mui/icons-material/WatchLaterOutlined";
import paymentImage from "../../assets/images/payment-method.png";

import appStore from "../../assets/images/app-store.jpg";
import googlePlay from "../../assets/images/google-play.jpg";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Services from "../services/services";

const Footer = () => {
  return (
    <>
      <div className="footerWrapper">
        <Services />

        <footer>
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 part1 ">
              <p><h3><LocationOnOutlinedIcon />Manufacturing Address:</h3></p>
                  <strong><p>Village: Noni, Post: Noni-Hathwari,</p></strong>
                  <strong><p>Dist: Dumka, Jharkhand - 814101</p></strong> 
                <p>
                  <HeadphonesOutlinedIcon /> <strong>Call Us:</strong> (+91) -
                  9226961604{" "}
                </p>
                <p>
                  <EmailOutlinedIcon /> <strong>Email:</strong> momsachari@gmail.com
                </p>
                <p>
                  <WatchLaterOutlinedIcon /> <strong>Hours:</strong> 10:00 -
                  18:00, Mon - Sat
                </p>
              </div>

              <div className="col-md-6 part2">
                <div className="row">
                  <div className="col">
                    <h3>Quick Links</h3>
                    <ul class="footer-list mb-sm-5 mb-md-0">
                      <li>
                        <Link to="/about">Who we Are</Link>
                      </li>
                      <li>
                        <Link to="#">Track Order</Link>
                      </li>
                      <li>
                        <Link to="#">Contact Us</Link>
                      </li>                    
                    </ul>
                  </div>

                  <div className="col">
                    <h3>Policies</h3>
                    <ul class="footer-list mb-sm-5 mb-md-0">
                      <li>
                        <Link to="#">Privacy Policy</Link>
                      </li>
                      <li>
                        <Link to="#">Refund Policy</Link>
                      </li>
                      <li>
                        <Link to="#">Terms &amp; Conditions</Link>
                      </li>                     
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-3 part3">
                <h3>Payment Gateway</h3>
                <br className="res-hide" />
                <br />

                <p>Secured Payment Gateways</p>
                <img src={paymentImage} />
              </div>
            </div>

            <hr />

            <div className="row lastStrip">
              <div className="col-md-3 part_1">
                <p>
                  © 2024, Mom's Achari -  Ecommerce Template All rights reserved
                </p>
              </div>
              <div className="col-md-3 part3  part_3">
                <div className="d-flex align-items-center">
                  <h5>Follow Us</h5>
                  <ul className="list list-inline">
                    <li className="list-inline-item">
                      <Link to={"https://www.facebook.com/profile.php?id=61555575825393&mibextid=LQQJ4d"}>
                        <FacebookOutlinedIcon />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to={""}>
                        <TwitterIcon />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to={"https://www.instagram.com/momsachari?igsh=MWx2djVxeHo1cnVy"}>
                        <InstagramIcon />
                      </Link>
                    </li>
                    <li className="list-inline-item">
                      <Link to={""}>
                        <YouTubeIcon />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
