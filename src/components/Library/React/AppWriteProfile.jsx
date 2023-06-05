import AWAuth from "@r/AppWriteAuth";
import Spinner from "@w/Spinner";
import ProfileJSX from "@w/Profile";
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
    window.location.replace('https://kbve.com/account/login');
  }
  else {
    return (
      <div className="profile">
        <ProfileJSX
          username={userProfile?.name}
          email={userProfile?.email}
          emailVerification={userProfile.emailVerification}
          phone={userProfile?.phone}
          phoneVerification={userProfile?.phoneVerification}
          hash={userProfile?._id}
        />
      </div>
    );
  }
};

export default Profile;
