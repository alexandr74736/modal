<template>
    <div class="plug">
        <p class="plug__title p-regular">
            Название организации, логотип и описание
        </p>
        <div class="plug__content">
            <InputFile />
        </div>
    </div>
</template>

<script setup lang="ts">
import InputFile from '@/components/InputFile.vue'
</script>

<style lang="scss" scoped>
.plug {
    display: flex;
    flex-direction: column;
    gap: 20px;

    &__title {
        display: block;
        text-align: center;
    }

    &__content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>