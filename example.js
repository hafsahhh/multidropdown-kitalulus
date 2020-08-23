import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";

const DropdownExamplePointingTwo = () => (
  <Menu vertical>
    <Menu.Item>Home</Menu.Item>
    <Dropdown text="Bunga" pointing="down" className="link item">
      <Dropdown.Menu>
        <Dropdown text="Mawar" pointing="down" className="link item">
          <Dropdown.Menu>
            <Dropdown.Item>Merah</Dropdown.Item>
            <Dropdown.Item>Putih</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown.Item>Anggrek</Dropdown.Item>
        <Dropdown.Item>Mawar</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
    <Dropdown text="Hewan" pointing="left" className="link item">
      <Dropdown.Menu>
        <Dropdown text="Dog" pointing="left" className="link item">
          <Dropdown.Menu>
            <Dropdown.Item>Husky</Dropdown.Item>
            <Dropdown.Item>Buldog</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown.Item>Kucing</Dropdown.Item>
        <Dropdown.Item>Anjing</Dropdown.Item>
        <Dropdown.Item>Ikan</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Menu>
);

export default DropdownExamplePointingTwo;
