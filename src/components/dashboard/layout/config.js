import { paths } from '@/paths';

export const layoutConfig = {
  navItems: [
    {
      key: 'dashboards',
      title: '功能表',
      items: [
        { key: 'overview', title: '總覽', href: paths.dashboard.overview, icon: 'house' },
        { key: 'ecommerce', title: '物件', href: paths.t1, icon: 'cube' },
        {
          key: 'customers',
          title: '客戶資料',
          icon: 'users',
          items: [
            { key: 'customers:create', title: '新增客戶資料', href: paths.dashboard.customers.create },
            { key: 'customers', title: '所有客戶資料', href: paths.dashboard.customers.list },
            { key: 'customers:details', title: '客戶詳細資料', href: paths.dashboard.customers.details('1') },
          ],
        },
        { key: 'rent', title: '承租資訊', href: paths.dashboard.orders.create , icon: 'calendar-check' },
        { key: 'pricing', 
          title: '租金收款', 
          icon: 'credit-card',      
          items: [
            { key: 'invoices', title: 'List invoices', href: paths.dashboard.invoices.list },
            { key: 'invoices:create', title: 'Create invoice', href: paths.dashboard.invoices.create },
            { key: 'invoices:details', title: 'Invoice details', href: paths.dashboard.invoices.details('1') },
          ], 
        },
        { key: 'report', title: '報表', href: paths.dashboard.jobs.browse, icon: 'read-cv-logo' },
        // { key: 'analytics', title: 'Analytics', href: paths.dashboard.analytics, icon: 'chart-pie' },
        // { key: 'crypto', title: 'Crypto', href: paths.dashboard.crypto, icon: 'currency-eth' },
      ],
    },
  ],
};
