const mobileWidth = 1024;

export const isMobileDevice = () => {
    return window.innerWidth <= mobileWidth
}