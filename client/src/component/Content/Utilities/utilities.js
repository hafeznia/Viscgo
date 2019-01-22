import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';
import {PlusIcon, SearchIcon} from '../../Icons/Icon';
import paginationFactory from 'react-bootstrap-table2-paginator';
import '../../../sass/components/table.scss';

const { SearchBar } = Search;
const options = {
    paginationSize: 5,
    pageStartIndex: 1,
    prePageText: 'Previous',
    nextPageText: 'Next',
    showTotal: false,
    paginationTotalRenderer: false,
    hideSizePerPage: true,
    sizePerPageList: [{
        text: '5', value: 5
    }, {
        text: '10', value: 10
    }, {
        text: 'All', value: 20
    }]
};
  
export class Table extends React.Component {
    render() {
        return (
            <>
            <ToolkitProvider keyField='id' data={ this.props.data } columns={ this.props.columns }  search >
                  {
                    props => (
                    <>
                        <div className="table_box-top--search">
                            <SearchIcon color="#333333" className="table_box-top--search--icon" />
                            <SearchBar { ...props.searchProps } placeholder=" " />
                        </div>
                        <BootstrapTable
                        hover={true}
                        pagination={ paginationFactory(options) }
                        { ...props.baseProps }
                        />
                    </>
                    )
                }
            </ToolkitProvider>
            </>
        )
    }
}
export class Button extends React.Component {
    render() {
        return ( 
            <button className="btn table_box-top--btn" onClick={this.props.onClick}>
                {this.props.text}
                <PlusIcon color="#FFF" />
            </button>
        )
    }
}