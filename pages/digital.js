import React from "react";
import { MDBBtn } from "mdbreact";
import Link from "next/link";
import Layout from "../components/Layout";

export default function digital() {
  return (
    <Layout>
      <header>
        {/*Mask*/}
        <div id="intro" className="view">
          <div className="mask rgba-black-strong">
            <div className="container-fluid d-flex align-items-center justify-content-center h-100">
              <div className="row d-flex justify-content-center text-center">
                <div className="col-md-10">
                  {/* Heading */}
                  <h2 className="display-4 font-weight-bold white-text pt-5 mb-2">
                    Services
                  </h2>
                  {/* Divider */}
                  <hr className="hr-light" />
                  {/* Description */}
                  <h4 className="white-text my-4">
                    Wecorporate is the leading Marketing Services Provider and
                    Shared Service Centre serving clients across the world.
                  </h4>
                  <Link prefetch href="./contact">
                    <button type="button" className="btn btn-outline-white">
                      Visit us
                      <i className="fas fa-building ml-3" />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <style jsx>
            {`
              #intro {
                min-height: 600px;
                background: url(/static/banner1.jpg);
                background-size: cover;
                position: relative;
              }

              #intro h2 {
              }
            `}
          </style>
        </div>
        {/*/.Mask*/}
      </header>

      {/*Main layout*/}
      <main className="mt-5">
        <div className="container">
          {/*Section: Best Features*/}
          <section id="best-features" className="text-center">
            {/* Heading */}
            <h2 className="mb-5 font-weight-bold">
              We provide Customer Satisfied Service
            </h2>
            {/*Grid row*/}
            <div className="row d-flex justify-content-center mb-4">
              {/*Grid column*/}
              <div className="col-md-8">
                {/* Description */}
                <p className="white-text orange">
                  We sell Creatively & Build Effective relation to our clients
                  We believe in the strength of human assets to develop
                  expertise empolyees.
                </p>
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
            {/*Grid row*/}
            <div className="row">
              {/*Grid column*/}
              <div className="col-md-4 mb-5">
                <i className="fab fa-angellist fa-4x orange-text" />
                <h4 className="my-4 font-weight-bold">Technology</h4>
                <p className="grey-text">
                  Using the greatest technology and minds to stay two steps
                  ahead of the next big campaign idea
                </p>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-md-4 mb-1">
                <i className="fas fa-running fa-4x orange-text" />
                <h4 className="my-4 font-weight-bold">Passion</h4>
                <p className="grey-text">
                  Passion beyond ourselves, our shortcomings and failures,
                  putting us firmly in sight of the future we always imagined
                  for the world.
                </p>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-md-4 mb-1">
                <i className="fab fa-creative-commons-by fa-4x orange-text" />
                <h4 className="my-4 font-weight-bold">Creativity</h4>
                <p className="grey-text">
                  Placing creativity above all other processes, allowing us to
                  reserve distinctive treatment for the best ideas and reasons.
                </p>
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
          </section>
          {/*Section: Best Features*/}

          <hr className="my-5" />

          {/*Section: Examples*/}
          <section id="examples" className="text-center">
            {/*Grid row*/}
            <div className="row">
              {/*Grid column*/}
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="view overlay z-depth-1-half">
                  <img src="../static/services1.jpg" className="img-fluid" />
                  <a href="#!">
                    <div className="mask rgba-white-slight" />
                  </a>
                </div>
                <h4 className="my-4 font-weight-bold">Online Marketing</h4>
                <p className="grey-text">
                  Online marketing has taken the internet by storm. No longer do
                  businesses have to rely on traditional marketing get their
                  products/services seen by their target audience
                </p>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="view overlay z-depth-1-half">
                  <img src="../static/services2.jpg" className="img-fluid" />
                  <a href="#!">
                    <div className="mask rgba-white-slight" />
                  </a>
                </div>
                <h4 className="my-4 font-weight-bold">SEO</h4>
                <p className="grey-text">
                  One of the best things about the internet is instant access to
                  just about any information you need. This is especially true
                  when researching search engine optimization (SEO).
                </p>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="view overlay z-depth-1-half">
                  <img src="../static/services3.jpg" className="img-fluid" />
                  <a href="#!">
                    <div className="mask rgba-white-slight" />
                  </a>
                </div>
                <h4 className="my-4 font-weight-bold">
                  Social Media Marketing
                </h4>
                <p className="grey-text">
                  Word-of-mouth marketing isn’t about giving customers talking
                  points, as if they were brand spokespeople. It’s about
                  delivering an exceptional customer experience that makes
                  customers want to recommend you.” – Deborah Eastman
                </p>
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
            {/*Grid row*/}
            <div className="row">
              {/*Grid column*/}
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="view overlay z-depth-1-half">
                  <img src="../static/services4.jpg" className="img-fluid" />
                  <a href="#!">
                    <div className="mask rgba-white-slight" />
                  </a>
                </div>
                <h4 className="my-4 font-weight-bold">Content Writing</h4>
                <p className="grey-text">
                  A great headline mixed with a lame opening is like inviting
                  someone into your house, only to slam the door in their face
                  as they approach.
                </p>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="view overlay z-depth-1-half">
                  <img src="../static/services5.jpg" className="img-fluid" />
                  <a href="#!">
                    <div className="mask rgba-white-slight" />
                  </a>
                </div>
                <h4 className="my-4 font-weight-bold">Business Development</h4>
                <p className="grey-text">
                  Happy employees lead to happy customers, which leads to more
                  profits.
                </p>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-4 col-md-6 mb-4">
                <div className="view overlay z-depth-1-half">
                  <img src="../static/services6.jpg" className="img-fluid" />
                  <a href="#!">
                    <div className="mask rgba-white-slight" />
                  </a>
                </div>
                <h4 className="my-4 font-weight-bold">Mangement Services</h4>
                <p className="grey-text">
                  Excellent management strategy is the key of success in any
                  company!
                </p>
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
          </section>
          {/*Section: Examples*/}

          <hr className="my-5" />

          {/*Section: Gallery*/}
          <section id="gallery">
            {/* Heading */}
            <h2 className="mb-5 font-weight-bold text-center">
              Gallery heading
            </h2>
            {/*Grid row*/}
            <div className="row">
              {/*Grid column*/}
              <div className="col-md-6 mb-4">
                {/*Carousel Wrapper*/}
                <div
                  id="carousel-example-1z"
                  className="carousel slide carousel-fade"
                  data-ride="carousel"
                >
                  {/*Indicators*/}
                  <ol className="carousel-indicators">
                    <li
                      data-target="#carousel-example-1z"
                      data-slide-to={0}
                      className="active"
                    />
                    <li data-target="#carousel-example-1z" data-slide-to={1} />
                    <li data-target="#carousel-example-1z" data-slide-to={2} />
                  </ol>
                  {/*/.Indicators*/}
                  {/*Slides*/}
                  <div className="carousel-inner" role="listbox">
                    {/*First slide*/}
                    <div className="carousel-item active">
                      <img
                        className="d-block w-100"
                        src="../static/services1.jpg"
                        alt="First slide"
                      />
                    </div>
                    {/*/First slide*/}
                    {/*Second slide*/}
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src="../static/services2.jpg"
                        alt="Second slide"
                      />
                    </div>
                    {/*/Second slide*/}
                    {/*Third slide*/}
                    <div className="carousel-item">
                      <img
                        className="d-block w-100"
                        src="../static/services3.jpg"
                        alt="Third slide"
                      />
                    </div>
                    {/*/Third slide*/}
                  </div>
                  {/*/.Slides*/}
                  {/*Controls*/}
                  <a
                    className="carousel-control-prev"
                    href="#carousel-example-1z"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carousel-example-1z"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                  </a>
                  {/*/.Controls*/}
                </div>
                {/*/.Carousel Wrapper*/}
              </div>
              {/*Grid column*/}

              <div className="col-md-6">
                {/*Excerpt*/}
                <a href className="teal-text">
                  <h6 className="pb-1">
                    <i className="fas fa-user-ninja" />
                    <strong> Review </strong>
                  </h6>
                </a>
                <h4 className="mb-3">
                  <strong>Customer's Opinion</strong>
                </h4>
                <p>
                  We have benifited in our business after we have taken Digital
                  marketing service from wecorporate, our business has grown up
                  6times. Customers starts knowing us as a service provider
                  throough digital marketing.
                </p>
                <p>
                  We have also benified from social media marketing done by we
                  corporate.Our organization got branded in social media
                  platform also.
                </p>
                <p>
                  by{" "}
                  <a>
                    <strong>Simoy Yahya, Founder of CrazyFoodGate</strong>
                  </a>
                  , 18/01/2019
                </p>
                <Link href="./">
                  <a className="btn btn-primary btn-md"> Back</a>
                </Link>
              </div>
            </div>
            {/*Grid row*/}
          </section>
          {/*Section: Gallery*/}

          <hr className="my-5" />

          <section id="contact" />
        </div>
      </main>
      {/*Main layout*/}
    </Layout>
  );
}
