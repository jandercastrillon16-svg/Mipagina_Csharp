window.registerScrollHandler = (dotNetHelper) => {
    window.addEventListener('scroll', () => {
        dotNetHelper.invokeMethodAsync('HandleScroll', window.scrollY);
    });
};
