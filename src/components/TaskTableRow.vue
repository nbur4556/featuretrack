<script setup lang="ts">
import { defineProps } from 'vue'
import type { Task } from '../types/Task.ts'

const { task } = defineProps<{ task: Task }>()
</script>

<template>
  <tr>
    <td>{{ task.name }}</td>
    <td>{{ task.description }}</td>
    <td>{{ task.status }}</td>
    <td>{{ task.priority }}</td>
    <td>{{ task.approval }}</td>
    <td>{{ task.type }}</td>
  </tr>
</template>
