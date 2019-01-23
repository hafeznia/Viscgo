import React from 'react';
import { Link } from 'react-router-dom';
import "../../../sass/components/dashboard.scss";
const Card = (props) => {
    return (
        <div className="col-2">
            <Link to={`/${props.title}`} className="Dashboard_card-link">
                <div className="Dashboard_card text-center">
                    <div className="Dashboard_card-number">{props.number}</div>
                    <div className="Dashboard_card-title">{props.title}</div>
                </div>
            </Link>
       </div>
    )
}
export default Card;