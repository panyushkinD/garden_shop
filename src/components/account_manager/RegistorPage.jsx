import React from 'react';
import {Button, Checkbox, Form, Input} from 'antd';

const onFinish = (values) => {
    console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};
const RegistorPage = () => (
    <Form
        name="basic"
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
        style={{
            width: 300,
            position: "fixed",
            top: "40%",
            left: "40%",
            maxWidth: 600
        }}
    ><h1 style={{marginLeft: "100px"}}>Регистрация</h1>
        <Form.Item
            label="Логин"
            name="login"
            rules={[
                {
                    required: true,
                    message: 'Укажите логин!',
                },
            ]}
        >
            <Input/>
        </Form.Item>

        <Form.Item
            label="Пароль"
            name="password"
            rules={[
                {
                    required: true,
                    message: 'Укажите пароль!',
                },
            ]}
        >
            <Input.Password/>
        </Form.Item>

        <Form.Item
            wrapperCol={{
                offset: 8,
                span: 16,
            }}
        >
            <Button type="primary" htmlType="submit">
                Войти
            </Button>
        </Form.Item>
    </Form>
);
export default RegistorPage;