<script setup lang="ts">
import { defineProps } from 'vue'
import type { Task } from '../types/Task.ts'
import TaskTableRow from './TaskTableRow.vue'

const { tasks } = defineProps<{ tasks: Array<Task> }>()
</script>

<template>
  <table class="table table-sm">
    <tbody>
      <TaskTableRow v-for="task in tasks" v-bind:task="task" />
    </tbody>
  </table>
</template>
