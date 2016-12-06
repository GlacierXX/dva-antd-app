import React, { PropTypes } from 'react';
import { Router, Route } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Stories from './routes/Stories';

export default function({ history }) {
  return (
    <Router history={ history }>
      <Route path="/stories" component={ Stories }/>
      <Route path="/" component={ IndexPage }/>
    </Router>
  )
};
