import slugify from 'slugify';

export function addSlugHelper(productName: string): string {
  return slugify(productName, {
    lower: true,
  });
}
