// import dotenv from "dotenv";
// dotenv.config();

// import jsonServer from "json-server";
// import path from "path";
// import { join, dirname } from "node:path";
// import { fileURLToPath } from "node:url";
// import ShortUniqueId from "short-unique-id";
// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";
// import { LowSync } from "lowdb";
// import { JSONFileSync } from "lowdb/node";
// import express from "express";

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(fileURLToPath(import.meta.url));
// const uid = new ShortUniqueId({ length: 10 });

// const file = path.join(__dirname, "db.json");


import config from 'config';
console.log(config.get('host'));