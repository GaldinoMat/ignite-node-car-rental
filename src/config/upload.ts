import crypto from "crypto";
import multer from "multer";
import { resolve } from "path";

export default {
  upload(folder: string) {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, "..", "..", folder),
        filename: (request, file, callback) => {
          const hashFile = crypto.randomBytes(16).toString("hex");
          const fileName = `${hashFile} - ?${file.originalname}`;

          return callback(null, fileName);
        },
      }),
    };
  },
};
