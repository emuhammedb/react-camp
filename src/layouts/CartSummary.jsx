/* ! dosyaların uzantılarının ".js" den hiçbir farkı bulunmamaktadır. */
import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "semantic-ui-react";

export default function CartSummary() {
  return (
    <div>
      <Dropdown item text="Sepetim">
        <Dropdown.Menu>
          <Dropdown.Item>Apple Macbook Air M1</Dropdown.Item>
          <Dropdown.Item>Asus ROG</Dropdown.Item>
          <Dropdown.Item>MSI</Dropdown.Item>
          <Dropdown.Divider/>
          <Dropdown.Item as={NavLink} to="/cart">Sepete Git</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}
