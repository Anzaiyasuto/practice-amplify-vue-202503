<template>
  <div class="about">
    <h1>This is an about page</h1>
    <TodoList />
  </div>
</template>

<script setup lang="ts">
import TodoList from '@/components/TodoList.vue'
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
