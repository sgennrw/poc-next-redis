import { createRedisInstance } from '@/services/cacheService/redis';
import config from '@/config';

const { ttl } = config.redis.options;

const redis = createRedisInstance();

export const get = async (key: string) => {
  if (!key) {
    return null;
  }

  return redis.get(key);
};

export const set = async (key: string, data: any) => {
  if (!key) {
    throw new Error('Null cache key is not allowed');
  }

  const args: [string, string | number] = [key, JSON.stringify(data)];
  if (ttl > 0) {
    args.push('PX'); // milliseconds
    args.push(ttl);
  }

  return redis.set(...args);
};
