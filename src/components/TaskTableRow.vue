<script setup lang="ts">
import type { Task } from '../types/Task.ts'

const { task } = defineProps<{ task: Task }>()

// maps task parameters to tailwind classes
const taskColorKey = {
  not_started: 'bg-statustodo',
  in_progress: 'bg-statuscurrent',
  pull_request: 'bg-statuscurrent',
  done: 'bg-statusdone',
  bin: 'bg-statusbin',
  high: 'text-priorityhigh',
  mid: 'text-prioritymid',
  low: 'text-prioritylow',
  assigned: 'text-appassigned',
  suggested: 'text-appsuggestion',
  unassigned: 'text-appunassigned',
  declined: 'text-appdeclined',
  bug: 'text-typebug',
  improvement: 'text-typeimprovement',
  feature: 'text-typefeature'
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
      <div class="badge badge-info text-white" v-bind:class="statusClass">{{ task.status }}</div>
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
