<script setup lang="ts">
import TaskTable from '../components/TaskTable.vue'
import type { Task } from '../types/Task.ts'

const tasks: Array<Task> = []
</script>

<template>
  <main>
    <h1>Hello World</h1>

    <TaskTable v-bind:tasks="tasks" />
  </main>
</template>
