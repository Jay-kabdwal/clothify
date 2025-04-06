import React from 'react'
import SideBar from './SideBar'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {

    const [openSidebar, setOpenSidebar] = React.useState(false);
    return (
        <div
            className='flex  min-h-screen w-full '
        >
            <SideBar
                open={openSidebar}
                setOpen={setOpenSidebar}
            />
            <div
                className='flex flex-1 flex-col'
            >
                <Header
                    open={openSidebar}
                    setOpen={setOpenSidebar}
                />
                <div
                    className='flex-1 flex  bg-muted/40
                 p-4 md:p-6'
                >
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AdminLayout