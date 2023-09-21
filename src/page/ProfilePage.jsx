import React, { useEffect } from 'react';
import Profile from '../components/Profil/Profil';
import Settings from '../components/Profil/Settings';


const ProfilePage = ({ scrollTo }) => {
  useEffect(() => {
    if (scrollTo) {
      document.getElementById(scrollTo).scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollTo]);

  return (
    <div>
      <Profile/>
      <Settings/>
    </div>
  );
};

export default ProfilePage;
