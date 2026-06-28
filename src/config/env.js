export const env ={
    port: parseInt(process.env.PORT || 5000),
    nodeEnv:process.env.NODE_ENV || 'development',
    database:{
        url:process.env.DATABASE_URL ,
    },

    jwt:{
        accessSceret:process.env.JWT_ACCESS_SECRET,
        refreshSecret:process.env.JWT_REFRESH_SECRET,
        accessExpiry:'15m',
        refreshExpiry:'7d',
    },

    redis:{
        url:process.env.REDIS_URL|| 'redis://localhost:6379',
    },

};