import { navigationContextDependencies } from '../../navcontext/configuration/navigationContextDependencies'

export interface DependenciesType {
  [key: string]: any
}

const dependencies: DependenciesType = {
  ...navigationContextDependencies,
}

export default dependencies
