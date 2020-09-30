import React, { Component } from 'react';

class WriteForm extends Component {
    state = {
        name: '',
        hospital: '',
        data: '',
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state);
        this.setState({
            name: '',
            hospital: '',
            data: '',
        })
    }
    render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <input
              placeholder="이름"
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
            />
            <input
              placeholder="병원"
              value={this.state.hospital}
              onChange={this.handleChange}
              name="hospital"
            />
            <input
              placeholder="데이터"
              value={this.state.data}
              onChange={this.handleChange}
              name="data"
            />
            <button type="submit">등록</button>
          </form>
        );
    }

}

export default WriteForm;