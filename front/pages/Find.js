import React, { Component } from 'react';
import ReadData from '../component/ReadData';

class Read extends Component {
    static defaultProps = {
        blockdata: []
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