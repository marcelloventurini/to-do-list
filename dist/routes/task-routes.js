"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const task_controller_1 = __importDefault(require("../controllers/task-controller"));
const router = express_1.default.Router();
router.get('/tasks', task_controller_1.default.getTasks);
router.get('/tasks/search', task_controller_1.default.searchByTitle);
router.get('/tasks/:id', task_controller_1.default.getTaskById);
router.post('/tasks', task_controller_1.default.createTask);
router.put('/tasks/:id', task_controller_1.default.updateTask);
router.delete('/tasks/:id', task_controller_1.default.deleteTask);
exports.default = router;
