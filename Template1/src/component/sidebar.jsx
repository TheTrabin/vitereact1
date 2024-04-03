import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
    const testMenuItems = [
        {
            href: '/',
            title: 'Introduction',
        },
        {
            href: 'about',
            title: 'About',
        },
        {
            href: 'contact',
            title: 'Contact',
        }
    ];

    return (
        <div className='min-h-screen flex flex-row'>
            <header className='bg-gray-200 text-black sticky top-0 h-14 flex flex-row justify-center items-center font-semibold uppercase'>
                Navigation
            </header>
            <div className='flex flex-col md:flex-row flex-1 justify-start'>
                <aside className='bg-gray-100 w-full md:w-60'>
                    <nav>
                        <ul>
                            {testMenuItems.map(({ href, title }) => (
                                <li className='m-2' key={title}>
                                    <NavLink to={href} className='text-black flex justify-center items-center font-semibold uppercase'>
                                        <p>{title}</p>
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </aside>
                <main className={'flex-1'}>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}