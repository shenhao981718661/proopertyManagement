import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Main from './common/index/index';
import Personnel from './components/personnel/personnel.js'
import Equipment from './components/equipment/equipment.js'
import Security from './components/security/security.js'
import Owner from './components/owner/owner.js'
import Housing from './components/housing/housing.js'
import Complaint from './components/complaint/complaint.js'
import Repair from './components/repair/repair.js'
import Report from './components/report/report.js'
import Pay from './components/pay/pay.js'
import Car from './components/car/car.js'
import Message from './components/message/message.js'

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
              <Route path='/index/equipment' component={Equipment}/>
              <Route path='/index/Security' component={Security}/>
              <Route path='/index/Owner' component={Owner}/>
              <Route path='/index/housing' component={Housing}/>
              <Route path='/index/complaint' component={Complaint}/>
              <Route path='/index/repair' component={Repair}/>
              <Route path='/index/report' component={Report}/>
              <Route path='/index/pay' component={Pay}/>
              <Route path='/index/car' component={Car}/>
              <Route path='/index/message' component={Message}/>
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
