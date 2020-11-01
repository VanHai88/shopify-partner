import React, { useEffect, useState, useCallback } from "react";
import {
  TextField,
  Select,
  Button,
  Card,
  Tabs,
  Checkbox,
  Icon
} from '@shopify/polaris';
import {
  ChevronLeftMinor,
  ChevronRightMinor,
  CaretDownMinor,
  SearchMinor
} from '@shopify/polaris-icons';
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
    <section className="section__inventory">
      <div className="section__inventory-head">
        <h2 className="inventory-head__title">Inventory</h2>
        <div className="inventory-head__btn-group">
          <button className="btn btn--export">Export</button>
          <button className="btn btn--import">Import</button>
          <button className="btn btn--view">View products</button>
        </div>
      </div>
      <Card>
        <Tabs tabs={tabs} selected={tab} onSelect={handleTabChange}>
          <Card.Section>
            <div className="inventory__filer-group">
              <div className="inventory-filer__button">
                <Button >Filter <Icon source={CaretDownMinor} /></Button>
                
              </div>
              <div className="inventory-filer__input">
                <Icon source={SearchMinor} />
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
              <div className="table-product table-head">
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
              <div className="table-product table-body table-product-infor__list">
                <div className="table-product-infor__item">
                  <div className="table__checked">
                    <Checkbox
                      checked={checked}
                      onChange={handleCheckedAllChange}
                    />
                  </div>
                  <ul className="table__list table-body__list">
                    <li className="table__item table-body__item">
                      <img className="table-body__item-img" src="https://cdn.shopify.com/s/files/1/0504/4823/6696/products/woman-in-the-city_925x_34c54a7d-e2a0-48fe-a169-fde33a735aef.jpg?v=1604138685" alt="prodcut"></img>
                    </li>
                    <li className="table__item table-body__item-product">
                        <a className="item-product__name">Striped Skirt and Top</a>
                        <a className="item-product__size">small</a>
                    </li>
                    <li className="table__item table-body__item">
                      <p className="table-body__sku">No SKU</p>
                    </li>
                    <li className="table__item table-body__item">
                      <p>Continue selling</p>
                    </li>
                    <li className="table__item table-body__item">
                      <button className="table-body__item-incoming">0</button>
                    </li>
                    <li className="table__item table-body__item">
                      <p className="table-body__item-available">0</p>
                    </li>
                    <li className="table__item table-body__item">
                      <form className="table-body__item-form">
                        <div className="item-form__btn-group">
                          <button className="btn btn--add btn--active">Add</button>
                          <button className="btn btn--set">Set</button>
                        </div>
                        <input min="1" type="number" className="table-body__item-quantity" name="quantity" value="0" />
                        <Button disabled>Save</Button>
                      </form>
                    </li>
                  </ul>
                </div>
                <div className="table-product-infor__item">
                  <div className="table__checked">
                    <Checkbox
                      checked={checked}
                      onChange={handleCheckedAllChange}
                    />
                  </div>
                  <ul className="table__list table-body__list">
                    <li className="table__item table-body__item">
                      <img className="table-body__item-img" src="https://cdn.shopify.com/s/files/1/0504/4823/6696/products/woman-in-the-city_925x_34c54a7d-e2a0-48fe-a169-fde33a735aef.jpg?v=1604138685" alt="prodcut"></img>
                    </li>
                    <li className="table__item table-body__item-product">
                        <a className="item-product__name">Striped Skirt and Top</a>
                        <a className="item-product__size">small</a>
                    </li>
                    <li className="table__item table-body__item">
                      <p className="table-body__sku">No SKU</p>
                    </li>
                    <li className="table__item table-body__item">
                      <p>Continue selling</p>
                    </li>
                    <li className="table__item table-body__item">
                      <button className="table-body__item-incoming">0</button>
                    </li>
                    <li className="table__item table-body__item">
                      <p className="table-body__item-available">0</p>
                    </li>
                    <li className="table__item table-body__item">
                      <form className="table-body__item-form">
                        <div className="item-form__btn-group">
                          <button className="btn btn--add btn--active">Add</button>
                          <button className="btn btn--set">Set</button>
                        </div>
                        <input min="1" type="number" className="table-body__item-quantity" name="quantity" value="0" />
                        <Button disabled>Save</Button>
                      </form>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="table-bottom">
                <Button><Icon source={ChevronLeftMinor} /></Button>
                <Button><Icon source={ChevronRightMinor} /></Button>
              </div>
            </div>
          </Card.Section>
        </Tabs>
      </Card>
    </section>
  );
}

export default Inventory;