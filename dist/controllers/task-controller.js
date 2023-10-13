"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const task_js_1 = __importDefault(require("../models/task.js"));
class TaskController {
    static getTasks(_, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tasks = yield task_js_1.default.find();
                res.status(200).json(tasks);
            }
            catch (error) {
                res.status(500).json({ message: 'Failed to get tasks.' });
            }
        });
    }
    static createTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const taskDetails = req.body;
                const newTask = yield task_js_1.default.create(taskDetails);
                res.status(200).json(newTask);
            }
            catch (error) {
                res.status(500).json({ message: 'Failed to create new task.' });
            }
        });
    }
}
exports.default = TaskController;