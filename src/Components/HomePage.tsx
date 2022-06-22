import React from "react";
import AboutImg from "../img/home2.png";
import Img1 from "../img/img6a.png";
import Img2 from "../img/img6b.png";
import Img3 from "../img/img6c.png";
import contactimg from "../img/contactimg.png";
import footerlogo from "../img/footerlogo.png";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { MdOutlineLocationOn } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";

AOS.init();

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div id="Home" className="home1">
        <div className="home1Container">
          <div className="container home1content p-3">
            <h1 className="font-weight-bold h1">equipAFRICA</h1>
            <p className="b-2">Business. Opportunities. Mentorship</p>
            <p className="h1-text">
              Be a part of Africa’s fastest growing community of experts, meet
              experts, build connections, grab opportunities and become a better
              person
            </p>
            <button className="btn h1-btn btn-success"> get started</button>
          </div>
        </div>
      </div>
      <div id="About" className="home2">
        <div className="aboutContainer container p-3">
          <h1 className="text-center text-uppercase mt-4 font-weight-bold h1">
            About us
          </h1>
          <div className="AboutContents p-2 d-flex flex-column flex-md-row gap-md-3 flex-lg-row gap-lg-3">
            <div
              data-aos="zoom-in-up"
              data-aos-duration="3000"
              className="Content1"
            >
              <p className="fs-3">
                At equip Africa, we are building a community of Arican
                Changemaker sequipped with the needed resources such as access
                to opportunities,mentorshipand guidance to transform Africa.
                with Equip Africa, youth gain access to information through
                daily updates, mentorships through booking free weekly
                mentorship sessions with various African Change-leaders across
                various spheres of influence.
              </p>
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-duration="3000"
              className="Content1"
            >
              <p className="fs-3">
                We also provide bi-monthly Knowledge sessions, monthly workshops
                coaching calls, accountability partners and reading resources.
                Our mission is to improve the harnessing power of African youths
                through community building, mentorship and information.
              </p>
            </div>
          </div>
          <div className="AboutImgContainer mb-4">
            <img
              data-aos="zoom-in-up"
              data-aos-duration="3000"
              className="img-fluid m-2"
              src={AboutImg}
              alt="Aboutimg"
            />
          </div>
        </div>
      </div>
      <div id="Services" className="home3">
        <div className="container p-3">
          <h1 className="text-center text-uppercase font-weight-bold h1 mb-5">
            Services
          </h1>
          <p className="text-center fs-3">
            We are focused on enhancing the business sector in Africa,
            introducing africans to the worlds’ economy by connecting them to
            potential clients, and mentorship opportunities.
          </p>
          <div className="home3grid">
            <div className="service-grid">
              <div data-aos="zoom-in" data-aos-duration="3000" className="box1">
                <h2 className="my-3">Mentorship</h2>
                <p className="fs-5">
                  EquipAfrica offers weekly one-on-one mentorship sessions to
                  member to equip them in various areas of interest. Mentors are
                  experts and highly sort-after in their field.
                </p>
              </div>
              <div data-aos="zoom-in" data-aos-duration="3000" className="box1">
                <h2 className="my-3">Coaching Calls</h2>
                <p className="fs-5">
                  EquipAfrica organises fortnightly knowledge sessions on
                  selected topics, entrepreneurs unburdening sessions, and group
                  coaching calls.
                </p>
              </div>
              <div data-aos="zoom-in" data-aos-duration="3000" className="box1">
                <h2 className="my-3">Information Updates</h2>
                <p className="fs-5">
                  Sending of grants, scholarships, reminder and application
                  updates on a daily updates. Members can subscribe to
                  newsletters as well.
                </p>
              </div>
              <div data-aos="zoom-in" data-aos-duration="3000" className="box1">
                <h2 className="my-3">Networking</h2>
                <p className="fs-5">
                  Monthly community asssembly, e-meet and greet, panel
                  discussions and an avenue to meet prospective business
                  partners, clients or mentors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home4 p-5">
        <div className="container p-3">
          <h1 className="text-center text-uppercase font-weight-bold h1 p-5">
            Meet our team
          </h1>
          <p className="text-center fs-3">
            The equipAfrica team is a functional community comprising of the
            Vision Bearer, Volunteers, Country Reps and Mentors. We believe in
            Dedication, Passion and Consistency as key to achieving our vision.
          </p>
          <div className="hom4-img-Container p-2">
            <div className="d-flex align-content-center justify-content-center gap-5">
              <div
                data-aos="zoom-in-up"
                data-aos-duration="3000"
                className="img1"
              >
                <img
                  className="img-fluid"
                  width={"150px"}
                  src={Img1}
                  alt="Rounded img"
                />
                <p className="fs-3 text-center">Enyei Oshi</p>
                <p className="text-center fs-5 small">Convener</p>
              </div>
              <div
                data-aos="zoom-in-up"
                data-aos-duration="3000"
                className="img1"
              >
                <div>
                  <img
                    className="img-fluid"
                    width={"150px"}
                    src={Img2}
                    alt="Rounded img"
                  />
                </div>
                <p className="fs-3 text-center">Gabby Ed</p>
                <p className="text-center fs-5 small">Volunteer</p>
              </div>
              <div
                data-aos="zoom-in-up"
                data-aos-duration="3000"
                className="img1"
              >
                <div>
                  <img
                    className="img-fluid"
                    width={"150px"}
                    src={Img3}
                    alt="Rounded img"
                  />
                </div>
                <p className="fs-3 text-center">Ante Joseph</p>
                <p className="text-center fs-5 small"> Mentor</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="Join" className="home5 p-5">
        <div className="container p-3">
          <h1 className="text-center text-uppercase font-weight-bold h1">
            join us
          </h1>
          <div className="d-flex flex-column-reverse  flex-md-row gap-md-3 flex-lg-row gap-lg-5  align-content-center justify-content-center gap-2">
            <img
              className="img-fluid contact-img"
              src={contactimg}
              alt="contactimg"
            />
            <div className="border hr"></div>
            <div className="join">
              <div className="joinContent">
                <p className="text-center  text-bold">
                  <span className="text-primary"> Sign up </span>
                  or Login
                </p>
              </div>
              <form data-aos="zoom-in-up" data-aos-duration="1000">
                <div className="user-box">
                  <input type="text" name="" required />
                  <label htmlFor="Name">FullName</label>
                </div>
                <div className="user-box">
                  <input type="email" required />
                  <label htmlFor="Email">Email</label>
                </div>
                <div className="user-box">
                  <input type="text" required />
                  <label htmlFor="Address">Address</label>
                </div>
                <div className="phone gap-sm-2">
                  <div className="user-box">
                    <input type="tel" required />
                    <label htmlFor="Phone">Phone</label>
                  </div>
                  <div className="user-box">
                    <input type="text" required />
                    <label htmlFor="Destination">Destination</label>
                  </div>
                </div>
                <div className="condition">
                  <input type="checkbox" />{" "}
                  <small>
                    I, hereby agree to privacy policy, terms and conditions
                  </small>
                </div>
                <div className="btnContact">
                  <button>Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="home6  p-3">
        <div className="container p-3">
          <div className="footer mb-5">
            <div className="footerimg ">
              <img src={footerlogo} className="img-fluid" alt="footer-img" />
            </div>
            <div className="footerlist">
              <ul>
                <li className="fs-5">
                  <a href="/" className="text-uppercase">
                    Home
                  </a>
                </li>
                <li className="fs-5">
                  <a href="/" className="text-uppercase">
                    Aboutus
                  </a>
                </li>
                <li className="fs-5">
                  <a href="/" className="text-uppercase">
                    Services
                  </a>
                </li>
                <li className="fs-5">
                  <a href="/" className="text-uppercase">
                    Tasks
                  </a>
                </li>
                <li className="fs-5">
                  <a href="/" className="text-uppercase">
                    FAQs
                  </a>
                </li>
                <li className="fs-5">
                  <a href="/" className="text-uppercase">
                    Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border mb-5" />
          <div className="end text-center">
            <div className="socal">
              <MdOutlineForwardToInbox className="icon" />
              <MdOutlineLocationOn className="icon" />
              <BsTelephone className="icon" />
            </div>
            <p className="fs-4">
              Copyright@{new Date().getFullYear()}. All rights Reserved.
              equipAfrica.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
