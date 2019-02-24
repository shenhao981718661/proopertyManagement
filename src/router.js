import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Main from './common/index/index';
import Personnel from './components/personnel/personnel.js'

function RouterConfig({ history }) {
  return (
    <div>
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/index"  render={()=>
          <Main>
            <Switch>
              <Route path='/index/personnel' component={Personnel}/>
            </Switch>
          </Main>
        }>
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default RouterConfig;
