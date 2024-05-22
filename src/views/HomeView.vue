<script setup lang="ts">
import TaskTable from '../components/TaskTable.vue'
import sampleData from '../data/sampleTasks.json'
import type { Task } from '../types/Task.ts'

const tasks: Array<Task> = sampleData as Array<Task>
</script>

<template>
  <main>
    <h1 class="text-3xl font-bold underline">FeatureTrack</h1>

    <TaskTable v-bind:tasks="tasks" />
  </main>
</template>
