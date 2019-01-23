import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col } from 'reactstrap';
import '../../sass/components/aside.scss';
import {DashboardIcon, 
        OrganisationIcon,
        StaffIcon,
        PatientIcon,
        SettingIcon } from "../Icons/Icon";

class Menu extends React.Component {
    render() {
        // var isActive = this.context.router.route.location.pathname === this.props.to;
        // var className = isActive ? 'active' : '';
        return (
            <Col xs="2" style={{ padding: 0 }}>
                <div className="sidebar">
                    <div className="sidebar_content">
                    <ul className="nav">
                        <li className="nav-item">
                            <NavLink to="/Dashboard" exact={true}>
                                <DashboardIcon color="#FFF" />
                                Dashboard
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Organisations" activeClassName="active">
                                <OrganisationIcon color="#FFF" />
                                Organisation
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Staff" activeClassName="active">
                                <StaffIcon color="#FFF" />
                                staff
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Patient" activeClassName="active">
                                <PatientIcon color="#FFF" />
                                Patients
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Settings" activeClassName="active">
                                <SettingIcon color="#FFF" />
                                Settings
                            </NavLink>
                        </li>
                    </ul>
                </div>
                </div>
            </Col>
        );
    }
}
export default Menu;