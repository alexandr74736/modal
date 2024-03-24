import { useModalsStore } from "@/stores/modals";
import { setModalNoScroll } from "./setModalNoScroll";
const opened = 0;

interface Modal {
    storeName: string,
    modalTop: number,
    isMobile: boolean
}

export const openModal = (modal: Modal) => {
    const storeModals = useModalsStore()
    storeModals.setModalState(modal.storeName, true)
    modal.modalTop = opened;
    if (modal.isMobile) setModalNoScroll(true)
}