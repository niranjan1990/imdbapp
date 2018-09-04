import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getAllMovies, getMovie } from "../actions/index";

class UserList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getAllMovies();
  }

  renderList(users) {
    if (users) {
      let returnData = [];
      for (let key in users) {
        let user = users[key];
        console.log("user", user.title);
        returnData.push(
          <div
            key={user.imdb_id}
            className="card-listing-section col-md-4 col-xs-12"
            style={{ marginTop: "15px" }}
          >
            <div
              onClick={() => this.props.getThisMovie(user.title)}
              style={{ backgroundColor: "#fff", padding: "20px" }}
            >
              <div className="cards" style={{ width: "190px" }}>
                <div className="card-img">
                  <img
                    className="poster"
                    src={user.poster}
                    style={{ width: "250px", height: "400px" }}
                    alt={user.title}
                  />
                </div>
                <div className="card-details lang-eng">
                  <div className="card-left">
                    <div className="popularity sa-data-plugin">
                      <div className="__likes">
                        <div className="__icon __heart" />
                        <div className="__percentage">84%</div>
                      </div>
                    </div>
                  </div>
                  <div className="card-right">
                    <div className="card-title">
                      <h4> {user.title}</h4>
                    </div>
                    <div className="card-tag">
                      {" "}
                      <span>
                        <span className="censor" style={{ color: "	#D3A920" }}>
                          {user.genre}{" "}
                        </span>{" "}
                      </span>
                      <div className="ratings">
                        <i className="fa fa-heart-o" />
                        <span style={{ padding: "5px" }}>8.3</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      }
      return returnData;
    }
  }

  render() {
    return (
      <div>
        <div className="movieList row">{this.renderList(this.props.users)}</div>
      </div>
    );
  }
}

// Get apps state and pass it as props to UserList
//      > whenever state changes, the UserList will automatically re-render
function mapStateToProps(state) {
  return {
    users: state.users.movies
  };
}

// Get actions and pass them as props to to UserList
//      > now UserList has this.props.selectUser
function matchDispatchToProps(dispatch) {
  return {
    getAllMovies: () => {
      dispatch(getAllMovies());
    },
    getThisMovie: name => {
      dispatch(getMovie(name));
    }
  };
}

// We don't want to return the plain UserList (component) anymore, we want to return the smart Container
//      > UserList is now aware of state and actions
export default connect(
  mapStateToProps,
  matchDispatchToProps
)(UserList);
