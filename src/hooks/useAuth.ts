import { usePrivy } from "@privy-io/react-auth";
import { useAuthStore } from "@/stores/authStore";
import { useEffect } from "react";

export function useAuth() {
  const { ready, user } = usePrivy();
  const { setUser, setLoading } = useAuthStore();

  useEffect(() => {
    setLoading(!ready);
    if (ready) {
      setUser(user);
    }
  }, [user, ready, setUser, setLoading]);

  return {
    user,
    isLoading: !ready,
  };
}
