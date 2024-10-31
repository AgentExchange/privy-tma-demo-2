import React from "react";
import { usePrivy } from "@privy-io/react-auth";

export const WelcomePage: React.FC = () => {
  const { ready, user } = usePrivy();

  if (!ready) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome to Trenches</h1>
      <p>Hello, {user?.telegram?.firstName || "Guest"}!</p>
    </div>
  );
};

export default WelcomePage;
