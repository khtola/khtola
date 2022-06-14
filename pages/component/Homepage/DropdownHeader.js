import { Col, Row } from 'antd';
import React, { useState } from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import Styles from './DropdownHeader.module.css';
import { Dropdown, Menu, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const list = [
    { city: 'prey veng', numbering: 1 },
    { city: 'phnom penh', numbering: 2 },
    { city: 'kondal', numbering: 3 },
    { city: 'kom pong cham', numbering: 4},
]
const summary=[{subCity:4,Total:9}]
 
const menu = (
    <Menu style={{ width: 250 }}>
        <>
            {list.map((item, idex) => (
                <Row style={{ padding: 10 }}>
                    <Col span={12}>
                        <span>{item.city}</span>
                    </Col>
                    <Col span={12} style={{ textAlign: 'end' }}>
                        <span>{item.numbering}</span>
                    </Col>
                </Row>
            ))}
        </>
        <div className={Styles.SubTotal}>
            <span>Sum  {summary[0].subCity >1 ? " Items ":" Item "} {summary[0].subCity} / Total {summary[0].Total}</span>
            
        </div>
    </Menu>
);
const DropdownHeader = (props) => {
    const { item = 0, Total = 0 } = props;
    const [state, setState] = useState({
        dropdown: false
    });
    const handleDropdown = (item) => {
        setState({
            ...state,
            dropdown: !item
        })
    }
    return (
        <div className={Styles.Dropdown}>
            <Dropdown overlay={menu} trigger={['click']} placement="bottomRight" arrow>
                <div onClick={() => handleDropdown(state.dropdown)} className={Styles.ListDrop}>
                    <span>{item}{item > 0 ? ' Items ' : ' Item'} / {" Total "}{Total}</span>
                    <span className={Styles.Iconedrop}>{state.dropdown ? <AiOutlineCaretDown /> : <AiOutlineCaretUp />}</span>
                </div>
            </Dropdown>
        </div>


    );
}

export default DropdownHeader;