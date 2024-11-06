import React from 'react'
import navListData from '../data/NavListData'
import NavListItems from '../components/NavListItems'
import './header.css';
import Search from '../components/Search';
import Button from '../components/Button';

function Header() {
  return (
    <header>
        <a href="/" className='logo'>Cinema</a>
        <ul className='nav'>
            {navListData.map((data)=>{
                return <NavListItems key={data._id} data={data} />
            })}
        </ul>
        <Search />
        <Button
          icon={<ion-icon name='log-in-outline'></ion-icon>}
          name='sign in'
        />
    </header>
  )
}

export default Header