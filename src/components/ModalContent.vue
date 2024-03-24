<template>
    <div class="modal__content">
        <div class="modal__content-header" ref="modalContentHeaderRef">
            <p class="modal__content-title">
                {{ props.title }}
            </p>
            <p class="modal__content-description body-default" v-if="description">
                {{ props.description }}
            </p>
        </div>
        <div class="modal__content-wrapper global--hide-bar" ref="modalContentWrapperRef">Content</div>
        <div class="modal__content-submit-wrapper" v-if="props.submit">
            <button class="modal__content-submit-button mobile-button">
                {{ props.submit }}
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'


const props = defineProps({
    title: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false
    },
    submit: {
        type: String,
        required: false
    },
})

const modalContentHeaderRef = ref(null);
const modalContentWrapperRef = ref(null);
</script>


<style lang="scss">
@import "@/assets/scss/variables";

.modal__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &-header {
        padding: 64px 40px 16px 40px;
        cursor: default;

        &.shadow {
            box-shadow: 0px -8px 24px #00000040;
        }

        @include break-lg() {
            padding: 56px 20px 12px 20px;
        }
    }

    &-description {
        margin-top: 12px;

        @include break-lg() {
            margin-top: 8px;
        }
    }

    &-wrapper {
        overflow-y: auto;
        padding: 0 40px 16px 40px;
        flex: 1;

        @include break-lg() {
            padding: 0 20px 12px 20px;
        }
    }

    &-submit {
        &-wrapper {
            width: 100%;
            padding: 16px 40px 40px;
            z-index: 100;

            @include break-lg() {
                max-width: unset;
                padding: 16px 20px;
            }
        }

        &-button {
            border: none;
            border-radius: 4px;
            height: 48px;
            color: $text-main-dark;
            background: $bg-blue;
            width: 100%;
            cursor: pointer;
        }
    }
}
</style>