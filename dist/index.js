import express from "express";
import { testDbConnection, testEcho } from "./controllers/testControllers";
const app = express();
app.use(express.json());
app.get("/test-db", testDbConnection);
app.post("/echo", testEcho);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
//# sourceMappingURL=index.js.map