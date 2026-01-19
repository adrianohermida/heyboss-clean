import { useState } from 'react';


const useGoogleLogin = () => {
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setGoogleLoading(true);
    try {
      const { supabase } = await import('../../../supabaseClient');
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: { redirectTo: window.location.origin + '/auth/callback' }
      });
      if (error) throw new Error(error.message);
    } catch (err: any) {
      // Optionally handle error
    } finally {
      setGoogleLoading(false);
    }
  };

  return { googleLoading, handleGoogleLogin };
};

export default useGoogleLogin;
