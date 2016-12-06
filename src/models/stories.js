/**
 * Created by Glacier on 16/9/18.
 */
import RichTextEditor               from 'react-rte'
import { hashHistory }              from 'dva/router'
import moment                       from 'moment'
import { list, create, getDetail, del } from '../services/stories'
import { message, notification }    from 'antd'


export default {
  namespace: 'stories',
  state: {
    // 用户故事列表
    list: [],
    // 用户故事富文本编辑内容
    rte: {
      value: RichTextEditor.createEmptyValue(),
      content: '',
      isError: true,
      errorMsg: '请输入故事描述!'
    },
    // 当前故事
    currentStory: {
      id: '1',
      name: '',
      time: null,
      charge: [],
      status: 0
    },
    // 侧边栏类型 create: 新建 update: 编辑
    sideType: 'create',
    // 加载中
    isLoading: false,
    // 侧边栏展示状态
    isSidebarShow: false,
    // 按钮加载中
    isIconLoading: false
  },
  subscriptions: {
    setup({ dispatch, history }) {
      // 页面初始化
      history.listen(location => {
        if ( location.pathname === '/stories' ) {
          dispatch({
            type: 'list'
          });
        }
      });
    }
  },
  effects: {
    // 列表初始化
    *list({} ,{ call, put }) {
      yield put({
        type: 'loading'
      });
      const { data } = yield call(list);
      if (data) {
        yield put({
          type: 'querySuccess',
          payload: {
            list: data.data,
            isLoading: false
          }
        });
      }
    },
    // 保存用户故事
    *save({ payload }, { call, put }) {
      yield put({
        type: 'iconLoading',
        payload: {
          isIconLoading: true
        }
      });
      const { data } = yield call(create, { payload });
      if (data && data.success) {
        yield put({
          type: 'createSuccess',
          payload: data.data
        });
        yield put({
          type: 'base/unmask'
        });
        message.success('保存成功');
      } else {
        message.error('保存失败');
      }
    },
    // 故事详情
    *detail({ payload }, { call, put }) {
      yield put({
        type: 'base/masking'
      });
      const { data } = yield call(getDetail, payload);
      if (data && data.success) {
        yield put({
          type: 'sidebarShow',
          payload: {
            sideType: payload.sideType
          }
        });
        yield put({
          type: 'updateForm',
          payload: data.data
        });
      }
    },
    // 删除用户故事
    *delete({ payload }, { call, put }) {
      yield put({
        type: 'loading'
      });
      const { data } = yield call(del, payload);
      if (data && data.success) {
        yield put({
          type: 'deleteSuccess',
          payload: {
            id: payload.id,
            isLoading: false
          }
        });
        message.success('删除成功');
      } else {
        message.success('删除失败');
      }
    }
  },
  reducers: {
    // 加载中
    loading(state) {
      return {...state, isLoading: true};
    },
    // 加载完成
    loadingOver(state) {
      return { ...state, isLoading: false };
    },
    // 按钮加载中
    iconLoading(state, action) {
      return {...state, ...action.payload};
    },
    // 富文本编辑回显
    rteChange(state, action) {
      return {...state, ...action.payload};
    },
    // 查询列表成功
    querySuccess(state, action) {
      return {...state, ...action.payload};
    },
    // 侧边栏展示
    sidebarShow(state, action) {
      if (action.payload.sideType) {
        state.currentStory = {};
      }
      return {...state, ...action.payload, isSidebarShow: true };
    },
    // 侧边栏隐藏
    sidebarHide(state) {
      return {...state, isSidebarShow: false };
    },
    // 故事新增成功
    createSuccess(state, action) {
      const _new = action.payload;
      return {...state, list: [...state.list, _new], rte: { ...state.rte, value: RichTextEditor.createEmptyValue() }, isSidebarShow: false, isIconLoading: false};
    },
    // 获取详情成功
    updateForm(state, action) {
      const _story = action.payload;
      let _value = RichTextEditor.createEmptyValue();
      return {
        ...state,
        currentStory: {
          ..._story,
          name: { value: _story.name },
          time: { value: moment(_story.time) },
          charge: { value: _story.charge }
        },
        rte: {
          ...state.rte,
          value: _value.setContentFromString(_story.rte, 'html'),
          content: _story.rte,
          isError: false
        }
      };
    },
    deleteSuccess(state, action) {
      const { id } = action.payload;
      const newList = state.list.filter(story => story.id !== id);
      return { ...state, list: newList, isLoading: false };
    }
  }
}
