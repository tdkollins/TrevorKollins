class Icon {
  constructor(imagePath, x, y, imageURL) {
    this.image = new Image();
    this.image.src = imagePath;
    this.imageURL = imageURL;
    this.originX = x;
    this.originY = y;
    this.x = x;
    this.y = y;
    this.radius = 3;
    this.speed = 0.03;
    this.step = Math.random() * 360;
    this.width = 50;
  }

  increment() {
    this.x = this.originX - (this.width / 2) + this.radius *
      Math.cos(this.speed * this.step);
    this.y = this.originY - (this.width / 2) + this.radius *
      Math.sin(this.speed * this.step);
    ++this.step;
  }
}

export default Icon
