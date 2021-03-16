import React, {useContext, useEffect, useState} from 'react';
import {Breadcrumb, Dropdown, Menu} from "antd";
import AppContext from '$contexts/app-context';

import './breadcrumb.scss';


export default function BreadCrumbList(props) {
    const [items, setList] = useState(props.items || []);

    const breadItems = items.map(item => (<Breadcrumb.Item key={item.name}>{item.name}</Breadcrumb.Item>));

    const context = useContext(AppContext);

    const divRef = React.useRef();

    useEffect(() => {
        // 使用浏览器的 API 更新页面标题
        document.title = `You clicked times`;
        console.log(divRef)
    });

    const menu = (
        <Menu onClick={(e) => context.toggleTheme(e.key)}>
            {
                context.themes.map(t =>
                    (
                        <Menu.Item key={t}>
                            {props.children(t)}
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
                    <div className="apusic-breadcrumb" ref={divRef}>
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
