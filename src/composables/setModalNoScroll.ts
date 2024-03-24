export const setModalNoScroll = (value: boolean) => {
    const bodyNoScroll = () => {
        document.body.classList.add('global--no-scroll');
    };
    const bodyAddScroll = () => {
        document.body.classList.remove('global--no-scroll');
    };

    if (value) {
        bodyNoScroll()
    } else {
        bodyAddScroll()
    }

}