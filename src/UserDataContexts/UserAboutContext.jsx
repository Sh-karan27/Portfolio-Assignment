import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';

const UserAboutContext = createContext();

export const useUserAboutData = () => useContext(UserAboutContext);

export const UserAboutDataProvider = ({ children }) => {
  const [userAbout, setUserAbout] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae'
        );
        setUserAbout(response.data.user.about);
        console.log(response.data.user.about);
      } catch (error) {
        console.error('Error fetching user about data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <UserAboutContext.Provider value={userAbout}>
      {children}
    </UserAboutContext.Provider>
  );
};

export default UserAboutContext;
