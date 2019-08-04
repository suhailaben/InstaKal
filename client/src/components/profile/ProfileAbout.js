import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from '../../validation/is-empty';

class ProfileAbout extends Component {
  render() {
    const { profile } = this.props; 

   return (
     <div className="row">
       <div className="col-md-12">
         <div className="card card-body bg-light mb-3">
           <h3 className="text-center blue-font">{profile.name}'s Bio</h3>
           <p className="lead">
             {isEmpty(profile.bio) ? (
               <span>{profile.name} does not have a bio</span>
             ) : (
               <span>{profile.bio}</span>
             )}
           </p>
           {/* Edited below */}
           <a href={profile.website}><p>{profile.website}</p></a>
           <hr />
         </div>
       </div>
     </div>
   );
 }
}
ProfileAbout.propTypes = {
 profile: PropTypes.object.isRequired
};
export default ProfileAbout;