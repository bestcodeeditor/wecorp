const FooterApp = () => (
  <>
    <footer class="page-footer font-small black pt-4 mt-4">
      {/* Footer Links */}
      <div className="container text-center text-md-left">
        {/* Grid row */}
        <div className="row">
          {/* Grid column */}
          <div className="col-md-6 mt-md-0 mt-3">
            {/* Content */}
            <h5 className="text-uppercase">Wecorporate</h5>
            <p>
              Wecorporate is a leading global service provider in Digital
              Marketing(DM), Content Writing & Marketing(CM), SEO,Bisness
              Strategy planning(BSP) and Management Consulting(MC).
            </p>
          </div>
          {/* Grid column */}
          <hr className="clearfix w-100 d-md-none pb-3" />
          {/* Grid column */}
          <div className="col-md-3 mb-md-0 mb-3">
            {/* Links */}
            <h5 className="text-uppercase">Services</h5>
            <ul className="list-unstyled">
              <li>
                <a href="./digital">DM</a>
              </li>
              <li>
                <a href="./digital">CM</a>
              </li>
              <li>
                <a href="./digital">SEO</a>
              </li>
              <li>
                <a href="./digital">BSP</a>
              </li>
            </ul>
          </div>
          {/* Grid column */}
          {/* Grid column */}
          <div className="col-md-3 mb-md-0 mb-3">
            {/* Links */}
            <h5 className="text-uppercase">About Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="./contact">SiteMap</a>
              </li>
              <li>
                <a href="./contact">Contact Us</a>
              </li>
              <li>
                <a href="#!">Terms & Condition</a>
              </li>
            </ul>
          </div>
          {/* Grid column */}
        </div>
        {/* Grid row */}
      </div>
      {/* Footer Links */}
      {/* Copyright */}
      <div className="footer-copyright text-center py-3">
        © 2018 Copyright:
        <a href="./"> Wecorporate</a>
      </div>
      {/* Copyright */}
    </footer>
    {/* Footer */}
  </>
);

export default FooterApp;
