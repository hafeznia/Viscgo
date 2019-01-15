import React from "react";

class Icon extends React.Component {
  render() {
    const fill = {
      fill: `${this.props.color}`
    }
    return(
      <svg xmlns="http://www.w3.org/2000/svg" width={this.props.width} height={this.props.height} viewBox={`0 0 ${this.props.width} ${this.props.height}`}>
        <path style={fill} d={this.props.path} />
    </svg>
    );
  }
}

class LogOutIcon extends React.Component {
  render() {
    const fill = {
      fill: `${this.props.color}`
    }
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="18.844" height="18.781" viewBox="0 0 18.844 18.781">
        <g transform="translate(0 -0.85)">
            <g transform="translate(0 0.85)">
                <path style={fill} d="M9.39,18.066H2.348a.783.783,0,0,1-.783-.783V3.2a.783.783,0,0,1,.783-.783H9.39A.783.783,0,0,0,9.39.85H2.348A2.35,2.35,0,0,0,0,3.2V17.283a2.35,2.35,0,0,0,2.348,2.348H9.39a.783.783,0,0,0,0-1.565Z" transform="translate(0 -0.85)" />
            </g>
            <g transform="translate(6.26 4.763)">
                <path style={fill} d="M182.45,112.085l-4.758-4.7a.782.782,0,1,0-1.1,1.114l3.4,3.356h-9.111a.783.783,0,0,0,0,1.565h9.111l-3.4,3.355a.782.782,0,1,0,1.1,1.114l4.758-4.7a.782.782,0,0,0,0-1.114Z" transform="translate(   )" />
            </g>
        </g>
    </svg>
    );
  }
}
export {
  LogOutIcon,
  Icon
}