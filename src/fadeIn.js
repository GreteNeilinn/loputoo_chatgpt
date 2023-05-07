function fadeIn(el, binding) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    el.style.opacity = 1;
                    el.style.transition = 'opacity 2s'; // Transition duration updated to 2 seconds
                } else {
                    el.style.opacity = 0;
                }
            });
        }, {
            threshold: 0.1,
        }
    );

    observer.observe(el);
}

export default {
    mounted: fadeIn,
};