import { useModalsStore } from "@/stores/modals";
const closed = 100;
const noScrollClass = 'global--no-scroll';

interface Modal {
    storeName: string,
    modalTop: number,
    isMobile: boolean
}

export const closeModal = (modal: Modal) => {
    const storeModals = useModalsStore()
    storeModals.setModalState(modal.storeName, false)
    modal.modalTop = closed;
    if (modal.isMobile) document.body.classList.remove(noScrollClass);
}