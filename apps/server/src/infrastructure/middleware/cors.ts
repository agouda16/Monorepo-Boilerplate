import cors from "cors";

const corsMiddleware = cors({
  origin: "*", // You can replace this with dynamic or specific domain settings
  methods: ["GET", "POST", "PUT", "DELETE"],
});

export default corsMiddleware;
