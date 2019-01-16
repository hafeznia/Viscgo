import React from 'react';
import Header from '../component/Header/Header';
import Menu from '../component/Menu/Menu';
import Content from '../component/Content/Content';
import { Row } from 'reactstrap';

const App = () => {
    return (
        <div className="App">
            <Header />
            <div className="main">
                <Menu />
                <Content />
            </div>
        </div>
    )
}

export default App;