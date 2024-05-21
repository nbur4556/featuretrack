export type TaskStatus = 'Not Started' | 'In Progress' | 'Pull Request' | 'Bin' | 'Done';
export type TaskPriority = 'High' | 'Mid' | 'Low';
export type TaskApproval = 'Assigned' | 'Suggested' | 'Unassigned' | 'Declined';
export type TaskType = 'Bug' | 'Improvement' | 'Feature';

export interface Task {
    name: string,
    description: string,
    status: TaskStatus,
    priority: TaskPriority,
    approval: TaskApproval,
    type: TaskType,
    development: string,
    pullRequest?: string,
    ticket?: string,
    relatedTask?: Task,
    blockedBy?: Task,
    blocking?: Task,
    created: string,
    updated: string,
}
