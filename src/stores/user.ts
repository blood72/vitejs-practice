// @ts-check
import { defineStore, acceptHMRUpdate } from 'pinia'

interface UserData {
  name: string,
  isAdmin: boolean,
}

/**
 * Simulate a login
 * @param {string} a
 * @param {string} p
 */
function apiLogin(a: string, p: string): Promise<object|never> {
  if (a === 'ed' && p === 'ed') {
    return Promise.resolve({ isAdmin: true })
  }

  if (p === 'ed') {
    return Promise.resolve({ isAdmin: false })
  }

  return Promise.reject(new Error('invalid credentials'))
}

export const useUserStore = defineStore({
  id: 'user',
  state: () => (<UserData>{
    name: 'Eduardo',
    isAdmin: true,
  }),
  actions: {
    logout(): void {
      this.$patch({
        name: '',
        isAdmin: false,
      })

      // we could do other stuff like redirecting the user
    },

    /**
     * Attempt to login a user
     * @param {string} user
     * @param {string} password
     */
    async login(user: string, password: string): Promise<void> {
      const userData = await apiLogin(user, password)

      this.$patch({
        name: user,
        ...userData,
      })
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
