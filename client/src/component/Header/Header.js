import React from 'react';
import "../../sass/components/header.scss";
import {Icon, LogOutIcon} from "../Icons/Icon";
import {ICONS} from "../Icons/ICONS";
import logo from '../../Images/logo_splash.png';

import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
 
class Header extends React.Component {
    state = {
        date: "",
        isOpen: false    
    };
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
      }
    componentDidMount() {
        this.renderDate();
    }
    renderDate = () => {
        const date = new Date();
        const month = date.toLocaleString('en-us', { month: 'long' });
        const year = date.getFullYear();
        const day = date.getDay();
        this.setState({
          date: `${ month + ' ' + day + ', ' + year }`
        });
    }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }

    render() {
        return (
            <header className="header">
                <Container>
                    <Navbar expand="md">
                        <NavbarBrand href="/">
                            <img src={logo} alt={"logo"} />
                        </NavbarBrand>
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
                                    <DropdownMenu left>
                                        <DropdownItem>
                                            Edit Profile
                                        </DropdownItem>
                                        <DropdownItem>
                                            Logout
                                            <LogOutIcon color="red" />
                                        </DropdownItem>
                                        <DropdownItem divider />
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                            </Nav>
                        </Collapse>
                    </Navbar>
                </Container>
            </header>
        )
    }

}

export default Header;