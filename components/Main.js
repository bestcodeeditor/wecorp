import { MDBBtn } from "mdbreact";
import Link from "next/link";

const MainApp = ({ children }) => (
  <>
    {/*Main container*/}
    <main class="mt-5">
      <div className="container">
        {/*Grid row*/}
        <div className="row">
          {/*Grid column*/}
          <div className="col-md-7  mb-4">
            <div class="view overlay z-depth-1-half">
              <img src="../static/main1.jpg" class="card-img-top" alt="" />
              <div class="mask rgba-white-light" />
            </div>
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-md-5 mb-4 digital">
            <h2>Digital Marketing</h2>
            <hr />
            <p>
              We focus on marketing outcomes and growth. Our specialties are B2B
              lead generation, inbound marketing, content, conversion strategy,
              and sales opportunity nurturing. We provide strategy and execution
              for companies that need their investment in marketing to drive
              business growth.
            </p>

            <a href="./digital" class="btn btn-indigo">
              View More
            </a>

            <style jsx>
              {`
                .digital h2 {
                  font-size: 30px;
                  font-family: 'Open Sans', sans-serif;
                }

                .digital p {
                  color:black;
                  font-size:18px;
                  text-color:grey;
                  padding:bottom:10px;
                  font-family: 'Open Sans', sans-serif;
                }
              `}
            </style>
          </div>
          {/*Grid column*/}
        </div>
        {/*Grid row*/}
        {/*Grid row*/}
        <div className="row">
          {/*Grid column*/}
          <div className="col-lg-4 col-md-12 mb-4">
            {/*Card*/}
            <div className="card">
              {/*Card image*/}
              <div className="view overlay">
                <img src="../static/main2.jpg" className="card-img-top" alt />
                <a href="#">
                  <div className="mask rgba-white-slight" />
                </a>
              </div>
              {/*Card content*/}
              <div className="card-body">
                {/*Title*/}
                <h4 className="card-title">Content Marketing</h4>
                {/*Text*/}
                <p className="card-text">
                  Content marketing is all about using content to attract and
                  retain visitors.
                </p>
                <a href="./digital" className="btn btn-indigo">
                  View More
                </a>
              </div>
              <style jsx>
                {`
                  .card-body p {
                    font-family: "Caveat", cursive;
                    font-size: 1.5rem;
                  }
                `}
              </style>
            </div>
            {/*/.Card*/}
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-4 col-md-6">
            {/*Card*/}
            <div className="card">
              {/*Card image*/}
              <div className="view overlay">
                <img
                  src="../static/main3.jpg"
                  className="card-img-top"
                  alt=""
                />
                <a href="#">
                  <div className="mask rgba-white-slight" />
                </a>
              </div>
              {/*Card content*/}
              <div className="card-body">
                {/*Title*/}
                <h4 className="card-title">SEO</h4>
                {/*Text*/}
                <p className="card-text">
                  SEO is the scalable way to be in the right place at the right
                  time
                </p>
                <a href="./digital" className="btn btn-indigo">
                  View More
                </a>
              </div>
              <style jsx>
                {`
                  .card-body p {
                    font-family: "Caveat", cursive;
                    font-size: 1.5rem;
                  }
                `}
              </style>
            </div>
            {/*/.Card*/}
          </div>
          {/*Grid column*/}
          {/*Grid column*/}
          <div className="col-lg-4 col-md-6">
            {/*Card*/}
            <div className="card">
              {/*Card image*/}
              <div className="view overlay">
                <img src="../static/main4.jpg" className="card-img-top" alt />
                <a href="#">
                  <div className="mask rgba-white-slight" />
                </a>
              </div>
              {/*Card content*/}
              <div className="card-body">
                {/*Title*/}
                <h4 className="card-title">Business Strategy</h4>
                {/*Text*/}
                <p className="card-text">
                  The first step in development of any business strategy is the
                  determination of the goal.
                </p>
                <a href="./digital" className="btn btn-indigo">
                  View More
                </a>
              </div>
              <style jsx>
                {`
                  .card-body p {
                    font-family: "Caveat", cursive;
                    font-size: 1.5rem;
                  }
                `}
              </style>
            </div>
            {/*/.Card*/}
          </div>
          {/*Grid column*/}
        </div>
        {/*Grid row*/}
      </div>
      {/*Main container*/}
    </main>
  </>
);

export default MainApp;
