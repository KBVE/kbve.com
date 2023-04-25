import AWAuth from "@r/AppWriteAuth";
import Spinner from "@w/Spinner";
import ProfileJSX from "@w/Profile";

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
  } else {
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
