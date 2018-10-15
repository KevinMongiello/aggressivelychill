import React from 'react'

import Layout from '../components/layout'
import BackgroundSlideshow from "../components/tile-image-slider";

const IndexPage = () => (
  <Layout>
    <BackgroundSlideshow />
    <div className="overlay cover-title">
      Coming Soon!
    </div>
  </Layout>
)

export default IndexPage;
