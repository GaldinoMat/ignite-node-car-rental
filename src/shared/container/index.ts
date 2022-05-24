import { container } from "tsyringe";

import { CategoriesRepository } from "../../modules/Cars/repositories/implementations/CategoriesRepository";
import { SpecificationsRepository } from "../../modules/Cars/repositories/implementations/SpecificationsRepository";
import { ICategoriesRepository } from "../../modules/Cars/repositories/interfaces/ICategoriesRepository";
import { ISpecificationRepository } from "../../modules/Cars/repositories/interfaces/ISpecificationsRepository";

// ICategoriesRepository
container.registerSingleton<ICategoriesRepository>(
  "CategoriesRepository",
  CategoriesRepository
);

// ISpecificationRepository
container.registerSingleton<ISpecificationRepository>(
  "SpecificationsRepository",
  SpecificationsRepository
);
