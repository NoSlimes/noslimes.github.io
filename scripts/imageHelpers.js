/**
 * Image Helper Functions for Easy Image Management
 * Include this script in your HTML pages to use these helper functions
 */

/**
 * Create a simple image element with optional classes
 * @param {string} src - Image path relative to /files/images/
 * @param {string} alt - Alt text for accessibility
 * @param {string} classes - Space-separated CSS classes
 * @returns {string} HTML img element
 */
function addImage(src, alt, classes = '') {
  return `<img src="/files/images/${src}" alt="${alt}" class="${classes}">`;
}

/**
 * Create a figure with image and caption
 * @param {string} src - Image path relative to /files/images/
 * @param {string} alt - Alt text for accessibility
 * @param {string} caption - Caption text
 * @param {string} classes - Space-separated CSS classes for the figure
 * @returns {string} HTML figure element
 */
function addFigure(src, alt, caption, classes = '') {
  return `
    <figure class="${classes}">
      <img src="/files/images/${src}" alt="${alt}">
      <figcaption>${caption}</figcaption>
    </figure>`;
}

/**
 * Create an image gallery from an array of images
 * @param {Array} images - Array of image objects {src, alt, caption?}
 * @param {string} size - Gallery size: 'small', 'medium', 'large'
 * @returns {string} HTML gallery div
 */
function addGallery(images, size = 'medium') {
  const sizeClass = size !== 'medium' ? `image-gallery-${size}` : '';
  let galleryHTML = `<div class="image-gallery ${sizeClass}">`;
  
  images.forEach(image => {
    if (image.caption) {
      galleryHTML += addFigure(image.src, image.alt, image.caption);
    } else {
      galleryHTML += addImage(image.src, image.alt);
    }
  });
  
  galleryHTML += '</div>';
  return galleryHTML;
}

/**
 * Quick shortcuts for common image patterns
 */
const ImageShortcuts = {
  // Small left-aligned image
  leftSmall: (src, alt) => addImage(src, alt, 'img-small img-left img-rounded'),
  
  // Small right-aligned image
  rightSmall: (src, alt) => addImage(src, alt, 'img-small img-right img-rounded'),
  
  // Centered medium image with shadow
  centerMedium: (src, alt) => addImage(src, alt, 'img-medium centerimg img-shadow img-rounded'),
  
  // Full-width hero image
  hero: (src, alt) => addImage(src, alt, 'img-full img-shadow'),
  
  // Profile/avatar style (small circular)
  avatar: (src, alt) => addImage(src, alt, 'img-small img-circle img-border'),
  
  // Project screenshot (large with border)
  screenshot: (src, alt, caption) => {
    if (caption) {
      return addFigure(src, alt, caption, 'centerimg');
    }
    return addImage(src, alt, 'img-large centerimg img-border img-shadow');
  }
};

/**
 * DOM manipulation helpers (if you want to add images dynamically)
 */
const ImageDOM = {
  /**
   * Insert image into a specific element
   * @param {string} elementId - Target element ID
   * @param {string} src - Image source
   * @param {string} alt - Alt text
   * @param {string} classes - CSS classes
   */
  insertImage: function(elementId, src, alt, classes = '') {
    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML += addImage(src, alt, classes);
    }
  },
  
  /**
   * Replace element content with image gallery
   * @param {string} elementId - Target element ID
   * @param {Array} images - Array of image objects
   * @param {string} size - Gallery size
   */
  insertGallery: function(elementId, images, size = 'medium') {
    const element = document.getElementById(elementId);
    if (element) {
      element.innerHTML = addGallery(images, size);
    }
  }
};

// Export for use in other modules if needed
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { addImage, addFigure, addGallery, ImageShortcuts, ImageDOM };
}
