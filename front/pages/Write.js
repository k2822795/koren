import React, { Component } from "react";
import WriteFrom from "../component/WriteForm";
import Read from "../component/Read";

class Write extends Component {
  state = {
    blockdata: [
      {
        name: "kkm",
        hospital: "korea",
        data: "he is cancer",
      },
    ],
    keyword: "",
  };
  handleChange = (e) => {
    this.setState({
      keyword: e.target.value,
    });
  };

  handleCreate = (data) => {
    const { blockdata } = this.state;
    this.setState({
      blockdata: blockdata.concat({
        name: data.name,
        hospital: data.hospital,
        data: data.data,
      }),
    });
  };

  render() {
    const { blockdata, keyword } = this.state;
    const filteredlist = blockdata.filter(
      (data) => data.name.indexOf(keyword) !== -1
    );

    return (
      <div>
        <WriteFrom onCreate={this.handleCreate} />
        <Read blockdata={filteredlist} />
        <p>
          <input
            placeholder="이름 입력"
            onChange={this.handleChange}
            value={keyword}
          />
        </p>
      </div>
    );
  }
}

export default Write;
