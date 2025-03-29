import React from 'react'
import { Outlet } from 'react-router-dom'
import ShoppingHeader from './Header'

const Shoppinglayout = () => {
    return (
        <div className='flex flex-col overflow-hidden bg-white'>
            <ShoppingHeader />
            <main className='flex flex-col w-ful'>
                <Outlet />
            </main>
        </div>
    )
}

export default Shoppinglayout