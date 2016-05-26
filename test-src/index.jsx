
import React      from 'react';
import { render } from 'react-dom';

import { Window, Menu, Input } from './.ui/index';

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
               onMaximize={toogleMinimizer} maximized={maximized} menu={menu}>
        <form>
          <Input.Group type="text" name="user" label="Username" />
          <Input.Group type="password" name="password" label="Password" />
          <Input.Group type="email" name="email" label="Email" />
          <Input.Group type="date" name="birthday" label="Birthday" />
          <Input.Group type="number" name="a-number" label="Favourite Number" min={0} max={100} />
          <Input.Group type="color" name="color" label="Favourite Color" />
          <Input.Group type="range" name="range" label="A range" />
          <Input.Group type="select" name="element" label="Best Element">
            <option>Water</option>
            <option>Wind</option>
            <option>Earth</option>
            <option>Fire</option>
          </Input.Group>
          <Input.Group type="textarea" name="more-text" label="Somthing else" value="I'm feeling...\n totally rad!" />
          <Input.Group type="checkbox" name="spam" label="Send spam?" />
          <Input.Group type="set" label="Choose one">
            <Input type="radio" name="a-radio" label="A" checked={true} />
            <Input type="radio" name="a-radio" label="B" />
            <Input type="radio" name="a-radio" label="C" />
            <Input type="radio" name="a-radio" label="D" disabled={true} />
          </Input.Group>
        </form>
      </Window>,
       APP
  );
}
toogleMinimizer();