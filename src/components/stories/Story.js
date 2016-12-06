/**
 * Created by Glacier on 16/10/12.
 * Story组件
 */
import styles               from './Story.less'
import icon                 from '../../fonts/iconfont.less'
import React, { PropTypes } from 'react'
import classNames           from 'classnames'
import QueueAnim            from 'rc-queue-anim'
import { Popconfirm }       from 'antd'
import testIcon             from '../../images/test_p.jpg'

const Story = ({ story, onGetDetail, onDelete }) => {
  const handleDetailClick = () => {
    return onGetDetail(story.id);
  };
  const handleEditClick = (e) => {
    e.stopPropagation();
  };
  const handleDeleteClick = (e) => {
    e.stopPropagation();
  };
  const handleDeleteConform = () => {
    return onDelete(story.id);
  };
  return (
    <QueueAnim>
      <div className={ styles.item } key={ story.id } onClick={ handleDetailClick }>
        <div className={ styles.itemContainer }>
          <p className={ styles.itemCap }>{ story.name }</p>
          <div className={ styles.itemContent }>
            <ul className={ styles.itemMembers }>
              <li><img src={ testIcon }/></li>
              <li><img src={ testIcon }/></li>
            </ul>
            { story.status? <div className={ classNames(icon.iconFinish, styles.iconFinish) }></div>: null }
          </div>
        </div>
        <div className={ styles.itemOperation }>
          <a href="javascript:;" className={ icon.iconEditor } onClick={ handleEditClick }/>
          <a href="javascript:;" className={ icon.iconSplit }/>
          <Popconfirm placement="top" title="确定要删除吗?" onConfirm={ handleDeleteConform }>
            <a href="javascript:;" className={ icon.iconDelete } onClick={ handleDeleteClick }/>
          </Popconfirm>
        </div>
      </div>
    </QueueAnim>
  );
};

export default Story
