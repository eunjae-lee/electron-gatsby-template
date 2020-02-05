import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className="text-2xl font-bold">Hi people</h1>
    <p className="text-lg">Welcome to your new Gatsby site.</p>
    <p className="text-base text-purple-800 font-bold">
      Now go build something great.
    </p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
