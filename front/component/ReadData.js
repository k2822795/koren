import React, { Component } from 'react';

class ReadData extends Component {
    static defaultProps = {
        data: {
            name: 'name',
            hospital: 'hospital',
            data: 'data',
        }
    }

    render() {
        const style = {
            border: '1px solid black',
            padding: '8px',
            margin: '8px'
        }

        const {
            name, hospital, data
        } = this.props.data;

        return (
          <div style={style}>
            <div><b>{name}</b></div>
            <div><b>{hospital}</b></div>
            <div><b>{data}</b></div>
          </div>
        );
    }
}

export default ReadData;