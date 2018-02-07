
export const MENUS = [
  [
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
          title: 'Lists',
          link: '/material/lists'
        },
        {
          title: 'Progress',
          link: '/material/progress'
        },
        {
          title: 'Tabs',
          link: '/material/tabs'
        },
      ]
    },
  ],
  [
    {
      title: 'Settings',
      icon: 'settings',
      link: '/settings',
    },
    {
      title: 'Logout',
      icon: 'exit_to_app',
    },
  ]

];