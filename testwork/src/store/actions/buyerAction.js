export const SET_PAGINATION = 'SET_PAGINATION'

export function setPagination(pagesCol) {
    return {
      type: SET_PAGINATION,
      pagesCol: pagesCol
    }
  }

  export const SORT_BUYERS = 'SORT_BUYERS'

  export function sortBuyers(num, name) {
      return {
        type: SORT_BUYERS,
        num: num,
        name: name
      }
    }
