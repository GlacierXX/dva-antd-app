/**
 * Created by Glacier on 16/9/18.
 */
import React, { PropTypes } from 'react'
import { Link } from 'dva/router'
import styles from './header.less'

function Header() {
  return (
    <nav className={ styles.mainNav }>
      <ul>
        <li>
          <Link activeClassName={ styles.active } to="/stories">用户故事</Link>
        </li>
        <li>
          <Link activeClassName={ styles.active } to="/requirements">需求池</Link>
        </li>
        <li>
          <Link activeClassName={ styles.active } to="/develop">开发任务</Link>
        </li>
        <li>
          <Link activeClassName={ styles.active } to="/test">测试任务</Link>
        </li>
        <li>
          <Link activeClassName={ styles.active } to="/management">管理</Link>
        </li>
      </ul>
    </nav>
  );
}
Header.propTypes = {};

export default Header;
