import React from 'react';
import { Link } from 'react-router-dom';
import "../../sass/components/header.scss";
import logo from '../../Images/logo_splash.png';
import {Icon, LogOutIcon} from "../Icons/Icon";
import {ICONS} from "../Icons/ICONS";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu } from 'reactstrap';
 
class Header extends React.Component {
    state = {
        date: "",
        isOpen: false    
    };
    componentDidMount() {
        this.renderDate();
    }
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    // Show date
    renderDate = () => {
        const date = new Date();
        const month = date.toLocaleString('en-us', { month: 'long' });
        const year = date.getFullYear();
        const day = date.getDay();
        this.setState({
          date: `${ month + ' ' + day + ', ' + year }`
        });
    }
    render() {
        return (
            <header className="header">
                <div className="header_container">
                    <Navbar expand="md">
                        <Link to="/" className="navbar-brand">
                            <img src={logo} alt={"logo"} />
                        </Link>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <div className="header_date">{this.state.date}</div>
                                </NavItem>
                                <NavItem>
                                    <div className="header_info-icon">
                                        <Icon path={ICONS.USER} width="35" height="35" color="#FFF" />
                                    </div>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret className="header_dropdownToggle">
                                        <div className="header_info">
                                            <span className="header_info-admin">ADMIN</span>
                                            <br />
                                            <span className="header_info-name">Mike Smith</span>
                                        </div>
                                    </DropdownToggle>
                                    <DropdownMenu left className="header_dropdownMenu">
                                        <a href="#">
                                            Edit Profile
                                        </a>
                                        <a href="#" className="header_dropdownMenu-logout">
                                            Logout
                                            <LogOutIcon color="#0799D4" />
                                        </a>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </div>
            </header>
        )
    }

}

export default Header;