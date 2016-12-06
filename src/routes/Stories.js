/**
 * Created by Glacier on 16/9/18.
 * 用户故事容器组件
 */
import React, { PropTypes } from 'react'
import { connect }          from 'dva'
import Layout               from '../components/Layout'
import StoryController      from '../components/stories/StoryController'
import StoryList            from '../components/stories/StoryList'
import StorySidebar         from '../components/stories/StorySidebar'
import Mask                 from '../components/Mask'
import { Spin }             from 'antd'
import moment               from 'moment'


function Stories({ dispatch, stories }) {
  // 控制条属性
  const storyControllerProps = {
    createStoryShow: () => {
      dispatch({
        type: 'base/masking'
      });
      dispatch({
        type: 'stories/sidebarShow',
        payload: {
          sideType: 'create'
        }
      });
    }
  };
  // 列表属性
  const storyListProps = {
    list: stories.list,
    onGetDetail: (id) => {
      dispatch({
        type: 'stories/detail',
        payload: {
          id: id,
          sideType: 'edit'
        }
      });
    },
    onDelete: (id) => {
      dispatch({
        type: 'stories/delete',
        payload: {
          id: id
        }
      })
    }
  };
  // 侧边栏属性
  const StorySidebarProps = {
    rte: stories.rte,
    sideType: stories.sideType,
    currentStory: stories.currentStory,
    isSidebarShow: stories.isSidebarShow,
    isIconLoading: stories.isIconLoading,
    updateForm: (values) => {
      dispatch({
        type: 'stories/updateForm',
        payload: values
      })
    },
    submit: (values) => {
      dispatch({
        type: 'stories/save',
        payload: {
          ...values,
          time: moment(values.time).format('YYYY-MM-DD')
        }
      })
    }
  };
  // 布局属性
  const StoryLayoutProps = {
    sidebar: <StorySidebar {...StorySidebarProps}/>,
    onMaskClick: () => {
      if (stories.isSidebarShow) {
        dispatch({
          type: 'base/unmask'
        });
        dispatch({
          type: 'stories/sidebarHide'
        });
      }
    }
  };
  return (
    <Layout { ...StoryLayoutProps }>
      <Spin spinning={ stories.isLoading }>
        <StoryController {...storyControllerProps}/>
        <StoryList {...storyListProps}/>
      </Spin>
    </Layout>
  );
}

Stories.propTypes = {
  dispatch: PropTypes.func,
  stories: PropTypes.object
};

function mapStateToProps ({ base, stories }) {
  return { base, stories };
}

export default connect(mapStateToProps)(Stories);
