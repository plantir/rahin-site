import { NuxtAxiosInstance } from 'vrwebdesign-nuxt/modules/nuxt-axios/types'
import { BaseService } from './helper/BaseService'

export default class AuthService extends BaseService<any> {
  constructor(public $axios: NuxtAxiosInstance) {
    super($axios)
  }
  register(mobile): Promise<{ data: any }> {
    return this.$axios.post('auth/register', { mobile })
  }

  login({ mobile, password }): Promise<{ data: any }> {
    return this.$axios.post('auth/login', { mobile, password })
  }
}

declare module 'vue/types/vue' {
  interface NuxtServiceInstance {
    auth: AuthService
  }
}
declare module '@nuxt/types' {
  interface NuxtServiceInstance {
    auth: AuthService
  }
}
