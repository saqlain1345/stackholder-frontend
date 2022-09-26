import Sidebargroup from '../../../uicomponents/sidebargroup.js'
import SidebarData from '../../../utils/sidebar.js'
import './sidebar.css'

const Sidebar = (props) => {
  return (
      <div className="sidebar" style={props.collapse ? {marginRight:0, right:0, transition: "all 1s"} : {marginRight:-198, right:205,  transition: "all 1s"}}>
        <Sidebargroup data={SidebarData}/>    
      </div>
  )
}

export default Sidebar