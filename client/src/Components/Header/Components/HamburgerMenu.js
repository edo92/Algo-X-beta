import React from "react";
import { Drawer } from 'antd';
import './CSS/HamburgerMenu.css';

let btn = React.createRef();
class HamburgerMenu extends React.Component{ 
    state={

    }    
    handleMenu = () => {
        btn.current.classList.toggle('change'); 
        this.setState({ drawVisib:!this.state.drawVisib });
    };

    render(){
        let width = '35px';
        let height = '2px';
        let color = '#dbdbdb';

        const menuStyle = {
            bar1:{
                width: width,
                height: height,
                backgroundColor: color,
                margin:' 6px 0',
            },
            bar2:{
                width: '30px',
                height: height,
                backgroundColor: color,
                margin:' 6px 0',
            },
            bar3:{
                width: ('25px'),
                height: height,
                backgroundColor: color,
                margin:' 6px 0',
            }
        }

        return(
            <div id='wrapper-HBM'>
                <div ref={btn} onClick={this.handleMenu} className="container-hbMenu navbar-toggler"  data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <div style={ menuStyle.bar1 } className="bar1"></div>
                    <div style={ menuStyle.bar2 } className="bar2"></div>
                    <div style={ menuStyle.bar3 } className="bar3"></div>
                </div>               
                <Drawer
                    title='Menu'
                    placement='left'
                    closable={true}
                    onClose={this.handleMenu}
                    visible={this.state.drawVisib}
                    className='text-center color-white'
                >
                    <div className='col-12 text-center p-0'>
                        <div className=''>
                            <a>Login</a>
                        </div>
                        <div className=''>
                            <a>Register</a>
                        </div>
                        <div className=''>
                            <a>How to use</a>
                        </div>
                        <div className=''>
                            <a>About</a>
                        </div>
                    </div>
                </Drawer>
            </div>
        )
    };
}

export default HamburgerMenu;