# Asset Help

The static site uses only local files in this repository. I was able to download the stable Wix-hosted images that were exposed by the rendered page:

- `assets/cc-icon2.png`
- `assets/hero.jpg`
- `assets/about-coffee.png`
- `assets/about-run.jpg`
- `assets/run-card.png`
- `assets/sweatshirt.png`
- `assets/instagram.png`

The live Wix site's Instagram feed is loaded through a widget, so the individual Instagram photos were not exposed as simple downloadable page assets. The current static version recreates that area with the downloaded Coffee Club images.

To replace the gallery with exact Instagram images later:

1. Add your images to `assets/instagram/`.
2. Use simple names such as `photo-01.jpg`, `photo-02.jpg`, `photo-03.jpg`.
3. Open `script.js`.
4. Replace the `image` values in `galleryItems` with paths like `assets/instagram/photo-01.jpg`.
5. Keep the `caption` values, or replace them with the original Instagram captions.

For best results, crop replacement gallery images square before adding them. JPG or PNG files both work.
