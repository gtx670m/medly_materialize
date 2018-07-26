import React, { Component } from 'react';
import { Navbar, NavItem, Icon } from 'react-materialize'
import MyCollapsible from '../Collapsible/MyCollapsible';
import './MyNavbar.css';


class MyNavbar extends Component {
    render() {
        return (
            <div>
                <Navbar brand='DASHBOARD' right>
                    <NavItem>{<button className="button-collapse" data-activates="sidenav_0"></button>}</NavItem>
                    <NavItem>
                        <MyCollapsible/>
                    </NavItem>
                    <NavItem href='get-started.html'><Icon>view_module</Icon></NavItem>
                    <NavItem href='get-started.html'><Icon>refresh</Icon></NavItem>
                    <NavItem href='get-started.html'><Icon>more_vert</Icon></NavItem>
                </Navbar>
                <a class="button-collapse" data-activates="sidenav_0">123</a>
            </div>
        );
    }
}

export default MyNavbar;
