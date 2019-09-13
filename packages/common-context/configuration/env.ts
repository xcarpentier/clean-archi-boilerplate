export let env: any
export let ENV: any
export const setEnv = (envToSet: any) => {
  env = envToSet
  ENV = envToSet.env
}
