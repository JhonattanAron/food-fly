import React from "react";
import FeaturesHome from "../../components/Home/FeaturesHome";
import HeaderHome from "../../components/Home/HeaderHome";
import Layout from "../../hocs/layouts/layout";

function Home() {
  return (
    <Layout>
      <div className="mt-20">
        <HeaderHome />
        <FeaturesHome />
      </div>
    </Layout>
  );
}

export default Home;
