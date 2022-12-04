import React from 'react'
import { SlLogin } from "react-icons/sl";
export const Menu = ({header, items}) => {
  return (
        <div className='menu_content'>
            <div className='menu_header'>
                <a href="# ">{header}</a>
            </div>
            <ul>
                {items.map(item => 
                    <li>
                        <a href={item.href}>{item.value}</a>
                    </li>
                )}
            </ul>
            <div className='menu_login'>
                <SlLogin/>
                <a href="# ">Войти</a>
            </div>
        </div>
  )
}
