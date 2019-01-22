import React from 'react';
import data from '../../../api/db.json';

const OrganisationShow = (props) => {
        const { id } = props.match.params;
        const orgData =  data.Organisations.find(x => x.id === id);
        return (
            <div>
                {orgData.Name}
                <br />
                {orgData.Location}
            </div>
        )
}
export default OrganisationShow;