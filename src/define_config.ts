import type { ConnectionOptions, JobsOptions, WorkerOptions, QueueOptions } from 'bullmq'

type Config = {
  connection: ConnectionOptions
  queue: string
  queues: string[]
  options: JobsOptions
  queueOptions?: Omit<QueueOptions, 'connection' | 'defaultJobOptions'>
  workerOptions?: Omit<WorkerOptions, 'connection' | 'concurrency'>

  enableSerializedJob?: boolean

  serialization?: {
    reducers?: Record<string, (value: any) => any>
    revivers?: Record<string, (value: any) => any>
  }
}

export function defineConfig(config: Config) {
  return config
}
