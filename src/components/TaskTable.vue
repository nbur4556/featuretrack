<script setup lang="ts">
import type { Task } from '../types/Task.ts'
import TaskTableRow from './TaskTableRow.vue'

const { tasks } = defineProps<{ tasks: Array<Task> }>()
</script>

<template>
  <table class="table table-sm">
    <thead>
      <th>Name</th>
      <th>Description</th>
      <th>Status</th>
      <th>Priority</th>
      <th>Approval</th>
      <th>Type</th>
    </thead>
    <tbody>
      <TaskTableRow v-for="task in tasks" v-bind:task="task" />
    </tbody>
  </table>
</template>
