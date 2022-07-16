import { Router } from "express";

import { ensureAuthentication } from "../middlewares/ensureAuthentication";
import { CreateSpecificationController } from "../modules/Cars/useCases/createSpecification/CreateSpecificationController";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationsRoutes.use(ensureAuthentication);
specificationsRoutes.post("/", createSpecificationController.handle);

export { specificationsRoutes };
