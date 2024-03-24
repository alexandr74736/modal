<template>
    <div class="input-file">
        <label for="upload" class="btn input-file__label" @drop="onDrop" @dragover.prevent @dragenter.prevent>
            <img :src="iconAdd" alt="Добавить" />
            <span>Добавить</span>
        </label>
        <input class="input-file__input" type="file" id="upload" />
    </div>
</template>

<script setup lang="ts">
import iconAdd from '@/assets/icons/plus_16.svg'


function onDrop(event: DragEvent) {
    console.log('Произошёл дроп ивент', event)
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables";


.input-file {
    border: none;
    border-radius: 8px;
    background-color: $bg-blue;
    border-radius: 6px;
    padding: 4px 8px;
    color: $text-blue;

    &__label {
        display: flex;
        gap: 8px;
        cursor: pointer;
    }

    &__input {
        display: none;
    }
}
</style>