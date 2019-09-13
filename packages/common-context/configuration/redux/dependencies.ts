import { navigationContextDependencies } from '../../navcontext/configuration/navigationContextDependencies'

const dependencies = {
  ...navigationContextDependencies,
}

export type DependenciesType = typeof dependencies

export default dependencies
