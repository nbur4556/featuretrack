<script setup lang="ts">
import type { Task } from '../types/Task.ts'

const { task } = defineProps<{ task: Task }>()

// maps task parameters to tailwind classes
const taskColorKey = {
  not_started: 'badge-secondary',
  in_progress: 'badge-primary',
  pull_request: 'badge-primary',
  done: 'badge-success',
  bin: 'badge-error',
  high: 'badge-error',
  mid: 'badge-warning',
  low: 'badge-primary',
  assigned: 'badge-success',
  suggested: 'badge-warning',
  unassigned: 'badge-primary',
  declined: 'badge-error',
  bug: 'badge-error',
  improvement: 'badge-warning',
  feature: 'badge-success'
}

const statusClass = taskColorKey[task.status.toLowerCase().split(' ').join('_')]
const priorityClass = taskColorKey[task.priority.toLowerCase()]
const approvalClass = taskColorKey[task.approval.toLowerCase()]
const typeClass = taskColorKey[task.type.toLowerCase()]
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
      <div class="badge" v-bind:class="statusClass">{{ task.status }}</div>
    </td>
    <td>
      <div class="badge badge-outline" v-bind:class="priorityClass">{{ task.priority }}</div>
    </td>
    <td>
      <div class="badge badge-outline" v-bind:class="approvalClass">{{ task.approval }}</div>
    </td>
    <td>
      <div class="badge badge-outline" v-bind:class="typeClass">{{ task.type }}</div>
    </td>
  </tr>
</template>
