import React from 'react';
class Breadcrump extends React.Component {
    render() {
        return (
            <li>
                <a href="#">
                    {this.props}
                </a>
            </li>
        )
    }
}
export default Breadcrump;