import { defineStore, acceptHMRUpdate } from 'pinia'
import { useUserStore } from './user';

interface RawItem {
  name: string,
  amount: number,
}

export const useCartStore = defineStore({
  id: 'cart',
  state: () => ({
    rawItems: <Array<string>>[],
  }),
  getters: {
    items: (state): Array<RawItem> =>
      state.rawItems.reduce((items: Array<RawItem>, item: string) => {
        const existingItem = items.find((it: RawItem): boolean => it.name === item)

        if (! existingItem) {
          items.push({ name: item, amount: 1 })
        }
        else {
          existingItem.amount++
        }

        return items
      }, []),
  },
  actions: {
    /**
     * Add item to the cart
     * @param {string} name
     */
    addItem(name: string): void {
      this.rawItems.push(name)
    },

    /**
     * Remove item from the cart
     * @param {string} name
     */
    removeItem(name: string): void {
      const i = this.rawItems.lastIndexOf(name)
    },

    async purchaseItems(): Promise<number|void> {
      const user = useUserStore()
      if (! user.name) {
        return
      }

      console.log('Purchasing', this.items)
      const n = this.items.length
      this.rawItems = []

      return n
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCartStore, import.meta.hot))
}
