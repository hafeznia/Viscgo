import React from 'react';
import Title from '../Title';
import Card from '../Dashboard/Card';
import OrganisationDetail from './OrganisationDetail';
import data from '../../../api/db.json';

const OrganisationShow = (props) => {

        const { id } = props.match.params;
        const orgData =  data.Organisations.find(x => x.id === id);

        const renderCard = data.OrganisationsCard.map(cur => {
            return <Card number={cur.number} title={cur.title} />
        });
        return (
            <>
                <Title title={orgData.Name} />
                <div className="border-top-P">
                    <div className="row">
                        <OrganisationDetail orgData={orgData} />
                        {renderCard}
                    </div>
                </div>
            </>
        )
}
export default OrganisationShow;