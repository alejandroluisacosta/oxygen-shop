class Slider {
    constructor(id) {
        this._id = id;
        this._images = [];
        this._currImgIndex = 0;
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

    carousel() {
            // if (currImgIndex === this.images.length - 1) {
            //     this.images[this.images.length - 1].classList.add("hidden");
            //     this.images[0].classList.remove("hidden");
            // }
            // else {
            //     this.images[currImgIndex].classList.add("hidden");
            //     this.images[currImgIndex + 1].classList.remove("hidden");
            // }

            const leftButton = document.getElementById("slider__btn-left");
            const rightButton = document.getElementById("slider__btn-right");
            
            leftButton.addEventListener("click", () => {
                slider.images[this._currImgIndex].classList.add("hidden");
                if (this._currImgIndex === 0)
                    this._currImgIndex = slider.images.length - 1;
                else
                    this._currImgIndex--;
                slider.images[this._currImgIndex].classList.remove("hidden");
            })

            rightButton.addEventListener("click", () => {
                slider.images[this._currImgIndex].classList.add("hidden");
                if (this._currImgIndex === slider.images.length - 1)
                    this._currImgIndex = 0;
                else
                    this._currImgIndex++;
                slider.images[this._currImgIndex].classList.remove("hidden");
            })
    }
}
const slider = new Slider("slider");

slider.setImages();
slider.carousel();
