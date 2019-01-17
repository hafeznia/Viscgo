import React from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';
import '../../sass/components/aside.scss';
import {DashboardIcon, 
        OrganisationIcon,
        StaffIcon,
        PatientIcon,
        SettingIcon } from "../Icons/Icon";

class Menu extends React.Component {
    render() {
        return (
            <Col xs="2" className="sidebar">
                <div className="sidebar_content">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to="/Dashboard">
                                <DashboardIcon color="#FFF" />
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Organisations">
                                <OrganisationIcon color="#FFF" />
                                Organisation
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Staff">
                                <StaffIcon color="#FFF" />
                                staff
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Patients">
                                <PatientIcon color="#FFF" />
                                Patients
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Settings">
                                <SettingIcon color="#FFF" />
                                Settings
                            </Link>
                        </li>
                    </ul>
                </div>
            </Col>
        );
    }
}
export default Menu;