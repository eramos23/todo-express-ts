import { Server } from './server'

export class BackendApp {
    server?: Server
  
    start (): void {
      this.server = new Server()
      return this.server.listen()
    }
  }
  