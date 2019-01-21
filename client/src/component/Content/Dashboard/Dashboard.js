import React from 'react';
import Title from '../Title';
import Breadcrumb from '../Breadcrump';
import Card from './Card';
import data from '../../../api/db.json';

const Dashboard = () => {
    const renderCard = data.Dashboard.map(cur => {
        return <Card number={cur.number} title={cur.title} />
    });
    return (
        <div>
            <Title title="Dashboard" />
            <Breadcrumb />
            
            <div className="row">
                {renderCard}
            </div>
        </div>
    )
}
export default Dashboard;

