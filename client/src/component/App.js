import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Col } from 'reactstrap';
import Header from '../component/Header/Header';
import Menu from '../component/Menu/Menu';
import history from './history';
import Dashboard from './Content/Dashboard/Dashboard';
import Organisations from './Content/Organisations/Organisations';
import OrganisationShow from './Content/Organisations/OrganisationShow';
import Staff from './Content/Staff/Staff';
import Patients from './Content/Patients/Patients';
import Settings from './Content/Settings/Settings';

const App = () => {
    return (
        <div className="App">
            <Router history={history}>
                <div>
                    <Header />
                    <div className="main">
                        <Menu />
                        <Col xs="10" className="content">
                            <Switch>
                                <Route path="/Dashboard" exact component={Dashboard}></Route>
                                <Route path="/Organisations" exact component={Organisations}></Route>
                                <Route path="/Staff" exact component={Staff}></Route>
                                <Route path="/Patient" exact component={Patients}></Route>
                                <Route path="/Settings" exact component={Settings}></Route>
                                <Route path="/Organisation/:id" exact component={OrganisationShow}></Route>
                            </Switch>
                        </Col>
                    </div>
                </div>
            </Router>
        </div>
    )
}

export default App;