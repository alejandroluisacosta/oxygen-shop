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

            const leftButton = document.getElementById("slider__btn-left");
            const rightButton = document.getElementById("slider__btn-right");
            
            leftButton.addEventListener("click", () => {
                slider.images[this._currImgIndex].classList.add("hidden");
                if (this._currImgIndex === 0)
                    this._currImgIndex = slider.images.length - 1;
                else
                    this._currImgIndex--;
                slider.images[this._currImgIndex].classList.remove("hidden");
                clearInterval(carouselInterval);
                console.log(this._currImgIndex);
            })

            rightButton.addEventListener("click", () => {
                slider.images[this._currImgIndex].classList.add("hidden");
                if (this._currImgIndex === slider.images.length - 1)
                    this._currImgIndex = 0;
                else
                    this._currImgIndex++;
                slider.images[this._currImgIndex].classList.remove("hidden");
                clearInterval(carouselInterval);
                console.log(this._currImgIndex);
            })

            let carouselInterval = setInterval(() => {
                slider.images[this._currImgIndex].classList.add("hidden");
                if (this._currImgIndex === slider.images.length - 1)
                    this._currImgIndex = 0;
                else
                    this._currImgIndex++;
                slider.images[this._currImgIndex].classList.remove("hidden");
                console.log(this._currImgIndex);
            }, 2000);
    }
}
const slider = new Slider("slider");

slider.setImages();
slider.carousel();
