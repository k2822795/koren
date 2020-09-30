import React, { Component } from 'react';
import ReadData from './ReadData';

class Read extends Component {
    static defaultProps = {
        blockdata: []
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.data !== this.props.data;
    }

    render() {
        const { blockdata } = this.props;
        const list = blockdata.map(
            data => (<ReadData data={data}/>)
        );

        return (
            <div>
                {list}
            </div>
        )
    }

}

export default Read;