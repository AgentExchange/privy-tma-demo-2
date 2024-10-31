import React from "react";
import { usePrivy } from "@privy-io/react-auth";
import { useOnboardingStore } from "@/store/onboarding";
import { ProgressBar } from "@/components/shared/ProgressBar";

export const WelcomePage: React.FC = () => {
  const { ready, user } = usePrivy();
  const { currentStep, totalSteps } = useOnboardingStore();

  if (!ready) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <ProgressBar
        currentStep={currentStep}
        totalSteps={totalSteps}
        className="mb-4"
      />
      <h1 className="text-2xl font-bold">Welcome to Trenches</h1>
      <p>Hello, {user?.telegram?.firstName || "Guest"}!</p>
    </div>
  );
};

export default WelcomePage;
