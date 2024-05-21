<script setup lang="ts">
import { defineProps } from 'vue'
import type { Task } from '../types/Task.ts'

const props = defineProps<{ tasks: Array<Task> }>()

console.log(props.tasks)
</script>

<template>
  <h1>Task Table</h1>
</template>
