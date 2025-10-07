import type { Request, Response } from "express";
import db from "../services/db";

export const testDbConnection = async (req: Request, res: Response) => {
    try {
        const result = await db.raw("SELECT 1 AS ok");
        res.json({ success: true, result });
    } catch (err) {
        console.error("DB Error:", err);
        res.status(500).json({ success: false, error: "Database connection failed" });
    }
};

export const testEcho = (req: Request, res: Response) => {
    res.json({
        message: "Hello from backend 👋",
        received: req.body,
    });
};