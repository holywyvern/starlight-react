
import React      from 'react';
import { render } from 'react-dom';

import { Window, Menu } from './.ui/index';

let maximized = false;
const APP = document.getElementById('app');



function closeWindow() {
  alert("You may close the window with thiss");
}

let menu = (
  <Menu key="main-menu">
    <Menu.Item title='Menu 1' />
    <Menu.Item title='Menu 2' />
    <Menu.Item title='Menu 3' />
    <Menu.Separator />
    <Menu.Item title='Menu 4'>
      <Menu.Item title='Menu 4-1' />
      <Menu.Item title='Menu 4-2' />
      <Menu.Item title='Menu 4-3' />
      <Menu.Separator />
      <Menu.Item title='Menu 4-4'>
        <Menu.Item title='Menu 4-4-1' />
        <Menu.Item title='Menu 4-4-2' />
        <Menu.Item title='Menu 4-4-3' />      
      </Menu.Item>
    </Menu.Item>
  </Menu>
);

function toogleMinimizer() {
  maximized = !maximized;
  render(
       <Window title="Starlight-React demo" onClose={ closeWindow } 
               onMaximize={toogleMinimizer} maximized={maximized} menu={menu}/>,
       APP
  );
}
toogleMinimizer();