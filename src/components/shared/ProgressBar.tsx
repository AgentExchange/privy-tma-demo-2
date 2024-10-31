import { cn } from "@/utils/cn";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  className?: string;
}

export function ProgressBar({
  currentStep,
  totalSteps,
  className,
}: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className={cn("w-full bg-gray-200 rounded-full h-2.5", className)}>
      <div
        className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
