import { asClass, createContainer } from 'awilix'
import { scopePerRequest } from 'awilix-express'
import { Application } from 'express'

import config from '../../env'
// datasource
// repository
// use-case

export const loadContainer = (app: Application): void => {
  const container = createContainer({
    injectionMode: 'CLASSIC'
  })
  // datasource
  container.register({
    //mongose: asClass(Connection).singleton()
  })
  // repository
  container.register({
    //campusRepository: asClass(AxiosCampusRepository).scoped()
  })
  // use-case
  container.register({
    //getCampusUseCase: asClass(GetCampusUseCase).scoped()
  })
  app.use(scopePerRequest(container))
}
