<script setup lang="ts">
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
      <div class="badge badge-info bg-appassigned text-white">{{ task.status }}</div>
    </td>
    <td>
      <div class="badge badge-outline text-appsuggestion">{{ task.priority }}</div>
    </td>
    <td>
      <div class="badge badge-outline text-appunassigned">{{ task.approval }}</div>
    </td>
    <td>
      <div class="badge badge-outline text-appdeclined">{{ task.type }}</div>
    </td>
  </tr>
</template>
