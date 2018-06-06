/*
 * @Author: 姬兵兵 
 * @Date: 2018-06-06 09:00:30 
 * @Last Modified by:   姬兵兵 
 * @Last Modified time: 2018-06-06 09:00:30 
 */
import { Store, install } from './store'
import { mapState, mapMutations, mapGetters, mapActions, createNamespacedHelpers } from './helpers'

export default {
  Store,
  install,
  version: '__VERSION__',
  mapState,
  mapMutations,
  mapGetters,
  mapActions,
  createNamespacedHelpers
}
