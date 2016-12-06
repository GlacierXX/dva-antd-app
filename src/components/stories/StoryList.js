/**
 * Created by Glacier on 16/9/18.
 */
import styles               from './StoryList.less'
import icon                 from '../../fonts/iconfont.less'
import React, { PropTypes } from 'react'
import Story                from './Story'
import QueueAnim            from 'rc-queue-anim'
import classNames           from 'classnames'
import testIcon             from '../../images/test_p.jpg';

function StoryList ({ list, onGetDetail, onDelete }) {
  // 为拆分故事
  const unDo = [];
  // 已拆分故事
  const completed = [];
  list.map((story) => {
    if (story.status === 0) {
      unDo.push(story);
    } else {
      completed.push(story);
    }
  });
  return (
    <section className={ styles.itemListWrapper }>
      <QueueAnim>
        <div key="undo" className={ styles.itemList }>
          <h2><span>待拆分（{ unDo.length }）</span></h2>
          {
            unDo.map(function (story) {
              return (
                <Story story={ story } key={ story.id } onGetDetail={ onGetDetail } onDelete={ onDelete }/>
              )
            })
          }
        </div>
        <div key="completed" className={ styles.itemList }>
          <h2><span>已拆分（{ completed.length }）</span></h2>
          {
            completed.map(function (story) {
              return (
                <Story story={ story } key={ story.id } onGetDetail={ onGetDetail } onDelete={ onDelete }/>
              )
            })
          }
        </div>
      </QueueAnim>
    </section>
  );
}

StoryList.propTypes = {
  list: PropTypes.array,
  onGetDetail: PropTypes.func,
  onDelete: PropTypes.func
};

export default StoryList;
