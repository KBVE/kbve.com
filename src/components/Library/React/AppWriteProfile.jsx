import AWAuth from "@r/AppWriteAuth";
import Spinner from "@w/Spinner";
import ProfileJSX from "@w/Profile";

const Profile = () => {
  const { userProfile } = AWAuth();

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
        <h1 className="name">Welcome, {userProfile?.name}</h1>
        <h2 className="email">Email: {userProfile?.email}</h2>
        <ProfileJSX />
      </div>
    );
  }
};

export default Profile;
