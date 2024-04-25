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

    setImages() {
        const slider = document.getElementById(this.id);
        const images = Array.from(slider.children);
        this._images = images;
    }

    carrousel(currImgIndex) {
        setTimeout(() => {
            if (currImgIndex === this.images.length - 1) {
                this.images[this.images.length - 1].classList.add("hidden");
                this.images[0].classList.remove("hidden");
                this.carrousel(0);
            }
            else {
                this.images[currImgIndex].classList.add("hidden");
                this.images[currImgIndex + 1].classList.remove("hidden");
                this.carrousel(currImgIndex + 1);
            }
            
        }, 2000)
    }


}
const slider = new Slider("slider");

slider.setImages();
slider.carrousel(0);