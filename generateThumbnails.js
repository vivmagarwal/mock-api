import { faker } from "@faker-js/faker";
import bcrypt from "bcrypt";
// https://chancejs.com/usage/node.html
import {
  recipeCategories,
  ingredients,
  recipes,
  areas,
} from "./raw-data/meals.js";
import sharp from "sharp";
import dotenv from "dotenv";
import { readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
dotenv.config();

// just change base path; then run node generateThumbnails.js
const basePath = "public/images/recipe-ingredient";

const files = await readdir(basePath);
for (const file of files) {
  let filePath = basePath + "/" + file;
  let perhapsThumbPath =
    basePath + "/" + path.parse(file).name + "-thumb" + path.parse(file).ext;

  if (!path.parse(file).name.endsWith('thumb') && !existsSync(perhapsThumbPath)) {
    sharp(filePath)
      .resize(200, 200)
      .toFile(
        basePath +
          "/" +
          path.parse(file).name +
          "-thumb" +
          path.parse(file).ext,
        (err, resizeImage) => {
          if (err) {
            console.log(err);
          } else {
            console.log(resizeImage + " " + filePath);
          }
        }
      );
  }
}