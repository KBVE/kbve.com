import AWAuth from "@r/AppWriteAuth";
import Spinner from "@w/Spinner";
import { redirect } from "react-router-dom";

const Profile = () => {
  const { userProfile } = AWAuth();
  console.log(userProfile);
  if (!userProfile) {
    return (
      <>
        {" "}
        <Spinner />
      </>
    );
  } 
  else if(userProfile?.message )
  {
    window.location.replace('/account/login');
  }
  else {
    return (
      <div className="profile">
       
      </div>
    );
  }
};

export default Profile;
