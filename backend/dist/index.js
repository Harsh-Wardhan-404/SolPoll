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
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const cors_1 = __importDefault(require("cors"));
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/users/:walletAddress', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { walletAddress } = req.params;
    const user = yield prisma.user.findUnique({
        where: { walletAddress }
    });
    res.status(200).json(user);
}));
app.post('/create-user', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, walletAddress } = req.body;
    const user = yield prisma.user.create({
        data: {
            username,
            walletAddress
        }
    });
    res.status(200).json(user);
}));
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
