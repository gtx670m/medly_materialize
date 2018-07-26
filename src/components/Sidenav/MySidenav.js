import React, { Component } from 'react';
import { SideNav, SideNavItem, Button, Icon } from 'react-materialize'
import './MySidenav.css';

class MySidenav extends Component {
  render() {
    return (
      <div>
        <SideNav
            trigger={<Button><Icon>view list</Icon></Button>}
            options={{ closeOnClick: false }}
            >
            <SideNavItem userView
                user={{
                background: 'img/office.jpg',
                image: 'img/yuna.jpg',
                name: 'John Doe',
                email: 'jdandturk@gmail.com'
                }}
            />
            <SideNavItem href='#!icon' icon='cloud'>First Link With Icon</SideNavItem>
            <SideNavItem href='#!second'>Second Link</SideNavItem>
            <SideNavItem divider />
            <SideNavItem subheader>Subheader</SideNavItem>
            <SideNavItem waves href='#!third'>Third Link With Waves</SideNavItem>
        </SideNav> 
      </div>
    );
  }
}

export default MySidenav;
