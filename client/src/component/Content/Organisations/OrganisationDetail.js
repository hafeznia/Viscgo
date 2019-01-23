import React from 'react';
import RenderOrgInfo from './RenderOrgInfo';

const OrganisationDetail = (props) => {

    const data = props.orgData;

    return (
        <div className="col-4">
            <div className="Dashboard_card Dashboard_card-org">
                <div className="row">
                    <div className="col-6">
                        <img className="Dashboard_card-org--img" src={data.image} alt={data.Name} />
                    </div>
                    <div className="col-6" style={{ padding: 0 }}>
                       <div className="Dashboard_card-org--name">
                            <span className="Dashboard_card-org--name-h">Organistion Name</span>
                            <span className="Dashboard_card-org--name-n">{data.Name}</span>
                       </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ul className="Dashboard_card-org--info">
                            <RenderOrgInfo entries={data.Detail[0]} />
                        </ul>
                    </div>
                </div>
            </div>
            <div className="Dashboard_card Dashboard_card-org">
                <div className="Dashboard_card-org--name">
                    <span className="Dashboard_card-org--name-h">Admin for Organistion</span>
                </div>
                <ul className="Dashboard_card-org--info" style={{ marginTop: 0 }}>
                    <RenderOrgInfo entries={data.Admin[0]} />
                </ul>
            </div>
        </div>
    )
}
export default OrganisationDetail;