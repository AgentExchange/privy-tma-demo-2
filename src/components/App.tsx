import { useLaunchParams, miniApp, useSignal } from "@telegram-apps/sdk-react";
import { usePrivy } from "@privy-io/react-auth";
import { AppRoot } from "@telegram-apps/telegram-ui";

export function App() {
  const lp = useLaunchParams();
  const isDark = useSignal(miniApp.isDark);
  const { ready, user } = usePrivy();

  if (!ready) return <div>Loading...</div>;

  return (
    <AppRoot
      appearance={isDark ? "dark" : "light"}
      platform={["macos", "ios"].includes(lp.platform) ? "ios" : "base"}
    >
      <div>
        <h1>Hello, {user?.telegram?.firstName || "Guest"}!</h1>
        <pre>{JSON.stringify(lp, null, 2)}</pre>
      </div>
    </AppRoot>
  );
}
