<template>
  <header>
    <section class="wrapper">
      <h1>Здесь мог быть ваш хедер</h1>
    </section>
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
    <section class="wrapper">
      <h6>Здесь мог быть ваш футер</h6>
    </section>
  </footer>

  <ModalComponent :class="storeModals.organisations ? 'global--visibility-visible' : 'global--visibility-hidden'"
    name="organisations" :shadow="true" title="Организация" :modalContent="modalHasContent" />
</template>

<script setup lang="ts">
import ModalComponent from './components/ModalComponent.vue'
import { ref, computed } from 'vue'
import { useModalsStore } from '@/stores/modals'

const storeModals = useModalsStore()
const modalContent = ref<object | null>({
  // Пример входных данных
  // title: "Title",
  // submit: "Тестовая кнопка",
  // description: "Описание"
})

const modalHasContent = computed<object | null>(() => {
  if (modalContent.value && Object.keys(modalContent.value).length) {
    return modalContent.value
  } else return null
}) as object || null;
</script>

<style scoped lang="scss">
@import "@/assets/scss/general";

.main {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.section {
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