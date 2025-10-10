import { defineConfig, env } from 'harmonix/config'

export default defineConfig({
  token: env('DISCORD_TOKEN'),
  clientOptions: {
    intents: ['Guilds']
  }
})
