import { useModalsStore } from "@/stores/modals";
import { setModalNoScroll } from "./setModalNoScroll";
const opened = 0;
const noScrollClass = 'global--no-scroll';

interface Modal {
    storeName: string,
    modalTop: number,
    isMobile: boolean
}

export const openModal = (modal: Modal) => {
    const storeModals = useModalsStore()
    storeModals.setModalState(modal.storeName, true)
    modal.modalTop = opened;
    if (modal.isMobile) document.body.classList.add(noScrollClass);
    setModalNoScroll(true)
}