import React, {useState, useEffect, useContext} from 'react';
import {Breadcrumb} from "antd";
import AppContext from '$contexts/app-context';
import { Menu, Dropdown } from 'antd';

import './breadcrumb.scss';



export default function BreadCrumbList(props){
    const [items, setList] = useState(props.items || []);

    const breadItems = items.map( item => (<Breadcrumb.Item key={item.name}>{item.name}</Breadcrumb.Item>));

    let i = 0;

    console.log(i);

    const context = useContext(AppContext);

    useEffect(() => {
        // 使用浏览器的 API 更新页面标题
        document.title = `You clicked times`;
    });

    console.log(context)

    const menu = (
        <Menu onClick={(e) => context.toggleTheme(e.key)}>
            {
                context.themes.map(t =>
                    (
                        <Menu.Item key={t}>
                            {t}
                        </Menu.Item>
                    )
                )
            }
        </Menu>
    );

    return (
        <AppContext.Consumer>
            {
                ({theme, btn, toggleTheme}) => (
                    <div className="apusic-breadcrumb">
                        <Breadcrumb style={{margin: '16px 0'}} className={theme}>
                            {breadItems}
                        </Breadcrumb>

                        <div className="theme-menu">
                            <Dropdown overlay={menu}>
                                <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    {btn.switch}
                                </a>
                            </Dropdown>
                        </div>
                    </div>
                )
            }
        </AppContext.Consumer>
    );
}
