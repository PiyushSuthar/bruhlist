import { config } from 'dotenv'

config()

export const Config = {
    PORT: parseInt(process.env.PORT!) || 3000,
    NODE_ENV: process.env.NODE_ENV || 'development',
    IS_DEV: process.env.NODE_ENV !== 'production',
}