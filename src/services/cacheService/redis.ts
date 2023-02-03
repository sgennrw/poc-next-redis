import Redis, { RedisOptions } from 'ioredis';
import config from '@/config';
const redisConfig = config.redis;

export const createRedisInstance = () => {
  try {
    const options: RedisOptions = {
      host: redisConfig.host,
      lazyConnect: true,
      showFriendlyErrorStack: true,
      enableAutoPipelining: true,
      maxRetriesPerRequest: 0,
      retryStrategy: (times: number) => {
        if (times > 3) {
          throw new Error(`[Redis] Could not connect after ${times} attempts`);
        }

        return Math.min(times * 200, 1000);
      },
    };

    if (redisConfig.port) {
      options.port = redisConfig.port;
    }

    if (redisConfig.password) {
      options.password = redisConfig.password;
    }

    const redis = new Redis(options);

    redis.on('error', (error: unknown) => {
      console.warn('[Redis] Error connecting', error);
    });

    return redis;
  } catch (e) {
    throw new Error(`[Redis] Could not create a Redis instance`);
  }
};
