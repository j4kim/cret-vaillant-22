export default class Preloader {
  constructor(route) {
    route.meta.images = [];
    this.route = route;
    this.loaded = 0;
    // start:1, stop:3, total:2+3-1=4 (1,2,3,panorama)
    this.total = 2 + this.route.meta.stop - this.route.meta.start;
  }

  preload() {
    return this.preloadPanorama().then(() => this.preloadPath());
  }

  get progress() {
    return Math.round((100 * this.loaded) / this.total);
  }

  getImageSource(i) {
    let filename = "IMG_" + i + ".jpg";
    return "images/" + this.route.name + "/" + filename;
  }

  preloadPath() {
    return new Promise(resolve => {
      for (let i = this.route.meta.start; i <= this.route.meta.stop; i++) {
        let img = new Image();
        img.src = this.getImageSource(i);
        img
          .decode()
          .then(() => {
            this.route.meta.images.push(img);
          })
          .catch(() => {
            // the file doesn't exist, do nothing
          })
          .finally(() => {
            this.loaded++;
            if (this.loaded >= this.total) {
              this.route.meta.images.sort((a, b) => {
                return a.src.localeCompare(b.src);
              });
              resolve();
            }
          });
      }
    });
  }

  preloadPanorama() {
    return new Promise(resolve => {
      let img = new Image();
      img.src = "images/panoramas/" + this.route.meta.destination + ".jpg";
      img.decode().finally(() => {
        this.loaded++;
        resolve();
      });
    });
  }
}
