import { useModalsStore } from "@/stores/modals";
const closed = 100;

interface modalInterface {
    storeName: string,
    modalTop: number,
    isMobile: boolean
}

export const closeModal = (modal: modalInterface) => {
    const storeModals = useModalsStore()
    storeModals.setModalState(modal.storeName, false)
    modal.modalTop = closed;
    if (modal.isMobile) document.body.classList.remove('global--no-scroll');
}