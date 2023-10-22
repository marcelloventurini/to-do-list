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
const mongoose_1 = __importDefault(require("mongoose"));
class TaskController {
    static getTasks(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const tasks = task_js_1.default.find();
                req.result = tasks;
                next();
            }
            catch (error) {
                res.status(500).json({ message: 'Failed to get tasks.', error });
            }
        });
    }
    static getTaskById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
                    res.status(400).json({ message: 'Invalid ID format.' });
                    return;
                }
                const task = yield task_js_1.default.findById(id);
                if (!task) {
                    res.status(404).json({ message: 'ID not found.' });
                }
                else {
                    res.status(200).json(task);
                }
            }
            catch (error) {
                res.status(500).json({ message: 'Failed to get tasks.', error });
            }
        });
    }
    static createTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const taskDetails = req.body;
                const newTask = yield task_js_1.default.create(taskDetails);
                res.status(201).json({ message: 'Task successfully created.', newTask });
            }
            catch (error) {
                res.status(500).json({ message: 'Failed to create new task.', error });
            }
        });
    }
    static updateTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
                    res.status(400).json({ message: 'Invalid ID format.' });
                    return;
                }
                const taskDetails = req.body;
                const updatedTask = yield task_js_1.default.findByIdAndUpdate(id, taskDetails, { new: true });
                if (!updatedTask) {
                    res.status(404).json({ message: 'ID not found.' });
                }
                else {
                    res.status(200).json({ message: 'Task successfully updated.', updatedTask });
                }
            }
            catch (error) {
                res.status(500).json({ message: 'Failed to update task.', error });
            }
        });
    }
    static deleteTask(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                if (!mongoose_1.default.Types.ObjectId.isValid(id)) {
                    res.status(400).json({ message: 'Invalid ID format.' });
                    return;
                }
                const deletedTask = yield task_js_1.default.findByIdAndDelete(id);
                if (!deletedTask) {
                    res.status(404).json({ message: 'ID not found.' });
                }
                else {
                    res.status(200).json({ message: 'Task successfully deleted.' });
                }
            }
            catch (error) {
                res.status(500).json({ message: 'Failed to delete task.', error });
            }
        });
    }
    static search(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { title } = req.query;
                if (!title) {
                    res.status(400).json({ message: 'Title parameter is missing or empty.' });
                    return;
                }
                const regex = new RegExp(title, 'i');
                const tasks = task_js_1.default.find({ title: regex });
                req.result = tasks;
                next();
            }
            catch (error) {
                res.status(500).json({ message: 'Failed to find task.', error });
            }
        });
    }
    static filter(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { status, priority } = req.query;
                const search = {};
                if (status)
                    search.status = status;
                if (priority)
                    search.priority = priority;
                if (!status && !priority) {
                    res.status(400).json({
                        message: 'Please provide at least one filter parameter (status or priority).'
                    });
                    return;
                }
                const tasks = task_js_1.default.find(search);
                req.result = tasks;
                next();
            }
            catch (error) {
                res.status(500).json({ message: 'Failed to find task.', error });
            }
        });
    }
}
exports.default = TaskController;
