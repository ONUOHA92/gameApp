import React,{Component} from 'react';
import  AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar"
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

// this are our import
import "./header.scss"
import SideDrawer from './Sidebar';

// backgroundcolor: "#010A43"
//  Anothercolor :  #FFC2C2
// NextColor: "#FF9D9D"
// AnotherColor: "#FF263"

class Navbar extends Component {

      state = {
         drawerOpen : false,
         headerShow: false
      } 


      componentDidMount(){
          window.addEventListener('scroll', this.handleScroll)
      }

      handleScroll = () => {
         if(window.scrollY) {
             this.setState({
                 headerShow : true
             })
         } else {
             this.setState({
                 headerShow : false
             })
         }
          

      }


   
   toggleDrawer = (value) => {
       this.setState({
           drawerOpen : value,     
       })
   }

    
    render() {
        return (
            <AppBar
             position="fixed"
             top="0px"
             left="0px"
             style={{
                 backgroundColor : this.state.headerShow ? "#010A43" : "transparent",
                 boxShadow: "none",
                 padding: "10px",
                  margintop: "0px"
             }}
            >
                <Toolbar>
                    <div className="header_logo">
                      <div className="logo">Volt<span style={{color:"#FFC2C2"}}>J</span></div>
                    </div>
                   
                    <IconButton 
                     aria-label="Menu"
                     style={{color: "#FF2E63"}}
                     onClick={() => this.toggleDrawer(true)}
                    >
                        <MenuIcon /> 
                    </IconButton>
    
    
                  <SideDrawer
                    open={this.state.drawerOpen}
                    onClose={(value)=> this.toggleDrawer(value)}
                   
                  />
                </Toolbar>
            </AppBar>
    
    
        );
    }


   
};

export default Navbar;