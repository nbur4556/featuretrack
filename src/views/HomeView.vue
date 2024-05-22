<script setup lang="ts">
import TaskTable from '../components/TaskTable.vue'
import sampleData from '../data/sampleTasks.json'
import type { Task } from '../types/Task.ts'

const tasks: Array<Task> = sampleData as Array<Task>
</script>

<template>
  <nav class="navbar p-4">
    <h1 class="font-bold text-xl">FeatureTrack</h1>
  </nav>
  <main class="container mx-auto p-8">
    <TaskTable v-bind:tasks="tasks" />
  </main>
</template>
