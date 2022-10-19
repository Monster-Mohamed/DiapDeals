import { BadRequestException } from '@nestjs/common';
import { MulterOptions } from '@nestjs/platform-express/multer/interfaces/multer-options.interface';
import { Request } from 'express';

interface File {
  fieldname: string;
  originalname: string;
  encoding: string;
  mimetype: string;
  size: number;
  destination: string;
  filename: string;
  path: string;
  buffer: Buffer;
}

type Callback = (error: Error, acceptFile: boolean) => void;

class ImageStorages {
  private validExtensions = ['png', 'jpg', 'jpeg'];

  limitsAsMax(megabytes = 4): MulterOptions['limits'] {
    return {
      fileSize: megabytes * 1e6,
    };
  }

  notValidFile(mimetype: string, extensions: string[] = this.validExtensions) {
    const e = extensions.map((e) => {
      if (mimetype.split('/')[1] !== e) return false;
      else return true;
    });

    if (e.includes(true)) return false; // the file is valid
    else return true; // the file is not valid
  }

  validImage(req: Request, file: File, cb: Callback) {
    if (ImageStorage.notValidFile(file.mimetype)) {
      return cb(
        new BadRequestException('The image must be of type jpg,png,jpeg'),
        false
      );
    }
    cb(null, true);
  }

  imageIsRequired(image: any): void {
    if (!image) throw new BadRequestException('The image is required');
  }

  filterImage: MulterOptions = {
    fileFilter: this.validImage,
    limits: this.limitsAsMax(),
  };
}

const ImageStorage = new ImageStorages();

export default ImageStorage;
