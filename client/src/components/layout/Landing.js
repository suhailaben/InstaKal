import React, { Component } from 'react'
import instagram from '../../img/instagram.gif';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }

  render() {
    return (
      <div className="landing">
      <div className="dark-overlay landing-inner text-light">
        <div className="container">
          <div className="row">
            <div className="col-md-6  text-center">
              <img className="instaphone" src={instagram} alt="instagram"></img>
            </div>
            <div className="col-md-6 text-center">
              <h1 className="instagram-logo display-3 mb-4 black-font">Instagram </h1>
              <h2 className="instagram-logo display-3 mb-4 gray-font">for developers</h2>
              <p className="lead black-font"> 
                {' '}
                Sign up to share photos and videos with your friends in the developer community.
              </p>
              <hr />
              <Link to="/register" className="btn btn-lg btn-info mr-2">Sign Up</Link>
              <Link to="/login" className="btn btn-lg btn-light">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
 };
 
 const mapStateToProps = state => ({
  auth: state.auth
 });
 
 export default connect(mapStateToProps)(Landing);
