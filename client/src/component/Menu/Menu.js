import React from 'react';
import { Col } from 'reactstrap';
import {DashboardIcon, 
        OrganisationIcon,
        StaffIcon,
        PatientIcon,
        SettingIcon

    } from "../Icons/Icon";
import '../../sass/components/aside.scss';

class Menu extends React.Component {
    render() {
        return (
            <Col xs="2" className="sidebar">
                <div className="sidebar_content">
                    <ul className="nav">
                        <li className="nav-item">
                            <a href="#">
                                <DashboardIcon color="#FFF" />
                                Dashboard
                            </a>
                        </li>
                        <li className="nav-item">
                            
                            <a href="#">
                                <OrganisationIcon color="#FFF" />
                                Organisation
                            </a>
                        </li>
                        <li className="nav-item">
                            
                            <a href="#">
                                <StaffIcon color="#FFF" />
                                staff
                            </a>
                        </li>
                        <li className="nav-item">
                            
                            <a href="#">
                                <PatientIcon color="#FFF" />
                                Patients
                            </a>
                        </li>
                        <li className="nav-item">
                            
                            <a href="#">
                                <SettingIcon color="#FFF" />
                                Settings
                            </a>
                        </li>
                    </ul>
                </div>
            </Col>
        );
    }
}
export default Menu;