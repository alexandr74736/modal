import { useModalsStore } from "@/stores/modals";
import { setModalNoScroll } from "./setModalNoScroll";
const opened = 0;

interface modalInterface {
    storeName: string,
    modalTop: number,
    isMobile: boolean
}

export const openModal = (modal: modalInterface) => {
    const storeModals = useModalsStore()
    storeModals.setModalState(modal.storeName, true)
    modal.modalTop = opened;
    if (modal.isMobile) document.body.classList.add('global--no-scroll');
    setModalNoScroll(true)
}