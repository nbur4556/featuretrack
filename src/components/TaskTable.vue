<script setup lang="ts">
import { defineProps } from 'vue'
import type { Task } from '../types/Task.ts'

const props = defineProps<{ tasks: Array<Task> }>()
const stringifiedData = props.tasks.toString();
console.log(stringifiedData);
</script>

<template>
  <h1>Task Table</h1>
  <p>{{stringifiedData}}</p>
</template>
