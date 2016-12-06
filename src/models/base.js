/**
 * Created by Glacier on 16/10/9.
 */
export default {
  namespace: 'base',
  state: {
    // 遮罩层
    isMasking: false,
    // 禁止滚动
    isScroll: true
  },
  reducers: {
    masking(state) {
      return { ...state, isMasking: true, isScroll: false }
    },
    unmask(state) {
      return { ...state, isMasking: false, isScroll: true }
    }
  }
}
