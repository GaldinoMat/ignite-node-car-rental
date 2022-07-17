import fs from "fs";

import { AppError } from "../errors/AppError";

export const deleteFile = async (fileName: string) => {
  try {
    await fs.promises.stat(fileName);
  } catch (error) {
    throw new AppError("No file found");
  }

  await fs.promises.unlink(fileName);
};
