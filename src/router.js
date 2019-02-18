import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Main from './components/index/index';

function RouterConfig({ history }) {
  return (
    <div style={{height:'100%'}}>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/index" exact component={Main} />
      </Switch>
    </Router>
    </div>
  );
}

export default RouterConfig;
