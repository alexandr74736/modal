<template>
  <header>
    <div class="wrapper">
      <h1>Здесь мог быть ваш хеддер</h1>
    </div>
  </header>

  <main class="main">
    <section class="section main__section">
      <h2 class="section__header">Нажмите, для того, чтобы открыть модальное окно</h2>
      <div class="section__content">
        <button class="btn" @click="storeModals.setModalState('organisations', true)">Кнопка</button>
      </div>
    </section>
  </main>

  <footer>
    <div class="wrapper">
      <p>Здесь мог быть ваш футер</p>
    </div>
  </footer>

  <ModalComponent :class="storeModals.organisations ? 'global--visibility-visible' : 'global--visibility-hidden'"
    name="organisations" :shadow="true" title="Организация" :modalContent="modalContent" />
</template>

<script setup lang="ts">
import ModalComponent from './components/ModalComponent.vue'
import { ref } from 'vue'
import { useModalsStore } from '@/stores/modals'

const storeModals = useModalsStore()
const modalContent = ref({
  title: "Title",
  submit: "Тестовая кнопка",
  description: "Описание"
})
</script>

<style scoped lang="scss">
@import "@/assets/scss/general";

main {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;

  .btn {
    border: 1px solid lightgray;
    padding: 15px 25px;
    border-radius: 5px;
    background: none;
    color: #fff;
  }
}
</style>