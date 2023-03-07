import { type AppType } from "next/app";
import { api } from "~/utils/api";
import { Provider as RWBProvider } from "react-wrap-balancer";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <RWBProvider>
      <Component {...pageProps} />;
    </RWBProvider>
  );
};

export default api.withTRPC(MyApp);
