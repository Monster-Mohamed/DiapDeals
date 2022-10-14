import { extname } from 'path';

export default function (req, file, callback) {
  const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);

  const ext = extname(file.originalname);

  const goodOriginalName = file.originalname.replace(/\s+/g, '');

  const filename = `${goodOriginalName}-${uniqueSuffix}${ext}`;

  callback(null, filename);
}
