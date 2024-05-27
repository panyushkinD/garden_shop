import React from 'react';
import {Button, Col, Dropdown, Row, Select, Space} from "antd";
import {DeleteOutlined} from "@ant-design/icons";

const Header = () => {
    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    О себе
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    Товары для сада
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    Деревья
                </a>
            ),
        },
    ];
    return (
        <div>
            <Row>
                <Col span={20}>
                    <Space wrap>
                        <Dropdown
                            menu={{
                                items,
                            }}
                            placement="bottomLeft"
                            arrow
                        >
                            <Button>Меню</Button>
                        </Dropdown>

                    </Space>
                </Col>

                <Col span={4}>

                    <DeleteOutlined/>
                    <Button type="primary">Корзина</Button>
                </Col>

            </Row>
        </div>

    )
        ;
};

export default Header;