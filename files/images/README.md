# Image Organization Guide

Your images are now organized into these directories:

## `/files/images/content/`
- Blog post images
- Article illustrations
- General page content images

## `/files/images/projects/`
- Project screenshots
- Demo images
- Project-related media

## `/files/images/icons/`
- UI icons
- Social media icons
- Small decorative graphics

## `/files/images/backgrounds/`
- Hero images
- Background patterns
- Large decorative images

## `/files/images/` (root)
- Special images like smag.png
- Site logos and branding
- Other miscellaneous images

## Example Usage

```html
<!-- Content image with caption -->
<figure class="centerimg">
  <img src="/files/images/content/example.jpg" alt="Example image">
  <figcaption>This is an example image</figcaption>
</figure>

<!-- Project screenshot -->
<img src="/files/images/projects/myapp/screenshot.png" alt="My App Screenshot" class="img-large centerimg img-shadow">

<!-- Small left-aligned image -->
<img src="/files/images/content/diagram.png" alt="Diagram" class="img-small img-left img-rounded">
```