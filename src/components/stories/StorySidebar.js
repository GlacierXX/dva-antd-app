/**
 * Created by Glacier on 16/9/20.
 */
import React                  from 'react'
import Editor              from '../Editor'
import styles                 from './StorySidebar.less'
import { PropTypes }          from 'react'
import QueueAnim              from 'rc-queue-anim'
import moment                 from 'moment'
import Sidebar                from '../Sidebar'
import { Form, Input, DatePicker, Select, Button } from 'antd'
const FormItem = Form.Item,
      Option = Select.Option,
      createForm = Form.create;

// 表单布局配置
const formItemLayout = {
  labelCol: {
    span: 3
  },
  wrapperCol: {
    span: 19
  },
  hasFeedback: true
};
function StorySidebar ({ form, rte, isSidebarShow, isIconLoading, submit }) {
  // 表单数据
  const { getFieldDecorator } = form;
  // 表单提交
  function handleSubmit(e) {
    e.preventDefault();
    // 校验富文本
    if (rte.isError) {
      return;
    }
    // 校验表单项
    form.validateFieldsAndScroll((errors, values) => {
      if (!!errors) {
        return;
      }
      values.rte = rte;
      submit(values);
    });
  }
  return (
    <Sidebar isSidebarShow={ isSidebarShow }>
      <Editor {...rte} key="editor"/>
      <Form horizontal className={styles.storyForm}>
        <QueueAnim delay={ 100 }>
          <FormItem {...formItemLayout} label="故事标题" key="name">
            {
              getFieldDecorator('name', {
                rules: [{ required: true, message: '请输入故事标题！' }]
              })(
                <Input placeholder="请输入故事标题..."/>
              )
            }
          </FormItem>
          <FormItem {...formItemLayout} label="上线时间" key="time">
            {
              getFieldDecorator('time', {
                rules: [{ required: true, type: 'object', message: '请输入上线时间！' }]
              })(
                <DatePicker disabledDate={(current) => current && current.valueOf() <= Date.now()} placeholder="请选择上线时间..."/>
              )
            }
          </FormItem>
          <FormItem {...formItemLayout} label="负责人" key="charge">
            {
              getFieldDecorator('charge', {
                rules: [{ required: true, type: 'array', message: '请选择负责人！' }]
              })(
                <Select multiple placeholder="请选择负责人...">
                  <Option value="01">杨阳</Option>
                  <Option value="02">凌艳</Option>
                  <Option value="03">李玲</Option>
                  <Option value="04">赵静</Option>
                </Select>
              )
            }
          </FormItem>
          <FormItem wrapperCol={{ span:18, offset: 3 }} key="create">
            <Button type="primary" onClick={ handleSubmit } loading={isIconLoading}>保存</Button>
          </FormItem>
        </QueueAnim>
      </Form>
    </Sidebar>
  );
}

StorySidebar.propTypes = {
  form:          PropTypes.object.isRequired,
  rte:           PropTypes.object.isRequired,
  isSidebarShow: PropTypes.bool.isRequired,
  isIconLoading: PropTypes.bool.isRequired,
  submit:        PropTypes.func.isRequired
};

// 状态与表单项映射
function mapPropsToFields ({ currentStory }) {
  return {
    name: currentStory.name,
    time: currentStory.time,
    charge: currentStory.charge
  };
}

export default createForm({ mapPropsToFields })(StorySidebar);
