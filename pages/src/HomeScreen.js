import { Col, Layout, Menu, Row, Input, Form, message, Modal, Upload } from 'antd';
import React, { useEffect, useState } from 'react';
import 'antd/dist/antd.css';
import { AiFillDashboard, AiFillSetting } from "react-icons/ai";
import { BsFillBagCheckFill, BsChevronDoubleRight, BsCartCheckFill } from "react-icons/bs";
const { Header, Content, Sider } = Layout;
import Link from 'next/link'
import HomepageList from '../component/Homepage/HomepageList'
import HomePageDetail from '../component/Homepage/HomePageDetail';
import DropdownHeader from '../component/Homepage/DropdownHeader';
const { Search } = Input;

const rootSubmenuKeys = ['sub1', 'sub2', 'sub4', 'sub5'];
const App = () => {
    const [form] = Form.useForm();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [fillter, setFilter] = useState({
        Search: '',
        list: []
    })
    const [state, SetState] = useState({
        data: [
            { name: 'khun thola', Tel: '0964559121', Email: "kh_tola01@gmail.com", Status: 'Sigle' },
            { name: 'tola', Tel: '0964559121', Email: "kh_tola01@gmail.com", Status: 'Sigle' },
            { name: 'sinat', Tel: '0964559121', Email: "kh_tola01@gmail.com", Status: 'Sigle' },
            { name: 'panha', Tel: '0964559121', Email: "kh_tola01@gmail.com", Status: 'Sigle' },
            { name: 'janthim', Tel: '0964559121', Email: "kh_tola01@gmail.com", Status: 'Sigle' },
            { name: 'sombo', Tel: '0964559121', Email: "kh_tola01@gmail.com", Status: 'Sigle' },
        ],
    })
    useEffect(() => {
        if (fillter.Search === "") {
            SetState({
                ...state,
                data: [
                    { name: 'khun thola', Tel: '0964559121', Email: "kh_tola01@gmail.com", Status: 'Sigle' },
                    { name: 'tola', Tel: '0964559122', Email: "kh_tola01@gmail.com", Status: 'Sigle' },
                    { name: 'sinat', Tel: '0964559123', Email: "kh_tola01@gmail.com", Status: 'Sigle' },
                    { name: 'panha', Tel: '0964559124', Email: "kh_tola01@gmail.com", Status: 'Sigle' },
                    { name: 'janthim', Tel: '0964559125', Email: "kh_tola01@gmail.com", Status: 'Sigle' },
                    { name: 'sombo', Tel: '0964559126', Email: "kh_tola01@gmail.com", Status: 'Sigle' },
                ],
            })
        }
    }, [fillter])
    const [openKeys, setOpenKeys] = useState([]);
    const onOpenChange = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };
    const [collapsed, setCollapsed] = useState(false);

    const onSearch = (value) => {
        if (value === "") {
            setFilter({
                ...fillter,
                Search: value
            })
        } else {
            var NewData = [], List = fillter.list;
            if (state.data.length != 1) {
                state.data.map((item, _) => {
                    if (item.name == value || item.Tel == value) {
                        NewData = [item]
                    }
                    List.push(item)
                })
            } else {
                List.map((item, _) => {
                    if (item.name == value || item.Tel == value) {
                        NewData = [item]
                    }
                })
            }
            SetState({
                ...state,
                data: NewData
            })
            setFilter({
                ...fillter,
                list: List,
                Search: value
            })
        }
    }
    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const handleEdit = (item) => {
        setIsModalVisible(true);
        form.setFieldsValue(item)
        SetState({
            ...state,
            name: item.name,
            Tel: item.Tel
        })
    }

    const onFinish = (values) => {
        message.success('Update Success!')
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <Layout
            style={{
                minHeight: '100vh',
            }}
        >
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={[]} mode="inline"
                    openKeys={openKeys}
                    onOpenChange={onOpenChange}
                >
                    <Menu.SubMenu key={'sub1'} title="About" icon={<AiFillDashboard />}>
                        <Menu.Item icon={<BsChevronDoubleRight />}>Item1</Menu.Item>
                        <Menu.Item icon={<BsChevronDoubleRight />}>Item2</Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu key={'sub2'} title="Product" icon={<BsFillBagCheckFill />}>
                        <Menu.Item icon={<BsChevronDoubleRight />}>
                            <Link href="/listProduct">
                                <a>order</a>
                            </Link>
                        </Menu.Item>
                        <Menu.Item icon={<BsChevronDoubleRight />}>Item2</Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu key={'sub4'} title="Order" icon={<BsCartCheckFill />}>
                        <Menu.Item icon={<BsChevronDoubleRight />}>item 3</Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu key={'sub5'} title="Setting" icon={<AiFillSetting />}>
                        <Menu.Item icon={<BsChevronDoubleRight />}>item 3</Menu.Item>
                    </Menu.SubMenu>
                </Menu>
            </Sider>
            <Modal title="Update" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Form
                    name="data"
                    form={form}
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Tel"
                        name="Tel"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Tel!',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={'Email'}
                        label="Email"
                        rules={[
                            {
                                type: 'email',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        name={'Status'}
                        label="Status"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                </Form>
            </Modal>
            <Layout className="site-layout">
                <Header style={{ padding: 0, background: '#578abb' }}>
                    <Form.Item style={{ paddingTop: 30, width: '50%' }}>
                        <Row>
                            <Col span={12}>
                                <Search
                                    placeholder="Search"
                                    allowClear
                                    onSearch={onSearch}
                                    style={{
                                        width: 200,
                                    }}
                                />
                            </Col>
                            <Col span={12}>
                                <DropdownHeader />
                            </Col>
                        </Row>
                    </Form.Item>
                </Header>
                <Content>
                    <Row>
                        <Col style={{ width: '50%' }}>
                            <HomepageList
                                data={state.data}
                                handleEdit={handleEdit}
                            />
                        </Col>
                        <Col style={{ width: '0.1%' }}>
                            <div style={{ height: 550, backgroundColor: '#000', width: 0.1, opacity: 0.2 }} />
                        </Col>
                        <Col style={{ width: '49.9%' }}>
                            <HomePageDetail />
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;
