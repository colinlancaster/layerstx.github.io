class NavigationControl {
    constructor() {
        this.primaryNav = document.querySelector('.nav-list');
        this.navToggle = document.querySelector('.nav-toggle');

        this.navToggle.addEventListener('click', () => {
            const visibility = this.primaryNav.getAttribute('data-visible');

            if (visibility === 'false') {
                this.primaryNav.setAttribute('data-visible', true);
                this.navToggle.setAttribute('aria-expanded', true);

                this.buildIcon('burger');
            } else if (visibility === 'true') {
                this.primaryNav.setAttribute('data-visible', false);
                this.navToggle.setAttribute('aria-expanded', false);

                this.buildIcon('bars');
            }
        });
    }

    buildIcon(type) {
        this.navToggle.innerHTML = '';
        const icon = document.createElement('i');

        if (type === 'bars') {
            icon.classList.add('fa-solid', 'fa-bars');
        } else {
            icon.classList.add('fa-solid', 'fa-x');
        }

        this.navToggle.appendChild(icon);
    }

    static Create() {
        return new NavigationControl();
    }
}

NavigationControl.Create();

function getYear() {
    const date = new Date();
    return date.getFullYear();
}

function applyYearToFooter() {
    const yearSpan = document.querySelector('.date');
    yearSpan.innerHTML = getYear();
}

applyYearToFooter();

class Spinner {
    constructor () {
        this.x = 0;
        this.timer = null;
        this.#setupButtons();
    }

    #setupButtons() {
        const prevEl = document.getElementById('prev');
        const nextEl = document.getElementById('next');

        prevEl.addEventListener('click', () => {
            this.x = this.x + 45;
            clearTimeout(this.timer);
            this.#updateGallery();
        });

        nextEl.addEventListener('click', () => {
            this.x = this.x - 45;
            clearTimeout(this.timer);
            this.#updateGallery();
        });
    }

    #updateGallery() {
        const imageContainerEl = document.querySelector('.spinner');
        imageContainerEl.style.transform = `perspective(1000px) rotateY(${this.x}deg)`;
    }

    static Go() {
        return new Spinner();
    }
}

Spinner.Go();
