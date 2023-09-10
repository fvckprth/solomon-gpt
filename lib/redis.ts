import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: 'https://optimal-seagull-38319.upstash.io',
  token: 'AZWvASQgNTRkNTZhMjItYTY5OC00MjFhLWIzOTItZWYzODdkMjA5MmNmYjUxY2Y5OTI1NzljNDBhNGE2N2NhZmRiNzNmNmZhZjg=',
})

export async function setData(key: string, value: string) {
  await redis.set(key, value);
}

export async function getData(key: string) {
  return await redis.get(key);
}

export default redis;