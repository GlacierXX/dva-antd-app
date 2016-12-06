import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import Layout from '../components/Layout';

function IndexPage() {
  return (
    <Layout>
      <section>Hello Bee!</section>
    </Layout>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
