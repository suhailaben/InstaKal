import React from 'react';
import { Link } from 'react-router-dom';

const ProfileActions = () => {
 return (
   <div className="btn-group mb-4  col-md-7 col-sm-6 edit-profile-btn" role="group">
     <Link to="/edit-profile" className="btn btn-light lightgray-btn">
       {/* <i className="fas fa-user-circle text-info mr-1" /> Edit Profile */}
       <i className="fas fa-user-circle"/> Edit Profile
     </Link>
   </div>
 );
};

export default ProfileActions;