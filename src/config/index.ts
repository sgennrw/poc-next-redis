const config = {
  redis: {
    host: process.env.REDIS_HOST || '0.0.0.0',
    port: +(process.env.REDIS_PORT || 6379),
    password: process.env.REDIS_PASSWORD,
    options: {
      ttl: +(process.env.REDIS_TTL || 0),
    },
  },
};

export default config;
