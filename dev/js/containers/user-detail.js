import React, { Component } from "react";
import { connect } from "react-redux";
import { getMovie, searchMovie } from "../actions/index";

/*
 * We need "if(!this.props.user)" because we set state to null by default
 * */

class UserDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("clickmovie", this.props.user);
    console.log("searchmovie", this.props.movie);

    let movie = this.props.user;
    let search = this.props.movie;

    if (!movie.title) {
      return <div>Select a movie for details...</div>;
    }
    return (
      <div>
        <div className="container">
          <div className="swiper-wrapper col-md-12 col-xs-12">
            <img
              src={movie.poster}
              className="movieposter"
              alt="movieposter"
              style={{ width: "150px", height: "150px" }}
            />
            <table className="moviedata table-bordered">
              <tbody>
                <tr>
                  <td>Description</td>

                  <td>Value</td>
                </tr>
              </tbody>
              <tr>
                <td>
                  <span>
                    <p style={{ textAlign: "center" }}>title</p>
                  </span>
                </td>
                <td>
                  <span>
                    <p style={{ textAlign: "center" }}>{movie.title}</p>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    <p style={{ textAlign: "center" }}>year</p>
                  </span>
                </td>
                <td>
                  <span>
                    <p style={{ textAlign: "center" }}>{movie.year}</p>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    <p style={{ textAlign: "center" }}>rated</p>
                  </span>
                </td>
                <td>
                  <span>
                    <p style={{ textAlign: "center" }}>{movie.rated}</p>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    <p style={{ textAlign: "center" }}>released</p>
                  </span>
                </td>
                <td>{movie.released}</td>
              </tr>
              <tr>
                <td>
                  <span>
                    <p style={{ textAlign: "center" }}>runtime</p>
                  </span>
                </td>
                <td>{movie.runtime}</td>
              </tr>
              <tr>
                <td>
                  <span>
                    <p style={{ textAlign: "center" }}>director</p>
                  </span>
                </td>
                <td>
                  <span>
                    <p style={{ textAlign: "center" }}>{movie.director}</p>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    <p style={{ textAlign: "center" }}>writers</p>
                  </span>
                </td>
                <td>{movie.writers}</td>
              </tr>
              <tr>
                <td>
                  <span>
                    <p style={{ textAlign: "center" }}>actors</p>
                  </span>
                </td>
                <td>
                  <span>
                    <p style={{ textAlign: "center" }}>{movie.actors}</p>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    <p style={{ textAlign: "center" }}>plot</p>
                  </span>
                </td>
                <td>
                  <span>
                    <p style={{ textAlign: "center" }}>{movie.plot}</p>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    <p style={{ textAlign: "center" }}>country</p>
                  </span>
                </td>
                <td>{movie.country}</td>
              </tr>
              <tr>
                <td>
                  <span>
                    <p style={{ textAlign: "center" }}>language</p>
                  </span>
                </td>
                <td>
                  <span>
                    <p style={{ textAlign: "center" }}>{movie.language}</p>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    <p style={{ textAlign: "center" }}>rating</p>
                  </span>
                </td>
                <td>
                  <span>
                    <p style={{ textAlign: "center" }}>{movie.rating}</p>
                  </span>
                </td>
              </tr>
              <tr>
                <td>
                  <span>
                    <p style={{ textAlign: "center" }}>votes</p>
                  </span>
                </td>
                <td>{movie.votes}</td>
              </tr>
              <tr>
                <td>
                  <span>
                    <p style={{ textAlign: "center" }}>production</p>
                  </span>
                </td>
                <td>
                  <span>
                    <p style={{ textAlign: "center" }}>{movie.production}</p>
                  </span>
                </td>
              </tr>
            </table>
          </div>

          <div />
        </div>
      </div>
    );
  }
}

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
  return {
    user: state.users.activeMovie,
    movie: state.users.searchMovie
  };
}

function matchDispatchToProps(dispatch) {
  return {
    getMovie: () => {
      dispatch(getMovie());
    },
    searchMovie: () => {
      dispatch(searchMovie());
    }
  };
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(UserDetail);
