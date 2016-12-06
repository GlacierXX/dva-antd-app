/**
 * Created by Glacier on 16/9/21.
 */
import React          from 'react'
import ReactDOM       from 'react-dom'
import RichTextEditor from 'react-rte'
import { PropTypes }  from 'react'
import { connect }    from 'dva'

function Editor({ dispatch, value, isError, errorMsg }) {
  // 校验
  function check(value) {
    return value.toString('markdown').length <= 2;
  }
  // 内容更改处理函数
  function handleChange(value) {
    dispatch({
      type: 'stories/rteChange',
      payload: {
        rte: {
          value: value,
          content: value.toString('html'),
          isError: check(value),
          errorMsg: '请输入故事描述！'
        }
      }
    })
  }
  let error = isError? <p style={{color: '#f50', paddingLeft: '.1rem', lineHeight: '.3rem'}}>{errorMsg}</p>: '';
  return (
    <div>
      <RichTextEditor value={value} onChange={handleChange} placeholder="故事描述..."/>
      {error}
    </div>
  )
}

Editor.propTypes = {
  dispatch: PropTypes.func.isRequired,
  value: PropTypes.object.isRequired,
  isError: PropTypes.bool.isRequired,
  errorMsg: PropTypes.string
};

export default connect()(Editor);
