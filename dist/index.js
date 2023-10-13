"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_connection_1 = __importDefault(require("./config/db-connection"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 3000;
const MONGO_URI = process.env.MONGO_URI;
(0, db_connection_1.default)(MONGO_URI);
if (!MONGO_URI) {
    throw new Error('The MONGO_URI environment variable is not defined.');
}
app.get('/', (_, res) => {
    res.status(200).send('Home');
});
app.use(express_1.default.json());
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
