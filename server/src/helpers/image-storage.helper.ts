import { LocalFilesInterceptorOptions } from '@app/app/global/interceptors/local-files.interceptor';
import { BadRequestException } from '@nestjs/common';

export const saveImageToStorage: LocalFilesInterceptorOptions = {
  fieldName: 'avatar',
  path: '/avatars',
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.includes('image')) {
      return cb(new BadRequestException('Provide a valid image'), false);
    }
    cb(null, true);
  },
  limits: {
    fileSize: 4194304, // 4MB
  },
};
