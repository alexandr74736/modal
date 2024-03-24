export const isMobileDevice = () => {
    let mobile;
    window.innerWidth >= 1024 ? mobile = false : mobile = true;
    return mobile
}