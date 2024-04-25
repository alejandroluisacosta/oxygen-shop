class Slider {
    constructor(id) {
        this._id = id;
        this._images = [];
    }
    get id() {
        return this._id;
    }

    get images() {
        return this._images;
    }

    getImages() {
        const slider = document.getElementById(this.id);
        for (let i = 0; i < slider.children.length; i++) {
            if (!(slider.children[i].classList.contains("slider__btn-left") || slider.children[i].classList.contains("slider__btn-right"))) {
                const image = slider.children[i];
                this.images.push(image);
        }}
        return this.images;
    }

    carrousel(currImgIndex) {
        setTimeout((currImgIndex) => {
            if (currImgIndex === this.images.length - 1) {
                this.images[this.images.length - 1].classList.add("hidden");
                this.images[0].classList.currImgIndex("hidden");
                this.carrousel(0);
            }
            else {
                this.images[currImgIndex].classList.add("hidden");
                this.images[currImgIndex + 1].classList.currImgIndex("hidden");
                this.carrousel[currImgIndex + 1];
            }
            
        }, 3000)
    }
}
const test = new Slider("slider");

console.log(test.getImages())