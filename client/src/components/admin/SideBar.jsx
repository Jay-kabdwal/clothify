import React from 'react'
import { ShieldUser } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import {
  LayoutDashboard,
  ShoppingBasket,
  SquareChartGantt
} from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle
} from "@/components/ui/sheet"



export const adminSidebarItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/admin/dashboard",
    icon: <LayoutDashboard />,
  },
  {
    id: "products",
    label: "products",
    path: "/admin/products",
    icon: <ShoppingBasket />,
  },
  {
    id: "orders",
    label: "orders",
    path: "/admin/orders",
    icon: <SquareChartGantt />,
  }
]



const MenueItems = ({ setOpen }) => {

  const navigate = useNavigate();

  return <>
    <nav
      className='mt-8 flex-col flex gap-2'
    >
      {
        adminSidebarItems.map(menueItem =>
          <div
            className='flex items-center gap-2 
            px-3 py-2 rounded-md 
            hover:text-foreground cursor-pointer
            text-muted-foreground 
            hover:bg-muted-foreground/20 text-xl'
            key={menueItem.id}
            onClick={() => {

              navigate(menueItem.path)
              setOpen ? setOpen(false) : null

            }
            }
          >
            {menueItem.icon}
            <span
              className='text-sm font-medium'
            >
              {menueItem.label}
            </span>
          </div>)
      }
    </nav>
  </>
}



const SideBar = ({ open, setOpen }) => {

  const navigate = useNavigate();

  return (
    <>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side='left' className="w-64 ">
          <div className='flex flex-col h-full'>
            <SheetHeader >
              <SheetTitle>
                <ShieldUser />
                Admin Panel
              </SheetTitle>
            </SheetHeader>
            <MenueItems setOpen={setOpen} />
          </div>

        </SheetContent>

      </Sheet>
      <aside className='hidden w-64 flex-col bg-background border-r-3 p-6 lg:flex'>
        <div
          className='flex cursor-pointer items-center gap-2'
          onClick={() => navigate('/admin/dashboard')}
        >
          <ShieldUser />
          <h1 className='text-xl font-extrabold'>Admin Panel</h1>
        </div>
        <MenueItems />
      </aside>
    </>
  )
}

export default SideBar