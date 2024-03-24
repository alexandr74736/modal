import { defineStore } from 'pinia';

export const useModalsStore = defineStore("modals", {
  state: () => ({
    organisations: false,
  } as Record<string, boolean>),
  actions: {
    setModalState(modal: string, state: boolean) {
      this[modal] = state;
    },
  },
});