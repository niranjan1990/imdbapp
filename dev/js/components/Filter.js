import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovie, searchMovie } from "../actions/index";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: ""
    };
    this.updateState = this.updateState.bind(this);
    this.searchInput = this.searchInput.bind(this);
  }
  updateState(e) {
    this.setState({ data: e.target.value });
  }

  searchInput() {
    const searchData = this.state.data;
    console.log("inputdata", this.state.data);
    this.props.searchMovie(searchData);
  }
  render() {
    return (
      <div>
        <div className="slidecontainer row " style={{ padding: "10px" }}>
          <div className="col-md-2">
            <i className="fa fa-th" style={{ padding: "2px" }} />
            <i className="fa fa-th-large" style={{ padding: "2px" }} />
          </div>
          <div className="col-md-6">
            <input
              type="range"
              min="1"
              max="10"
              value="7"
              step="0.3"
              className="slider"
              id="myRange"
              style={{ width: "100%" }}
            />
            <p>
              Value: <span id="demo" />
            </p>
          </div>
          <div className="col-md-4">
            <div className="Search">
              <input
                type="text"
                className="searchText"
                style={{
                  width: "100%",
                  border: "none",
                  background: "transparent",
                  borderBottom: "1px solid #e3ddd9",
                  outline: " none"
                }}
                onChange={this.updateState}
              />
              <button
                onClick={this.searchInput}
                className="fa fa-search"
                style={{
                  position: "absolute",
                  left: "87%",
                  top: "8px"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.searchMovie,
    user: state.users.activeMovie
  };
}

function matchDispatchToProps(dispatch) {
  return {
    searchMovie: name => {
      dispatch(searchMovie(name));
    },
    getMovie: () => {
      dispatch(getMovie());
    }
  };
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Filter);
