import { Image } from '../app/image/entities/image.entity';

export type SaveImageFromUrlToDBType = Promise<
  [productName: string, image: Image]
>;
