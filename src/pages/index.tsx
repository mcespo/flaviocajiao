import React from "react";

import Layout from "../components/layout";
// import Image from "../components/image";
import SEO from "../components/seo";
import Services from "./services";
import About from "./about";
import Location from "./location";

const IndexPage = () => (
  <Layout>
    <SEO lang="en" title="Home" />
    <Services />
    <About />
    <Location />
  </Layout>
);

export default IndexPage;
