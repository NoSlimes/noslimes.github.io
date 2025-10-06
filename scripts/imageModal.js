/**
 * Image Modal Functionality
 * Makes gallery images clickable to display in full-screen modal
 */

$(document).ready(function() {
    // Delegate click event to image-gallery so dynamically added images work
    $(document).on('click', '.image-gallery img:not(.external-links-gallery img)', function(e) {
        e.preventDefault();
        openImageModal(this);
    });
    
    // Prevent single-click on project overlays from opening modal when clicking their child images
    $(document).on('click', '.project-link', function(e) {
        // Let normal navigation happen on click — nothing special required here.
    });
    
    // Close modal when clicking the X button
    $('.modal-close').click(function() {
        closeImageModal();
    });
    
    // Close modal when clicking outside the image
    $('#imageModal').click(function(e) {
        if (e.target === this) {
            closeImageModal();
        }
    });
    
    // Close modal with Escape key
    $(document).keydown(function(e) {
        if (e.key === 'Escape') {
            closeImageModal();
        }
    });
    

});

/**
 * Open image in modal
 * @param {HTMLImageElement} imgElement - The clicked image element
 */
function openImageModal(imgElement) {
    const modal = $('#imageModal');
    const modalImg = $('#modalImage');
    const modalCaption = $('#modalCaption');
    
    // Set the modal image source to the clicked image
    modalImg.attr('src', imgElement.src);
    modalImg.attr('alt', imgElement.alt);
    
    // Set the caption from the figcaption if it exists
    const figcaption = $(imgElement).siblings('figcaption');
    if (figcaption.length > 0) {
        modalCaption.text(figcaption.text());
        modalCaption.show();
    } else {
        modalCaption.hide();
    }
    
    // Show the modal with animation
    modal.addClass('show');
    
    // Prevent body scrolling when modal is open
    $('body').css('overflow', 'hidden');
}

/**
 * Close the image modal
 */
function closeImageModal() {
    const modal = $('#imageModal');
    
    // Hide the modal
    modal.removeClass('show');
    
    // Re-enable body scrolling
    $('body').css('overflow', 'auto');
}

/**
 * Preload images for better user experience
 */
function preloadImages() {
    $('.image-gallery img').not('.external-links-gallery img').each(function() {
        const img = new Image();
        img.src = this.src;
    });
}

// Preload images when page is loaded
$(window).on('load', preloadImages);
