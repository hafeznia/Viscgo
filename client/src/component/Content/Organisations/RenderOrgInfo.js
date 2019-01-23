import React from 'react';

const RenderOrgInfo = (props) => {
    
    const renderInfo = Object.entries(props.entries).map(([key, value]) => {
        return (
            <li>
                <span className="title">{key}</span>
                <span>
                    { value === "" && 
                            `—————`
                    } {value}
                </span>
            </li>
        )
    })
    
    return (
        <div>
            {renderInfo}
        </div>
    )
}

export default RenderOrgInfo;