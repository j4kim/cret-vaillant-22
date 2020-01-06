export function preloadPanorama(panoramaRoute) {
  return new Promise(resolve => {
    let img = new Image();
    img.src = "images/panoramas/" + panoramaRoute.name + ".jpg";
    img.decode().then(() => {
      panoramaRoute.meta.image = img
    }).finally(() => {
      resolve(img);
    });
  });
}

export default class Preloader {
  constructor(router, pathRouteName) {
    this.pathRoute = router.matcher.match(pathRouteName);
    this.pathRoute.meta.images = [];
    this.panoramaRoute = router.matcher.match(this.pathRoute.meta.destination);
    this.loaded = 0;
    // start:1, stop:3, total:2+3-1=4 (1,2,3,panorama)
    this.total = 2 + this.pathRoute.meta.stop - this.pathRoute.meta.start;
  }

  preload() {
    return preloadPanorama(this.panoramaRoute).then(() => {
      this.loaded++;
      return this.preloadPath();
    });
  }

  get progress() {
    return Math.round((100 * this.loaded) / this.total);
  }

  getImageSource(i) {
    let filename = "IMG_" + i + ".jpg";
    return "images/" + this.pathRoute.name + "/" + filename;
  }

  preloadPath() {
    return new Promise(resolve => {
      for (let i = this.pathRoute.meta.start; i <= this.pathRoute.meta.stop; i++) {
        let img = new Image();
        img.src = this.getImageSource(i);
        img
          .decode()
          .then(() => {
            this.pathRoute.meta.images.push(img);
          })
          .catch(() => {
            // the file doesn't exist, do nothing
          })
          .finally(() => {
            this.loaded++;
            if (this.loaded >= this.total) {
              this.pathRoute.meta.images.sort((a, b) => {
                return a.src.localeCompare(b.src);
              });
              resolve(this.loaded);
            }
          });
      }
    });
  }
}
