import React, { useEffect, useState, useCallback } from "react";
import {
  TextField,
  Select,
  Button,
  Card,
  Tabs,
  Checkbox
} from '@shopify/polaris';
import './inventory.css';

function Inventory() {
  const [selected, setSelected] = useState('');
  const [value, setValue] = useState('');
  const [tab, setTab] = useState(0);
  const [checked, setChecked] = useState(false);

  const handleChange = useCallback((newValue) => setValue(newValue), []);

  const handleSelectChange = useCallback((value) => setSelected(value), []);

  const handleTabChange = useCallback(
    (selectedTabIndex) => setTab(selectedTabIndex),
    [],
  );

  const handleCheckedAllChange = useCallback((newChecked) => setChecked(newChecked), []);

  const tabs = [
    {
      id: 'all-customers',
      content: 'All',
      accessibilityLabel: 'All customers',
      panelID: 'all-customers-content',
    },
  ];


  const options = [
    {label: 'Product variant (A–Z)', value: 'full_title asc'},
    {label: 'Product variant (Z–A)', value: 'full_title desc'},
    {label: 'SKU (ascending)', value: 'sku asc'},
    {label: 'SKU (descending)', value: 'sku desc'},
    {label: 'Available (ascending)', value: 'inventory_levels_available asc'},
    {label: 'Available (descending)', value: 'inventory_levels_available desc'},
    {label: 'When sold out (A–Z)', value: 'inventory_policy asc'},
    {label: 'inventory_policy desc', value: 'inventory_policy desc'},
  ];

  
  return (
    <div className="inventory__card">
      <Card>
        <Tabs tabs={tabs} selected={tab} onSelect={handleTabChange}>
          <Card.Section>
            <div className="inventory__filer-group">
              <div className="inventory-filer__button">
                <Button >Filter</Button>
              </div>
              <div className="inventory-filer__input">
                <TextField inventory__ value={value} onChange={handleChange} placeholder="Search inventory"/>
              </div>
              <div className="inventory-filer__select">
                <Select
                  label="Sort by"
                  options={options}
                  onChange={handleSelectChange}
                  value={selected}
                />
              </div>
            </div>
            <div className="inventory__table-product">
              <div className="table-product">
                <div className="table__checked">
                  <Checkbox
                    checked={checked}
                    onChange={handleCheckedAllChange}
                  />
                </div>
                <ul className="table__list">
                  <li className="table__item">
                  </li>
                  <li className="table__item">
                    <p className="table__item-title">Product</p>
                  </li>
                  <li className="table__item">
                    <p className="table__item-title">SKU</p>
                  </li>
                  <li className="table__item">
                    <p className="table__item-title">When sold out</p>
                  </li>
                  <li className="table__item">
                    <p className="table__item-title">Incoming</p>
                  </li>
                  <li className="table__item">
                    <p className="table__item-title">Available</p>
                  </li>
                  <li className="table__item">
                    <p className="table__item-title">Edit quantity available</p>
                  </li>
                </ul>
              </div>
              <div className="table-product table-body">
                <div className="table__checked">
                  <Checkbox
                    checked={checked}
                    onChange={handleCheckedAllChange}
                  />
                </div>
                <ul className="table__list">
                  <li className="table__item">
                    <img className="table-body__item-img" src="https://cdn.shopify.com/s/files/1/0504/4823/6696/products/woman-in-the-city_925x_34c54a7d-e2a0-48fe-a169-fde33a735aef.jpg?v=1604138685" alt="prodcut"></img>
                  </li>
                  <li className="table__item table-body__item-product">
                      <a>Striped Skirt and Top</a>
                      <a>small</a>
                  </li>
                  <li className="table__item">
                    <p>No SKU</p>
                  </li>
                  <li className="table__item">
                    <p>Continue selling</p>
                  </li>
                  <li className="table__item">
                    <button>0</button>
                  </li>
                  <li className="table__item">
                    <p>0</p>
                  </li>
                  <li className="table__item">
                    <div>
                      <form>
                        <div>
                          <button>Add</button>
                          <button>Set</button>
                        </div>
                        <div>
                          <input min="1" type="number" className="table-body__item-quantity" name="quantity" value="1" />
                        </div>
                        <Button>Save</Button>
                      </form>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </Card.Section>
        </Tabs>
      </Card>
    </div>
  );
}

export default Inventory;