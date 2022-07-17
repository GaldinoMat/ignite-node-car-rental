import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import { CreateCategoryController } from "../modules/Cars/useCases/createCategory/CreateCategoryController";
import { ImportCategoryController } from "../modules/Cars/useCases/importCategory/ImportCategoryController";
import { ListCategoriesController } from "../modules/Cars/useCases/listCategories/ListCategoriesController";

const categoriesRoutes = Router();
const uploadCategories = multer(uploadConfig.upload("./tmp"));

const createCategoryController = new CreateCategoryController();
const importCategoryController = new ImportCategoryController();
const listCategoriesController = new ListCategoriesController();

categoriesRoutes.post("/", createCategoryController.handle);

categoriesRoutes.get("/", listCategoriesController.handle);

categoriesRoutes.post(
  "/import",
  uploadCategories.single("file"),
  importCategoryController.handle
);

export { categoriesRoutes };
