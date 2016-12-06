/**
 * Created by Glacier on 16/9/20.
 */
import React, { PropTpres } from 'react';
import { Button } from 'antd';

const StoryController = ({ createStoryShow }) => {
  return (
    <h1 className="controller">
      <div className="ctlBtn">
        <Button type="primary" size="large" onClick={createStoryShow}>新增故事</Button>
      </div>
    </h1>
  );
};

export default StoryController;
