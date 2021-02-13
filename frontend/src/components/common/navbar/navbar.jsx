import React from 'react';
import {
    Container,
    Icon,
    Image,
    Menu,
    Sidebar,
    Responsive
  } from "semantic-ui-react";


const navbar = (props)=>{

    return(

        <Menu fixed="top" inverted>
        <Menu.Item>
          XMeme
        </Menu.Item>
        <Menu.Item onClick={props.onToggle}>
         
        </Menu.Item>
        <Menu.Menu position="right">
          {/* {props.items.map(props.rightItems, item => <Menu.Item {...item} />)} */}
        </Menu.Menu>
      </Menu>

    )



}

export default navbar;