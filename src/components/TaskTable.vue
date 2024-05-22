<script setup lang="ts">
import { defineProps } from 'vue'
import type { Task } from '../types/Task.ts'
import TaskTableRow from './TaskTableRow.vue'

const { tasks } = defineProps<{ tasks: Array<Task> }>()
</script>

<template>
  <table>
    <TaskTableRow v-for="task in tasks" v-bind:task="task" />
  </table>
</template>
