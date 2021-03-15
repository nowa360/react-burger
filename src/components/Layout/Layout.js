import React from 'react';

import Aux from '../../hoc/Aux';
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/ToolBar';

const layout = (props) => (
    <Aux>
        <Toolbar />
        <div>Toolbar, Sidedraw, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;