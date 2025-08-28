/**
 * Image utility functions for the application
 */

// Default placeholder image path
const PLACEHOLDER_IMAGE = '/placeholder.svg';

// Product images directory
const PRODUCT_IMAGES_DIR = '/images/products/';

// List of available product images
const productImages = [
  '087d3fd9-dc65-4334-a6ae-a9fb1b9dc237.jpg',
  'asoebi-owambe-style.jpg',
  'contemporary.jpg'
].map(img => `${PRODUCT_IMAGES_DIR}${img}`);

/**
 * Get a random product image URL
 * Falls back to placeholder if no images are available
 */
export function getRandomProductImage(): string {
  if (productImages.length === 0) return PLACEHOLDER_IMAGE;
  const randomIndex = Math.floor(Math.random() * productImages.length);
  return productImages[randomIndex];
}

/**
 * Get a specific product image by index
 * Falls back to placeholder if index is out of bounds
 */
export function getProductImage(index: number): string {
  if (productImages.length === 0) return PLACEHOLDER_IMAGE;
  return productImages[index % productImages.length] || PLACEHOLDER_IMAGE;
}

/**
 * Get the placeholder image URL
 */
export function getPlaceholderImage(): string {
  return PLACEHOLDER_IMAGE;
}
