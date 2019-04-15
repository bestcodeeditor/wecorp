import MainApp from "../components/Main";

import Layout from "../components/Layout";

const Index = () => (
  <Layout>
    <div className="hero-image">
      <h1>We are a Marketing Agency</h1>
      <h3>A Creative and Growing Agency</h3>
      <style jsx>{`
        .hero-image {
          min-height: 400px;
          background: url(/static/banner.jpg);
          background-size: cover;
          position: relative;
        }
        .hero-image h1 {
          margin: 10 0 10px 0;
          padding-top: 5rem;
          color: black;
          text-align: center;
          font-size: 100px;
        }
        .hero-image h3 {
          padding-top: 1rem;
          color: black;
          text-align: center;
          font-size: 40px;
        }
      `}</style>
    </div>
    <MainApp />
  </Layout>
);

export default Index;
