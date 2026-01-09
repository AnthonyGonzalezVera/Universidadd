import 'dotenv/config'
import { defineConfig, env } from 'prisma/config'

export default defineConfig({
  schema: 'prisma/schema-users.prisma',
  datasource: {
    url: env('DATABASE_URL_USERS')
  },
})