<template>
    <dialog open class="modal-wrapper" ref="modalRef">
        <div class="modal" :class="modal.modalName">
            <div class="modal__header">
                <h4 class="modal__title">{{ props.title }}</h4>
                <button class="btn modal__close" @click="close">
                    <img class="modal__close-icon" :src="closeModalIcon" alt="Закрыть" />
                </button>
            </div>
            <div class="modal__body">
                <ModalContent v-if="modalContent" :title="props.modalContent?.title"
                    :submit="props.modalContent?.submit" :description="props.modalContent?.description" />
                <ModalContentPlug v-else />
            </div>
        </div>
        <div class="modal__shadow" v-if="!modal.isMobile && shadow"></div>
    </dialog>
</template>

<script setup lang="ts">
import ModalContent from '@/components/ModalContent.vue'
import ModalContentPlug from '@/components/ModalContentPlug.vue'
import closeModalIcon from '@/assets/icons/closeModalIcon.svg'

import { ref, watchEffect, onMounted } from 'vue'
import { isMobileDevice } from '@/composables/isMobileDevice'
import { openModal } from '@/composables/openModal'
import { closeModal } from '@/composables/closeModal'
import { setModalNoScroll } from '@/composables/setModalNoScroll'
import { useModalsStore } from "@/stores/modals";

const props = defineProps({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    modalContent: {
        type: Object,
        required: false
    },
    shadow: {
        type: Boolean,
        required: false
    },
})

const modal = ref({
    modalTop: 100,
    isMobile: false,
    modalName: `modal-${props.name}`,
    storeName: props.name,
});
const modalRef = ref(null);
const storeModals = useModalsStore();

if (storeModals[modal.value.storeName]) {
    openModal(modal.value)
}

const close = () => {
    closeModal(modal.value);
    setModalNoScroll(false);
}

onMounted(() => {
    watchEffect(() => {
        isMobileDevice() ? modal.value.isMobile = true : modal.value.isMobile = false;
    })
});
</script>

<style lang="scss">
@import "@/assets/scss/variables";

.modal {
    width: 100%;
    max-width: 770px;
    height: 100%;
    background: $true-white;
    box-shadow: $shadow-modal;
    border: 1px solid $border-modal;
    overflow: hidden;
    margin-top: auto;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    color: $text-main-dark;
    padding: 24px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    &-wrapper {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 1001;
    }

    @include break-lg() {
        max-width: unset;
        transform: translateX(100%);
        top: 0;
        left: 0;
    }

    &__body {
        padding: 0;
        height: 100%;

        @include break-lg() {
            padding: 0;
        }
    }

    &__content {
        height: 100%;
        color: $text-main-dark;
    }

    &__shadow {
        z-index: 999;
        pointer-events: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: block;
        background: $shade;
        opacity: .7;
    }

    &__close {
        display: flex;
        border: none;
        cursor: pointer;
        position: absolute;
        background: none;
        height: 64px;
        width: 64px;
        padding: 0;
        right: 0;
        top: 0;
    }

    &__close-icon {
        display: block;
        height: 24px;
        width: 24px;
        margin: auto;

        svg {
            display: block;
            width: 24px;
            height: 24px;
            margin: 0;
        }
    }
}
</style>