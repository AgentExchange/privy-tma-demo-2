import React from "react";
import { useAuth } from "@/hooks/useAuth";
import { useOnboardingStore } from "@/stores/onboarding";
import { ProgressBar } from "@/components/shared/ProgressBar";

export const WelcomePage: React.FC = () => {
  const { user, isLoading } = useAuth();
  const { currentStep, totalSteps } = useOnboardingStore();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>Not authenticated</div>;
  }

  return (
    <div className="p-4">
      <ProgressBar
        currentStep={currentStep}
        totalSteps={totalSteps}
        className="mb-4"
      />
      <h1 className="text-2xl font-bold">Welcome to Trenches!</h1>
      {user.telegram && (
        <div>
          <p>Telegram User: {user.telegram.username}</p>
          {/* Display other user details as needed */}
        </div>
      )}
    </div>
  );
};

export default WelcomePage;
