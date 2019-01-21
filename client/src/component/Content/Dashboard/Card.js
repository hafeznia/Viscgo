import React from 'react';
import "../../../sass/components/dashboard.scss";
const Card = (props) => {
    return (
        <div className="col-2">
            <div className="Dashboard_card text-center">
                <div className="Dashboard_card-number">{props.number}</div>
                <div className="Dashboard_card-title">{props.title}</div>
            </div>
       </div>
    )
}
export default Card;