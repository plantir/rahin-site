export const state = () => ({})
export const actions = {
  async nuxtClientInit({ state, commit, dispatch }, { req, $axios, $service }) {
    return new Promise((resolve, reject) => {
      resolve(true)
    })
  }
}
