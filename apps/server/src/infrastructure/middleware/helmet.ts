// import helmet from "helmet";

// const helmetMiddleware = helmet.default();

import helmetImport from "helmet";

const helmet = (helmetImport as unknown as typeof import("helmet")).default || helmetImport;

const helmetMiddleware = helmet(); // ✅ no runtime error
export default helmetMiddleware;
