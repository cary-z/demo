import { NavLink, Outlet } from 'react-router-dom';

import { cn } from '../lib/utils';

const NAV_ITEMS = [
  { to: '/', label: 'Home', end: true },
  { to: '/demo', label: 'Demo' },
  { to: '/about', label: 'About' },
];

const RootLayout = () => {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <header className="border-b border-slate-200 bg-white px-8 py-4">
        <nav className="flex items-center gap-4">
          {NAV_ITEMS.map(item => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                cn(
                  'rounded-md px-3 py-2 text-sm font-semibold transition-colors',
                  isActive
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-slate-800 hover:bg-slate-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500'
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main className="flex-1 px-8 py-10">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
