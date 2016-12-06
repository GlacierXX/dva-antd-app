/**
 * Created by Glacier on 16/10/8.
 * 遮罩层组件
 */
import React, { PropTypes } from 'react'
import classNames           from 'classnames'

/**
 * @param masking
 * @param children
 * @param onMaskClick
 */
const Mask = ({ masking, children, onMaskClick }) => {
  return (
    <div>
      <div className={ classNames({ 'mask': masking}) } onClick={ onMaskClick }></div>
      <div className={ classNames({ 'maskContainer': masking}) }>{ children }</div>
    </div>
  );
};

Mask.propTypes = {
  masking:     PropTypes.bool,
  children:    PropTypes.array,
  onMaskClick: PropTypes.func
};

export default Mask;
