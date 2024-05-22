<script setup lang="ts">
import { defineProps } from 'vue'
import type { Task } from '../types/Task.ts'

const { task } = defineProps<{ task: Task }>()
</script>

<template>
  <tr>
    <td>
      <div class="font-bold">{{ task.name }}</div>
    </td>
    <td>
      <div>{{ task.description }}</div>
    </td>
    <td>
      <div class="badge badge-info">{{ task.status }}</div>
    </td>
    <td>
      <div class="badge badge-info badge-outline">{{ task.priority }}</div>
    </td>
    <td>
      <div class="badge badge-info badge-outline">{{ task.approval }}</div>
    </td>
    <td>
      <div class="badge badge-info badge-outline">{{ task.type }}</div>
    </td>
  </tr>
</template>
