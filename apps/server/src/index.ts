import app from "./server.js";

const PORT: number = parseInt(process.env.SERVER_PORT || "8080", 10);

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
