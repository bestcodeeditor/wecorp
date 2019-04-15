import React, { Component } from "react";
import axios from "axios";
import Layout from "../components/Layout";

class ContactApp extends Component {
  state = {
    venues: []
  };
  componentDidMount() {
    this.getVanues();
    this.renderMap();
  }
  renderMap = () => {
    loadScript(
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyALMDs0E9wJ4aSjQ-f37YpUH_rRDFs5NDM&callback=initMap"
    );
    window.initMap = this.initMap;
  };

  getVanues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?";
    const parameters = {
      client_id: "3O5CC3YN3RE32UASLWC2NAEF5MT4MSOAP3J5LC0BPKUZJTUE",
      client_secret: "XOGXLDKGWMG1E5MYMDWHA3QJ10CSK3ZGZCT1VWEKGTP5F302",
      query: "coffee",
      near: "janakpuri,delhi",
      v: "20182507"
    };

    axios
      .get(endPoint + new URLSearchParams(parameters))
      .then(response => {
        this.setState({
          venues: response.data.response.group[0].itmes
        });
        console.log(response);
      })
      .catch(error => {
        console.log("Error!!" + error);
      });
  };

  initMap = () => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 28.626551, lng: 77.09243 },
      zoom: 8
    });
    var marker = new window.google.maps.Marker({
      position: { lat: 28.626551, lng: 77.09243 },
      map: map,
      title: "We are here"
    });
  };
  render() {
    return (
      <Layout>
        <div>
          >
          <section id="contact">
            {/* Heading */}
            <hr />
            {/*Grid row*/}
            <div className="row">
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-4 col-md-12">
                <h2 className="mb-5 font-weight-bold text-center">
                  Contact us
                </h2>
                {/* Form contact */}
                <form
                  className="p-5 grey-text"
                  action="https://formspree.io/bestcodeeditor@gmail.com"
                  method="POST"
                >
                  <div className="md-form form-sm">
                    {" "}
                    <i className="fas fa-user prefix" />
                    <input
                      type="text"
                      id="form3"
                      placeholder="Your Name"
                      className="form-control form-control-sm"
                    />
                    {/* <label htmlFor="form3">Your name</label> */}
                  </div>
                  <div className="md-form form-sm">
                    {" "}
                    <i className="fas fa-envelope prefix" />
                    <input
                      type="text"
                      id="form2"
                      placeholder="Your Email"
                      className="form-control form-control-sm"
                    />
                    {/* <label htmlFor="form2">Your email</label> */}
                  </div>
                  <div className="md-form form-sm">
                    {" "}
                    <i className="fas fa-tag prefix" />
                    <input
                      type="text"
                      id="form32"
                      placeholder="Subject"
                      className="form-control form-control-sm"
                    />
                    {/* <label htmlFor="form34">Subject</label> */}
                  </div>
                  <div className="md-form form-sm">
                    {" "}
                    <i className="fas fa-pencil-alt prefix" />
                    <textarea
                      type="text"
                      id="form8"
                      className="md-textarea form-control form-control-sm"
                      rows={4}
                      defaultValue={""}
                    />
                    <label htmlFor="form8">Your message</label>
                  </div>
                  <div className="text-center mt-4">
                    <button className="btn btn-primary" value="Send">
                      Send <i className="far fa-paper-planeml-1" />
                    </button>
                  </div>
                </form>
                {/* Form contact */}
              </div>

              <div className="col-lg-8 col-md-12">
                <main>
                  <div id="map" />
                </main>
                <style jsx>
                  {`
                    #map {
                      height: 100vh;
                    }

                    body {
                      height: 100%;
                      margin: 0;
                      padding: 0;
                    }
                  `}
                </style>
              </div>
            </div>
            {/*Grid row*/}
          </section>
          {/*Section: Contact-- >
           */}
        </div>
      </Layout>
    );
  }
}

function loadScript(url) {
  var index = window.document.getElementsByTagName("script")[0];
  var script = window.document.createElement("script");
  script.src = url;
  script.async = true;
  script.defer = true;
  index.parentNode.insertBefore(script, index);
}

<script src="" async defer />;

export default ContactApp;
