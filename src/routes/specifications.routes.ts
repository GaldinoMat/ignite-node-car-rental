import { Router, Request, Response } from "express";

import { createSpecificationController } from "../modules/Cars/useCases/createSpecification";

const specificationsRoutes = Router();

specificationsRoutes.post("/", (request: Request, response: Response) => {
  return createSpecificationController.handle(request, response);
});

// specificationsRoutes.get("/", (request: Request, response: Response) => {
//   const allCategories = specificationRepository.list();

//   return response.json(allCategories);
// });

export { specificationsRoutes };
