export function preloadPanorama(panoramaRoute) {
  return new Promise((resolve, reject) => {
    let img = new Image();
    img.src = "images/panoramas/" + panoramaRoute.name + ".jpg";
    img.onload = img.onerror = () => {
      if (img.height) {
        panoramaRoute.meta.image = img;
        resolve(img);
      } else {
        reject("Unable to load image");
      }
    };
  });
}

export default class Preloader {
  constructor(pathRouteName) {
    this.pathRoute = router.matcher.match(pathRouteName);
    this.pathRoute.meta.images = [];
    let destination = pathRouteName.split("-").pop();
    this.panoramaRoute = router.matcher.match(destination);
    this.loaded = 0;
    this.ready = false;
    this.computeFilename = this.pathRoute.meta.computeFilename || this.defaultFilename;
    // start:1, stop:3, total:2+3-1=4 (1,2,3,panorama)
    this.total = 2 + this.pathRoute.meta.stop - this.pathRoute.meta.start;
    this.preload();
  }

  preload() {
    return preloadPanorama(this.panoramaRoute).finally(() => {
      this.loaded++;
      return this.preloadPath();
    }).then(() => {
      this.ready = true;
    });
  }

  get progress() {
    return Math.round((100 * this.loaded) / this.total);
  }

  defaultFilename(i) {
    return "IMG_" + i + ".jpg";
  }

  getImageSource(i) {
    let filename = this.computeFilename(i);
    return "images/paths/" + this.pathRoute.name + "/" + filename;
  }

  preloadPath() {
    return new Promise(resolve => {
      for (
        let i = this.pathRoute.meta.start;
        i <= this.pathRoute.meta.stop;
        i++
      ) {
        let img = new Image();
        img.src = this.getImageSource(i);
        img.onload = img.onerror = () => {
          if (img.height) {
            // no error
            this.pathRoute.meta.images.push(img);
          }
          this.loaded++;
          if (this.loaded >= this.total) {
            this.pathRoute.meta.images.sort((a, b) => {
              return a.src.localeCompare(b.src);
            });
            resolve(this.loaded);
          }
        };
      }
    });
  }
}
