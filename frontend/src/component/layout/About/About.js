import React,{Fragment} from "react";
//import "./aboutSection.css";
import "../../../css/style.css";
import { FontAwesomeIcon ,} from "@fortawesome/react-fontawesome";
import { faFacebook,faTwitter,faGoogle,faInstagram,faSearchengin} from "@fortawesome/free-brands-svg-icons";
import "../../../css/bootstrap.css";
import "../../../css/responsive.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import about_img from "./img/about-img.png";

const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/meabhisingh";
  };
  return (
    <Fragment>

<div class="sub_page">


<div class="hero_area">
  {/* <!-- header section strats --> */}
  <header class="header_section">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg custom_nav-container ">
        <a class="navbar-brand" href="index.html">
          <span>
            Book n' Things
          </span>
        </a>

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class=""> </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link pl-lg-0" href="/products">Products </a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="/about"> About Us <span class="sr-only">(current)</span> </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="categories.html">Categories</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="blog.html"> Become a Seller </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">Contact Us</a>
            </li>
          </ul>
          <from class="search_form">
            <input type="text" class="form-control" placeholder="Search here..."/>
            <Button class="" type="submit">
            <FontAwesomeIcon icon={faSearchengin} />
            </Button>
          </from>
        </div>
      </nav>
    </div>
  </header>
  {/* <!-- end header section --> */}
</div>

{/* <!-- about section --> */}

<section class="about_section layout_padding">
  <div class="container ">
    <div class="row">
      <div class="col-md-6">
        <div class="img-box">
          <img src={about_img} alt=""></img>
        </div>
      </div>
      <div class="col-md-6">
        <div class="detail-box">
          <div class="heading_container">
            <h2>
              About Our Bookstore
            </h2>
          </div>
          <p>
            At cumque tenetur iste molestiae, vel eum reiciendis assumenda! Numquam, repudiandae. Consequuntur obcaecati recusandae aliquam, amet doloribus eius dolores officiis cumque? Quibusdam praesentium pariatur sapiente mollitia, amet hic iusto voluptas! Iusto quo earum vitae excepturi, ipsam aliquid deleniti assumenda culpa deserunt.
          </p>
          <a href="">
            Read More
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
{/* 
// <!-- end about section -->

// <!-- info section --> */}

<section class="info_section layout_padding2">
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-lg-3 info-col">
        <div class="info_detail">
          <h4>
            About Us
          </h4>
          <p>
            Vitae aut explicabo fugit facere alias distinctio, exem commodi mollitia minusem dignissimos atque asperiores incidunt vel voluptate iste
          </p>
          <div class="info_social">
            <a href="">
            <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="">
            <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="">
            <FontAwesomeIcon icon={faGoogle} />
            </a>
            <a href="">
            <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 info-col">
        <div class="info_contact">
          <h4>
            Address
          </h4>
          <div class="contact_link_box">
            <a href="">
              <i class="fa fa-map-marker" aria-hidden="true"></i>
              <span>
                Location
              </span>
            </a>
            <a href="">
              <i class="fa fa-phone" aria-hidden="true"></i>
              <span>
                Call +01 1234567890
              </span>
            </a>
            <a href="">
              <i class="fa fa-envelope" aria-hidden="true"></i>
              <span>
                demo@gmail.com
              </span>
            </a>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 info-col">
        <div class="info_contact">
          <h4>
            Newsletter
          </h4>
          <form action="#">
            <input type="text" placeholder="Enter email" />
            <button type="submit">
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div class="col-md-6 col-lg-3 info-col">
        <div class="map_container">
          <div class="map">
            <div id="googleMap"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* 
<!-- end info section -->

<!-- footer section --> */}
<footer class="footer_section">
  <div class="container">
    <p>
      &copy; <span id="displayYear"></span> All Rights Reserved By
      <a href="https://html.design/">Free Html Templates</a>
    </p>
  </div>
</footer>
</div>
</Fragment>

  );
};

export default About;
