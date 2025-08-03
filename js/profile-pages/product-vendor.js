class GalleryFilter {
    filtersSelector = ".cs-button";
    imagesSelector = ".cs-listing";
    activeClass = "cs-active";
    hiddenClass = "cs-hidden";

    constructor() {
        const $filters = document.querySelectorAll(this.filtersSelector);
        this.$activeFilter = $filters[0];
        this.$images = document.querySelectorAll(this.imagesSelector);

        this.$activeFilter.classList.add(this.activeClass);

        for (const $filter of $filters) {
            $filter.addEventListener("click", () => this.onClick($filter));
        }
    }

    onClick($filter) {
        this.filter($filter.dataset.filter);

        const { activeClass } = this;

        this.$activeFilter.classList.remove(activeClass);
        $filter.classList.add(activeClass);

        this.$activeFilter = $filter;
    }

    filter(filter) {
        const showAll = filter == "all";
        const { hiddenClass } = this;

        for (const $image of this.$images) {
            const show = showAll || $image.dataset.category == filter;
            $image.classList.toggle(hiddenClass, !show);
        }
    }
}

new GalleryFilter();
                            