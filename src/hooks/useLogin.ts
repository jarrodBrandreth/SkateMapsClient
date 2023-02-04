import { useState } from 'react';
import { useAuthContext } from '../context/AuthContext';

export const useLogin = () => {
  const [error, setError] = useState<null | string>();
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useAuthContext();

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${process.env.REACT_APP_API}/user/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      // sends down status code, email and token if verified or error message
      const result = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        setError(result.error);
      }

      if (response.ok) {
        // save user to local storage
        localStorage.setItem('user', JSON.stringify(result));

        // update user in authContext
        setUser(result);

        // update loading state
        setIsLoading(false);
      }
    } catch (error) {
      // server error
      setError('Oh no! Something went wrong, try again.');
      setIsLoading(false);
    }
  };

  return { login, isLoading, error };
};
