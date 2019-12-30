export default class Preloader {
  constructor(route) {
    route.meta.imageUrls = [];
    this.route = route;
    this.loaded = 0;
    this.total = 1 + this.route.meta.stop - this.route.meta.start;
    this.preload();
  }

  get progress() {
    return Math.round(100 * this.loaded / this.total)
  }

  getImageSource(i) {
    let filename = "IMG_" + i + ".jpg";
    return "images/" + this.route.name + "/" + filename;
  }

  preload() {
    return new Promise(resolve => {
      for (let i = this.route.meta.start; i <= this.route.meta.stop; i++) {
        let img = new Image();
        img.src = this.getImageSource(i);
        img
          .decode()
          .then(() => {
            this.route.meta.imageUrls.push(img.src)
          })
          .catch(() => {
            // the file doesn't exist, do nothing
          })
          .finally(() => {
            this.loaded++;
            if (this.loaded >= this.total) {
              this.route.meta.imageUrls.sort();
              resolve();
            }
          });
      }
    });
  }
}
