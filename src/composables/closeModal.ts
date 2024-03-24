import { useModalsStore } from "@/stores/modals";
import { setModalNoScroll } from "./setModalNoScroll";

const closed = 100;

interface Modal {
    storeName: string,
    modalTop: number,
    isMobile: boolean
}

export const closeModal = (modal: Modal) => {
    const storeModals = useModalsStore()
    storeModals.setModalState(modal.storeName, false)
    modal.modalTop = closed;
    if (modal.isMobile) setModalNoScroll(false)
}