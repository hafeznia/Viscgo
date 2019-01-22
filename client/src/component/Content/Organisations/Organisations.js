import React from 'react';
import { Link } from 'react-router-dom';
import Title from '../Title';
import Breadcrumbs from '../Breadcrump';
import { Table, Button } from '../Utilities/utilities';
import data from '../../../api/db.json';

function nameLink(cell, row) {
  if (!row.Name == "") {
    return (
        <Link to={`/Organisation/${row.id}`} >{ row.Name }</Link>
    );
  }
}
function viewLink(cell, row) {
  if (!row.Name == "") {
    return (
        <Link to={`/Organisation/${row.id}`} className="btn table_box-top--btn btn-block">{ cell }</Link>
    );
  }
}

const columns = [{
    dataField: 'Date',
    text: 'Date Registered',
    sort: true
  }, {
    dataField: 'OrgName',
    text: 'Organisation Name',
    sort: true,
    formatter: nameLink
  }, {
    dataField: 'Telephone',
    text: 'Telephone',
    sort: true
  }, {
    dataField: 'Location',
    text: 'Town/City',
    sort: true

  }, {
    dataField: 'Status',
    text: 'Status',
    sort: true

  }, {
    dataField: 'View',
    text: '',
    formatter: viewLink

  }];

const Organisation = () => {
  return (
      <>
          <Title title="Organisations" />
          <Breadcrumbs />
          <div className="table">
            <div className="table_box">
                <div className="table_box-top">
                  <div className="row">
                    <div className="col-6">
                      <Button text="Add Organisation" onClick="" />
                    </div>
                    <div className="col-6">
                      
                    </div>
                  </div>
                </div>
                <Table data={data.Organisations} columns={ columns } />
            </div>
          </div>
      </>
  );
}
export default Organisation;