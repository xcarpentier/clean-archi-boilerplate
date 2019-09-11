import { navigationContextDependencies } from '../../../../apps/web/src/navigationcontext/configuration/navigationContextDependencies'

export interface DependenciesType {
  [key: string]: any
}

const dependencies: DependenciesType = {
  ...navigationContextDependencies,
}

export default dependencies
