/**
 * Created by Glacier on 16/9/18.
 */
import React, { PropTypes } from 'react'
import ReactDOM             from 'react-dom'
import { connect }          from 'dva'
import Header               from './Header'
import Mask                 from './Mask'
import Sidebar              from './Sidebar'
import classNames           from 'classnames'
import styles               from './Layout.less'

const Layout = ({ base, children, sidebar, onMaskClick }) => {
  return (
    <section className={ classNames(styles.app, { [styles.scrollDisable]: base.isMasking }) }>
      <Mask masking={ base.isMasking } onMaskClick={ onMaskClick }>
        <Header/>
        <section className={ styles.content }>
            { children }
        </section>
      </Mask>
      { sidebar }
    </section>
  );
};

Layout.propTypes = {
  base:        PropTypes.object,
  children:    PropTypes.object,
  sidebar:     PropTypes.object,
  onMaskClick: PropTypes.func
};

function mapStateToProps ({ base }) {
  return { base };
}

export default connect(mapStateToProps)(Layout);
