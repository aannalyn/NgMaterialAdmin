import { Menu } from './menu.model';

export const MENUS: Menu[] = [
  {
    title: 'Dashboard',
    icon: 'dashboard',
    link: '/dashboard',
  },
  {
    title: 'Material',
    icon: 'widgets',
    submenus: [
      {
        title: 'Buttons',
        link: '/material/buttons',
      },
      {
        title: 'Cards',
        link: '/material/cards'
      },
      {
        title: 'Grids',
        link: '/material/grids'
      },
      {
        title: 'Icons',
        link: '/material/icons'
      },
      {
        title: 'Lists',
        link: '/material/lists'
      },
      {
        title: 'Tabs',
        link: '/material/tabs'
      },
    ]
  },
];