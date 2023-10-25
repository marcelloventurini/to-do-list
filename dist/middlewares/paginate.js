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
Object.defineProperty(exports, "__esModule", { value: true });
function paginate(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { limit = 3, page = 1, sortField = '_id', order = -1 } = req.query;
            const result = req.result;
            if (Number(limit) > 0 && Number(page) > 0) {
                // cria um obj com uma anotação de tipo;
                // essa anotação indica que o obj terá uma chave (o campo de ordenação),
                // que será do tipo string, e um valor (a ordem de ordenação)
                // que pode ser apenas 'asc' ou 'desc'
                const sortOptions = {
                    [sortField]: order == -1 ? 'desc' : 'asc'
                };
                const tasks = yield result.find()
                    .sort(sortOptions)
                    .skip((Number(page) - 1) * Number(limit))
                    .limit(Number(limit));
                if (tasks.length === 0) {
                    res.status(404).json({ message: 'No task found.' });
                    return;
                }
                res.status(200).json(tasks);
            }
            else {
                res.status(400).json({ message: 'Invalid format for page or limit.' });
            }
        }
        catch (error) {
            res.status(500).json(error);
        }
    });
}
exports.default = paginate;
