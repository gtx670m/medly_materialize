import React, { Component } from 'react';
import { Collapsible, CollapsibleItem } from 'react-materialize'
import './MyCollapsible.css';


class MyCollapsible extends Component {
    render() {
        return (
            <div>
                <Collapsible accordion defaultActiveKey={1}>
                    <CollapsibleItem header='First' icon='filter_drama'>
                        Lorem ipsum dolor sit amet.
                    </CollapsibleItem>
                    <CollapsibleItem header='Second' icon='place'>
                        Lorem ipsum dolor sit amet.
                    </CollapsibleItem>
                    <CollapsibleItem header='Third' icon='whatshot'>
                        Lorem ipsum dolor sit amet.
                    </CollapsibleItem>
                </Collapsible>
            </div>
        );
    }
}

export default MyCollapsible;
