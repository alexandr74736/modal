const noScrollClass = 'global--no-scroll';

export const setModalNoScroll = (value: boolean) => {
    const bodyNoScroll = () => {
        document.body.classList.add(noScrollClass);
    };
    const bodyAddScroll = () => {
        document.body.classList.remove(noScrollClass);
    };

    return value ? bodyNoScroll() : bodyAddScroll()
}