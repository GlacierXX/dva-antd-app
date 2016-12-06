/**
 * Created by Glacier on 16/10/10.
 * 侧面弹出层容器
 */
import React     from 'react'
import QueueAnim from 'rc-queue-anim'


const Sidebar = ({ isSidebarShow, children }) => {
  return (
    <QueueAnim>
      {
        isSidebarShow? [
          <section className="sidebar" key="sidebar">
            { children }
          </section>
        ]: null
      }
    </QueueAnim>
  )
};

export default Sidebar
