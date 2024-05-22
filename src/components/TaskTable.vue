<script setup lang="ts">
import { defineProps } from 'vue'
import type { Task } from '../types/Task.ts'
import TaskTableRow from './TaskTableRow.vue'

const { tasks } = defineProps<{ tasks: Array<Task> }>()
</script>

<template>
  <table>
    <TaskTableRow v-bind:task="tasks[0]" />
    <TaskTableRow v-bind:task="tasks[1]" />
    <TaskTableRow v-bind:task="tasks[2]" />
  </table>
</template>
