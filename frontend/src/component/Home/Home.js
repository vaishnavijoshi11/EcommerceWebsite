import React, { Fragment, useEffect } from "react";
//import { CgMouse } from "react-icons/all";
//import "./Home.css";
import "../../css/style.css";
import { FontAwesomeIcon ,} from "@fortawesome/react-fontawesome";
import { faFacebook,faTwitter,faGoogle,faInstagram,faSearchengin} from "@fortawesome/free-brands-svg-icons";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {faUser} from "@fortawesome/free-regular-svg-icons";
import "../../css/bootstrap.css";
import "../../css/responsive.css";
import img from  "./images/slider-img.png";
import img1 from "./images/cat1.png";
import img2 from './images/cat2.png';
import img3 from './images/cat3.png';
import img4 from './images/cat4.png';
import img5 from './images/cat5.png';
import img6 from './images/cat6.png';
import b1 from './images/b1.jpg';
import b2 from './images/b2.jpg';
import contact from './images/contact-img.jpg';
import about_img from "../Home/images/about-img.png";
import c1 from "../Home/images/c1.jpg";
import c2 from "../Home/images/c2.jpg";
import c3 from "../Home/images/c3.jpg";
import { Link } from "react-router-dom";

//import ProductCard from "./ProductCard.js";
//import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
//import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
    <div class="hero_area">
    {/* <!-- header section strats --> */}
    <header class="header_section">
      <div class="container-fluid">
        <nav class="navbar navbar-expand-lg custom_nav-container ">
          <a class="navbar-brand" href="/home">
            <span>
              Books n' Things
            </span>
          </a>

          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class=""> </span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link pl-lg-0" href="/products">Products <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
              <a class="nav-link" href="/about">About us</a>

              </li>
              <li class="nav-item">
                <a class="nav-link" href="categories.html">Categories</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">   Become a Seller </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">Contact Us</a>
              </li>
            </ul>
            <from class="search_form">
              <input type="text" class="form-control" placeholder="Search here..."></input>
              <button class="" type="submit">
              <FontAwesomeIcon icon={faSearchengin} />  
                          </button>
             
            </from>
{/*    
            <div class="search_form">
            <button class="" type="submit">
              <FontAwesomeIcon icon={faCartShopping} />  
                          </button>
                         

                          
            </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div class="search_form">
            <button class="" type="submit">
              <FontAwesomeIcon icon={faUser} />  
                          </button>

            </div> */}
             
          </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

       
        </nav>
      </div>
    </header>
    {/* <!-- end header section -->
    <!-- slider section --> */}
    <section class="slider_section ">
      <div id="customCarousel1" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="container ">
              <div class="row">
                <div class="col-md-6">
                  <div class="detail-box">
                    <h5>
                      Bostorek Bookstore
                    </h5>
                    <h1>
                      For All Your 
                      Reading Needs
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optio.
                    </p>
                    <a href="">
                      Read More
                    </a>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-box">
                    <img src={img} alt=""></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container ">
              <div class="row">
                <div class="col-md-6">
                  <div class="detail-box">
                    <h5>
                   Book n' Things Bookstore
                    </h5>
                    <h1>
                      For All Your 
                      Reading Needs
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optio.
                    </p>
                    <a href="">
                      Read More
                    </a>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-box">
                    <img src={img} alt=""></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="container ">
              <div class="row">
                <div class="col-md-6">
                  <div class="detail-box">
                    <h5>
                      Bostorek Bookstore
                    </h5>
                    <h1>
                      For All Your 
                      Reading Needs
                    </h1>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste quam velit saepe dolorem deserunt quo quidem ad optio.
                    </p>
                    <a href="">
                      Read More
                    </a>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="img-box">
                    <img src={img} alt=""></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div class="carousel_btn_box">
          <a class="carousel-control-prev" href="#customCarousel1" role="button" data-slide="prev">
            <i class="fa fa-angle-left" aria-hidden="true"></i>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#customCarousel1" role="button" data-slide="next">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
            <span class="sr-only">Next</span>
          </a>
        </div> */}
      </div>
    </section>
  {/* <!-- end slider section --> */}


  </div>
   <section class="catagory_section layout_padding">
   <div class="catagory_container">
     <div class="container ">
       <div class="heading_container heading_center">
         <h2>
           Books Categories
         </h2>
         <p>
           There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
         </p>
       </div>
       <div class="row">
         <div class="col-sm-6 col-md-4 ">
           <div class="box ">
             <div class="img-box">
               <img src={img1} alt=""></img>
             </div>
             <div class="detail-box">
               <h5>
                 Textbooks
               </h5>
               <p>
                 fact that a reader will be distracted by the readable content of a page when looking at its layout.
                 The
                 point of using
               </p>
             </div>
           </div>
         </div>
         <div class="col-sm-6 col-md-4 ">
           <div class="box ">
             <div class="img-box">
               <img src={img2} alt=""></img>
             </div>
             <div class="detail-box">
               <h5>
                 Science
               </h5>
               <p>
                 fact that a reader will be distracted by the readable content of a page when looking at its layout.
                 The
                 point of using
               </p>
             </div>
           </div>
         </div>
         <div class="col-sm-6 col-md-4 ">
           <div class="box ">
             <div class="img-box">
               <img src={img3} alt=""></img>
             </div>
             <div class="detail-box">
               <h5>
                 History
               </h5>
               <p>
                 fact that a reader will be distracted by the readable content of a page when looking at its layout.
                 The
                 point of using
               </p>
             </div>
           </div>
         </div>
         <div class="col-sm-6 col-md-4 ">
           <div class="box ">
             <div class="img-box">
               <img src={img4} alt=""></img>
             </div>
             <div class="detail-box">
               <h5>
                 Biography
               </h5>
               <p>
                 fact that a reader will be distracted by the readable content of a page when looking at its layout.
                 The
                 point of using
               </p>
             </div>
           </div>
         </div>
         <div class="col-sm-6 col-md-4 ">
           <div class="box ">
             <div class="img-box">
               <img src={img5} alt=""></img>
             </div>
             <div class="detail-box">
               <h5>
                 Adventure
               </h5>
               <p>
                 fact that a reader will be distracted by the readable content of a page when looking at its layout.
                 The
                 point of using
               </p>
             </div>
           </div>
         </div>
         <div class="col-sm-6 col-md-4 ">
           <div class="box ">
             <div class="img-box">
               <img src={img6} alt=""></img>
             </div>
             <div class="detail-box">
               <h5>
                 Fantasy
               </h5>
               <p>
                 fact that a reader will be distracted by the readable content of a page when looking at its layout.
                 The
                 point of using
               </p>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </section>
  



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

 {/* <!-- end about section -->

 <!-- client section --> */}

 <section class="client_section layout_padding">
   <div class="container ">
     <div class="heading_container heading_center">
       <h2>
         What Says Customers
       </h2>
       
     </div>
     <div class="row">
       <div class="col-md-6 mx-auto">
         <div class="client_container ">
           <div class="detail-box">
             <p>
               Editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
             </p>
             <span>
               <i class="fa fa-quote-left" aria-hidden="true"></i>
             </span>
           </div>
           <div class="client_id">
             <div class="img-box">
               <img src={c1}alt=""></img>
             </div>
             <div class="client_name">
               <h5>
                 Jone Mark
               </h5>
               <h6>
                 Student
               </h6>
             </div>
           </div>
         </div>
       </div>
       <div class="col-md-6 mx-auto">
         <div class="client_container ">
           <div class="detail-box">
             <p>
               Editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
             </p>
             <span>
               <i class="fa fa-quote-left" aria-hidden="true"></i>
             </span>
           </div>
           <div class="client_id">
             <div class="img-box">
               <img src={c2} alt=""></img>
             </div>
             <div class="client_name">
               <h5>
                 Anna Crowe
               </h5>
               <h6>
                 Student
               </h6>
             </div>
           </div>
         </div>
       </div>
       <div class="col-lg-6 mx-auto">
         <div class="client_container ">
           <div class="detail-box">
             <p>
               Editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by
             </p>
             <span>
               <i class="fa fa-quote-left" aria-hidden="true"></i>
             </span>
           </div>
           <div class="client_id">
             <div class="img-box">
               <img src={c3} alt=""></img>
             </div>
             <div class="client_name">
               <h5>
                 Hilley James
               </h5>
               <h6>
                 Student
               </h6>
             </div>
           </div>
         </div>
       </div>
     </div>
   </div>
 </section>

 {/* <!-- end client section -->

 <!-- blog section --> */}

 <section class="blog_section layout_padding">
   <div class="container">
     <div class="heading_container heading_center">
       <h2>
         From Our Blog
       </h2>
     </div>
     <div class="row">
       <div class="col-md-6">
         <div class="box">
           <div class="img-box">
             <img src={b1} alt=""></img>
             <h4 class="blog_date">
               <span>
                 19 January 2021
               </span>
             </h4>
           </div>
           <div class="detail-box">
             <h5>
               Eius, dolor? Vel velit sed doloremque
             </h5>
             <p>
               Incidunt magni explicabo ullam ipsa quo consequuntur eveniet illo? Aspernatur nam dolorem a neque? Esse eaque dolores hic debitis cupiditate, ad beatae voluptatem numquam dignissimos ab porro
             </p>
             <a href="">
               Read More
             </a>
           </div>
         </div>
       </div>
       <div class="col-md-6">
         <div class="box">
           <div class="img-box">
             <img src={b2} alt=""></img>
             <h4 class="blog_date">
               <span>
                 19 January 2021
               </span>
             </h4>
           </div>
           <div class="detail-box">
             <h5>
               Minus aliquid alias porro iure fuga
             </h5>
             <p>
               Officiis veritatis id illo eligendi repellat facilis animi adipisci praesentium. Tempore ab provident porro illo ex obcaecati deleniti enim sequi voluptas at. Harum veniam eos nisi distinctio! Porro, reiciendis eius.
             </p>
             <a href="">
               Read More
             </a>
           </div>
         </div>
       </div>
     </div>
   </div>
 </section>

 {/* <!-- end blog section -->

 <!-- contact section --> */}

 <section class="contact_section layout_padding">
   <div class="container">
     <div class="row">
       <div class="col-md-6 ">
         <div class="heading_container ">
           <h2 class="">
             Contact Us
           </h2>
         </div>
         <form action="#">
           <div>
             <input type="text" placeholder="Name" />
           </div>
           <div>
             <input type="email" placeholder="Email" />
           </div>
           <div>
             <input type="text" placeholder="Phone Number" />
           </div>
           <div>
             <input type="text" class="message-box" placeholder="Message" />
           </div>
           <div class="btn-box">
             <button>
               SEND
             </button>
           </div>
         </form>
       </div>
       <div class="col-md-6">
         <div class="img-box">
           <img src={contact} alt=""></img>
         </div>
       </div>
     </div>
   </div>
 </section>

 {/* <!-- end contact section -->

 <!-- info section --> */}

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

 {/* <!-- end info section -->*/}
 <footer class="footer_section">
   <div class="container">
     <p>
       &copy; <span id="displayYear"></span> All Rights Reserved By
       <a href="https://html.design/">Free Html Templates</a>
     </p>
   </div>
 </footer>


 

</Fragment>


);
};

 




export default Home;
