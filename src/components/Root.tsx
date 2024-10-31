import { PrivyProvider } from "@privy-io/react-auth";
import { App } from "@/components/App.tsx";

export function Root() {
  return (
    <PrivyProvider
      appId={import.meta.env.VITE_PRIVY_APP_ID}
      config={{
        loginMethods: ["telegram"],
        appearance: {
          theme: "light",
          accentColor: "#20B2AA", // Our accent color
        },
        embeddedWallets: {
          createOnLogin: "users-without-wallets",
        },
      }}
    >
      <App />
    </PrivyProvider>
  );
}
