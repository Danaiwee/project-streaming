import React from 'react'
import './navListItems.css';

function NavListItems({data}) {
  return (
    <li>
        <a href={data.link}>{data.name}</a>
    </li>
  )
}

export default NavListItems;