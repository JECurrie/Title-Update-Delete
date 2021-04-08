//import Raven from "raven-js";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

function init() {
  Sentry.init({
    dsn:
      "https://f7f400a10a0a4955b8c28fa967a685d7@o566835.ingest.sentry.io/5710121",
    integrations: [new Integrations.BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
}
function log(error) {
  //Raven.captureException(error);
}
export default {
  init,
  log,
};
