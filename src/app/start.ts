import { BackendApp } from './backend-app'
import { logger } from '../modules/shared/infrastructure/logger'

try {
  new BackendApp().start()
} catch (e) {
  logger.error(e)
  process.exit(1)
}

process.on('uncaughtException', err => {
  logger.error('uncaughtException', err)
  process.exit(1)
})
