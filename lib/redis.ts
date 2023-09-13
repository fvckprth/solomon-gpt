import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: 'https://optimal-seagull-38319.upstash.io',
  token: 'AZWvASQgNTRkNTZhMjItYTY5OC00MjFhLWIzOTItZWYzODdkMjA5MmNmYjUxY2Y5OTI1NzljNDBhNGE2N2NhZmRiNzNmNmZhZjg=',
})

export default redis;