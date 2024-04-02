import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';

const UserDataContext = createContext();
export const useUserData = () => useContext(UserDataContext);

export const UserDataProvider = ({ children }) => {
  const [userData, setUserData] = useState(['']);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae'
        );
        setUserData(response.data.user);
        
      } catch (error) {
        console.error('Error fetching user about data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <UserDataContext.Provider value={userData}>
      {children}
    </UserDataContext.Provider>
  );
};

export default UserDataContext;
