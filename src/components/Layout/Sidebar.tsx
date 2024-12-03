import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';
import {
  LayoutDashboard,
  UserPlus,
  GraduationCap,
  ChevronDown,
  Settings,
  User,
} from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const location = useLocation();
  const [onboardingOpen, setOnboardingOpen] = useState(false);
  const [trainingOpen, setTrainingOpen] = useState(false);

  const menuItems = [
    {
      title: 'Dashboard',
      icon: LayoutDashboard,
      path: '/dashboard',
    },
    {
      title: 'Onboarding',
      icon: UserPlus,
      path: '/onboarding',
      subItems: [
        { title: 'New Hires', path: '/onboarding/new-hires' },
        { title: 'Documentation', path: '/onboarding/documentation' },
      ],
    },
    {
      title: 'Training',
      icon: GraduationCap,
      path: '/training',
      subItems: [
        { title: 'Courses', path: '/training/courses' },
        { title: 'Progress', path: '/training/progress' },
      ],
    },
    {
      title: 'Profile',
      icon: User,
      path: '/profile',
    },
    {
      title: 'Settings',
      icon: Settings,
      path: '/settings',
    },
  ];

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-20 flex h-full w-64 flex-shrink-0 flex-col pt-16 transition-transform duration-200 bg-white border-r border-gray-200 shadow-sm',
        !isOpen && '-translate-x-full'
      )}
    >
      <div className="flex flex-col flex-1 overflow-y-auto">
        <div className="flex-1 px-3 py-4 space-y-1">
          {menuItems.map((item) => (
            <div key={item.title}>
              {item.subItems ? (
                <>
                  <button
                    onClick={() =>
                      item.title === 'Onboarding'
                        ? setOnboardingOpen(!onboardingOpen)
                        : setTrainingOpen(!trainingOpen)
                    }
                    className={cn(
                      'flex items-center w-full p-2 text-base rounded-lg transition-colors duration-200',
                      location.pathname.startsWith(item.path)
                        ? 'bg-primary text-white hover:bg-primary/90'
                        : 'hover:bg-gray-100'
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="ml-3 font-medium">{item.title}</span>
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 ml-auto transition-transform duration-200',
                        item.title === 'Onboarding'
                          ? onboardingOpen && 'rotate-180'
                          : trainingOpen && 'rotate-180'
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      'pl-11 space-y-1 overflow-hidden transition-all duration-200',
                      item.title === 'Onboarding'
                        ? !onboardingOpen && 'h-0'
                        : !trainingOpen && 'h-0'
                    )}
                  >
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.path}
                        to={subItem.path}
                        className={cn(
                          'block p-2 text-sm rounded-lg transition-colors duration-200',
                          location.pathname === subItem.path
                            ? 'bg-primary text-white hover:bg-primary/90'
                            : 'hover:bg-gray-100'
                        )}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.path}
                  className={cn(
                    'flex items-center p-2 text-base rounded-lg transition-colors duration-200',
                    location.pathname === item.path
                      ? 'bg-primary text-white hover:bg-primary/90'
                      : 'hover:bg-gray-100'
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="ml-3 font-medium">{item.title}</span>
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;