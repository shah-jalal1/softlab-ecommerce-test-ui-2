import {MenuAdmin} from '../../interfaces/menu-admin';


export const menuItemsAdmin: MenuAdmin[] = [

  // Parent Dashboard
  {
    id: '1',
    title: 'Dashboard',
    icon: 'dashboard',
    hasSubMenu: false,
    parentId: null,
    routerLink: 'dashboard',
    href: null,
    target: null
  },

  // Parent Customization
  {
    id: '2',
    title: 'Customization',
    icon: 'dashboard_customize',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: 'a1',
    title: 'Category Menu',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '2',
    routerLink: 'category-menu',
    href: null,
    target: null
  },

  {
    id: 'a2',
    title: 'Carousel',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '2',
    routerLink: 'carousel',
    href: null,
    target: null
  },
  {
    id: 'a3',
    title: 'Shop Info',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '2',
    routerLink: 'shop-info',
    href: null,
    target: null
  },
  {
    id: 'a4',
    title: 'Footer Data',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '2',
    routerLink: 'footer-data',
    href: null,
    target: null
  },
  {
    id: 'a5',
    title: 'Promo Advertise',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '2',
    routerLink: 'promo-page',
    href: null,
    target: null
  },
  // Parent Products
  {
    id: '3',
    title: 'Catalog',
    icon: 'category',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: 'b1',
    title: 'Attributes',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '3',
    routerLink: 'attributes',
    href: null,
    target: null
  },
  {
    id: 'b10',
    title: 'Generics',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '3',
    routerLink: 'generics',
    href: null,
    target: null
  },
  {
    id: 'b2',
    title: 'Brands',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '3',
    routerLink: 'brands',
    href: null,
    target: null
  },
  {
    id: 'b3',
    title: 'Categories',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '3',
    routerLink: 'categories',
    href: null,
    target: null
  },
  {
    id: 'b3',
    title: 'Sub Categories',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '3',
    routerLink: 'sub-categories',
    href: null,
    target: null
  },
  {
    id: 'b34r',
    title: 'Unit Types',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '3',
    routerLink: 'unit-types',
    href: null,
    target: null
  },
  // Parent Products
  {
    id: '100',
    title: 'Products',
    icon: 'view_list',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: '100b1',
    title: 'Products List',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '100',
    routerLink: 'products',
    href: null,
    target: null
  },
  {
    id: '100b2',
    title: 'Add Product',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '100',
    routerLink: 'add-product',
    href: null,
    target: null
  },
  // Parent Offer
  {
    id: '745Z',
    title: 'Offers',
    icon: 'local_offer',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  // {
  //   id: '74RX',
  //   title: 'Deal on Play',
  //   icon: 'follow_the_signs',
  //   hasSubMenu: false,
  //   parentId: '745Z',
  //   routerLink: 'deal-on-play',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: '74RY',
  //   title: 'Deal of The Day',
  //   icon: 'follow_the_signs',
  //   hasSubMenu: false,
  //   parentId: '745Z',
  //   routerLink: 'deal-of-the-day',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: '74RZ',
  //   title: 'Featured Product',
  //   icon: 'follow_the_signs',
  //   hasSubMenu: false,
  //   parentId: '745Z',
  //   routerLink: 'featured-product',
  //   href: null,
  //   target: null
  // },
  {
    id: '74RZ2',
    title: 'Featured Category',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '745Z',
    routerLink: 'featured-category',
    href: null,
    target: null
  },
  // Parent Coupons
  {
    id: '8',
    title: 'Coupons',
    icon: 'vpn_key',
    hasSubMenu: false,
    parentId: '745Z',
    routerLink: 'coupons',
    href: null,
    target: null
  },
  {
    id: '74BRY',
    title: 'Banner',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '745Z',
    routerLink: 'banner',
    href: null,
    target: null
  },
  {
    id: '932r',
    title: 'Promotional Offer',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '745Z',
    routerLink: 'promotional-offer',
    href: null,
    target: null
  },
  {
    id: '1024',
    title: 'Offer products',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '745Z',
    routerLink: 'offer-products',
    href: null,
    target: null
  },
  // Parent Gallery Folder
  {
    id: '731',
    title: 'Gallery',
    icon: 'collections',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: '45x',
    title: 'Image Folder',
    icon: 'folder',
    hasSubMenu: false,
    parentId: '731',
    routerLink: 'image-folder',
    href: null,
    target: null
  },
  // Parent Gallery
  {
    id: '4',
    title: 'Image Gallery',
    icon: 'collections',
    hasSubMenu: false,
    parentId: '731',
    routerLink: 'image-gallery',
    href: null,
    target: null
  },
  // {
  //   id: '7895i',
  //   title: 'Installations and Repair',
  //   icon: 'build',
  //   hasSubMenu: true,
  //   parentId: null,
  //   routerLink: 'null',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: '7896i',
  //   title: 'Add New Type',
  //   icon: 'build',
  //   hasSubMenu: false,
  //   parentId: '7895i',
  //   routerLink: 'installations-and-repair-type',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: '7897i',
  //   title: 'Installations and Repair',
  //   icon: 'build',
  //   hasSubMenu: false,
  //   parentId: '7895i',
  //   routerLink: 'installations-and-repair',
  //   href: null,
  //   target: null
  // },
  // Parent Additional Pages
  {
    id: '45x',
    title: 'Additional Pages',
    icon: 'layers',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: '45xd21',
    title: 'About Us Pages',
    icon: 'layers',
    hasSubMenu: false,
    parentId: '45x',
    routerLink: 'about-us-pages',
    href: null,
    target: null
  },
  {
    id: '45xd22',
    title: 'Other Pages',
    icon: 'layers',
    hasSubMenu: false,
    parentId: '45x',
    routerLink: 'additional-pages',
    href: null,
    target: null
  },
  {
    id: '45xd232',
    title: 'FAQ',
    icon: 'layers',
    hasSubMenu: false,
    parentId: '45x',
    routerLink: 'faq',
    href: null,
    target: null
  },

  // Parent Sales
  {
    id: '4',
    title: 'Sales',
    icon: 'local_mall',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: 'c1',
    title: 'Orders',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '4',
    routerLink: 'orders',
    href: null,
    target: null
  },
  {
    id: 'c1p',
    title: 'Prescription Orders',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '4',
    routerLink: 'prescription-orders',
    href: null,
    target: null
  },
  {
    id: 'c1',
    title: 'Transactions',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '4',
    routerLink: 'transactions',
    href: null,
    target: null
  },
  {
    id: '45x54156',
    title: 'Shipping Charge',
    icon: 'attach_money',
    hasSubMenu: false,
    parentId: '4',
    routerLink: 'shipping-charge',
    href: null,
    target: null
  },
  {
    id: '4544yz',
    title: 'Best Selling Products',
    icon: 'attach_money',
    hasSubMenu: false,
    parentId: '4',
    routerLink: 'best-sell-products',
    href: null,
    target: null
  },
  // {
  //   id: '45yz',
  //   title: 'Warranty Dashboard',
  //   icon: 'attach_money',
  //   hasSubMenu: false,
  //   parentId: '4',
  //   routerLink: 'warranty-dashboard',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: '45y56',
  //   title: 'Product Authenticators',
  //   icon: 'attach_money',
  //   hasSubMenu: false,
  //   parentId: '4',
  //   routerLink: 'product-authenticators',
  //   href: null,
  //   target: null
  // },
  // Roles Users
  {
    id: '631',
    title: 'Admin Control',
    icon: 'offline_bolt',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: '51',
    title: 'Roles',
    icon: 'offline_bolt',
    hasSubMenu: false,
    parentId: '631',
    routerLink: 'roles',
    href: null,
    target: null
  },
  // Parent Users
  {
    id: '5',
    title: 'Users',
    icon: 'group_add',
    hasSubMenu: false,
    parentId: '631',
    routerLink: 'users',
    href: null,
    target: null
  },
  // Parent Customers
  {
    id: '6',
    title: 'Customers',
    icon: 'people',
    hasSubMenu: false,
    parentId: null,
    routerLink: 'customers',
    href: null,
    target: null
  },
// Parent
  {
    id: '412p',
    title: 'Blog Area',
    icon: 'rss_feed',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: '412c',
    title: 'Blogs',
    icon: 'people',
    hasSubMenu: false,
    parentId: '412p',
    routerLink: 'blogs',
    href: null,
    target: null
  },

  // {
  //   id: '413c',
  //   title: 'Career at Esquire',
  //   icon: 'people',
  //   hasSubMenu: false,
  //   parentId: '412p',
  //   routerLink: 'career-esquire',
  //   href: null,
  //   target: null
  // },
  // Parent Reviews
  {
    id: 'push123',
    title: 'Push Notification',
    icon: 'notifications',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: 'p10',
    title: 'App List',
    icon: 'list',
    hasSubMenu: false,
    parentId: 'push123',
    routerLink: null,
    href: 'https://app.onesignal.com',
    target: '_blank'
  },
  {
    id: 'p11',
    title: 'Dashboard',
    icon: 'space_dashboard',
    hasSubMenu: false,
    parentId: 'push123',
    routerLink: null,
    href: 'https://app.onesignal.com/apps/133cae47-429e-44a4-bf2a-34a47562793c',
    target: '_blank'
  },
  {
    id: 'p12',
    title: 'Add Notification',
    icon: 'add',
    hasSubMenu: false,
    parentId: 'push123',
    routerLink: null,
    href: 'https://app.onesignal.com/apps/133cae47-429e-44a4-bf2a-34a47562793c/notifications/new',
    target: '_blank'
  },
  // Parent
  {
    id: '7',
    title: 'Contact Us',
    icon: 'drafts',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: '7newsletter',
    title: 'Newsletter',
    icon: 'drafts',
    hasSubMenu: false,
    parentId: '7',
    routerLink: 'newsletter',
    href: null,
    target: null
  },
  {
    id: '7contact',
    title: 'Contact Data',
    icon: 'drafts',
    hasSubMenu: false,
    parentId: '7',
    routerLink: 'contact-us',
    href: null,
    target: null
  },

  // Parent StoreInfo
  // {
  //   id: '2bc3',
  //   title: 'Store and Dealer',
  //   icon: 'offline_bolt',
  //   hasSubMenu: true,
  //   parentId: null,
  //   routerLink: null,
  //   href: null,
  //   target: null
  // },
  // {
  //   id: '777',
  //   title: 'Store Info',
  //   icon: 'vpn_key',
  //   hasSubMenu: false,
  //   parentId: '2bc3',
  //   routerLink: 'store-info',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: '763',
  //   title: 'Dealer Info',
  //   icon: 'vpn_key',
  //   hasSubMenu: false,
  //   parentId: '2bc3',
  //   routerLink: 'dealer-info',
  //   href: null,
  //   target: null
  // },
  // Parent Reviews
  {
    id: '8rd2',
    title: 'Review and Discussion',
    icon: 'offline_bolt',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: '9',
    title: 'Reviews',
    icon: 'reviews',
    hasSubMenu: false,
    parentId: '8rd2',
    routerLink: 'reviews',
    href: null,
    target: null
  },
  // {
  //   id: '911',
  //   title: 'Discussion',
  //   icon: 'reviews',
  //   hasSubMenu: false,
  //   parentId: '8rd2',
  //   routerLink: 'discussions',
  //   href: null,
  //   target: null
  // },

  // Parent Support
  {
    id: '10',
    title: 'Support',
    icon: 'support_agent',
    hasSubMenu: false,
    parentId: null,
    routerLink: null,
    href: 'https://softlabit.com/',
    target: '_blank'
  },

];

export const menuItemsSuperAdmin: MenuAdmin[] = [

  // Parent Dashboard
  {
    id: '1',
    title: 'Dashboard',
    icon: 'dashboard',
    hasSubMenu: false,
    parentId: null,
    routerLink: 'dashboard',
    href: null,
    target: null
  },
  // Parent Customization
  {
    id: '2',
    title: 'Customization',
    icon: 'dashboard_customize',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: 'a1',
    title: 'Category Menu',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '2',
    routerLink: 'category-menu',
    href: null,
    target: null
  },

  {
    id: 'a2',
    title: 'Carousel',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '2',
    routerLink: 'carousel',
    href: null,
    target: null
  },
  {
    id: 'a3',
    title: 'Shop Info',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '2',
    routerLink: 'shop-info',
    href: null,
    target: null
  },
  {
    id: 'a4',
    title: 'Footer Data',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '2',
    routerLink: 'footer-data',
    href: null,
    target: null
  },
  {
    id: 'a5',
    title: 'Promo Advertise',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '2',
    routerLink: 'promo-page',
    href: null,
    target: null
  },
  // Parent Products
  {
    id: '3',
    title: 'Catalog',
    icon: 'category',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: 'b2',
    title: 'Brands',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '3',
    routerLink: 'brands',
    href: null,
    target: null
  },
  {
    id: 'b3',
    title: 'Categories',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '3',
    routerLink: 'categories',
    href: null,
    target: null
  },
  {
    id: 'b34r',
    title: 'Unit Types',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '3',
    routerLink: 'unit-types',
    href: null,
    target: null
  },
  // Parent Products
  {
    id: '100',
    title: 'Products',
    icon: 'view_list',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: '100b1',
    title: 'Products List',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '100',
    routerLink: 'products',
    href: null,
    target: null
  },
  {
    id: '100b2',
    title: 'Add Product',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '100',
    routerLink: 'add-product',
    href: null,
    target: null
  },
  // Parent Offer
  {
    id: '745Z',
    title: 'Offers',
    icon: 'local_offer',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  // {
  //   id: '74RX',
  //   title: 'Deal on Play',
  //   icon: 'follow_the_signs',
  //   hasSubMenu: false,
  //   parentId: '745Z',
  //   routerLink: 'deal-on-play',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: '74RY',
  //   title: 'Deal of The Day',
  //   icon: 'follow_the_signs',
  //   hasSubMenu: false,
  //   parentId: '745Z',
  //   routerLink: 'deal-of-the-day',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: '74RZ',
  //   title: 'Featured Product',
  //   icon: 'follow_the_signs',
  //   hasSubMenu: false,
  //   parentId: '745Z',
  //   routerLink: 'featured-product',
  //   href: null,
  //   target: null
  // },
  {
    id: '74RZ2',
    title: 'Featured Category',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '745Z',
    routerLink: 'featured-category',
    href: null,
    target: null
  },
  // Parent Coupons
  {
    id: '8',
    title: 'Coupons',
    icon: 'vpn_key',
    hasSubMenu: false,
    parentId: '745Z',
    routerLink: 'coupons',
    href: null,
    target: null
  },
  {
    id: '74BRY',
    title: 'Banner',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '745Z',
    routerLink: 'banner',
    href: null,
    target: null
  },
  {
    id: '932r',
    title: 'Promotional Offer',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '745Z',
    routerLink: 'promotional-offer',
    href: null,
    target: null
  },
  {
    id: '1024',
    title: 'Offer products',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '745Z',
    routerLink: 'offer-products',
    href: null,
    target: null
  },
  // Parent Gallery Folder
  {
    id: '731yh',
    title: 'Gallery',
    icon: 'collections',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: '4578sa',
    title: 'Image Folder',
    icon: 'folder',
    hasSubMenu: false,
    parentId: '731yh',
    routerLink: 'image-folder',
    href: null,
    target: null
  },
  // Parent Gallery
  {
    id: '4jusa',
    title: 'Image Gallery',
    icon: 'collections',
    hasSubMenu: false,
    parentId: '731yh',
    routerLink: 'image-gallery',
    href: null,
    target: null
  },
  // {
  //   id: '7895i',
  //   title: 'Installations and Repair',
  //   icon: 'build',
  //   hasSubMenu: true,
  //   parentId: null,
  //   routerLink: 'null',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: '7896i3',
  //   title: 'Add New Type',
  //   icon: 'build',
  //   hasSubMenu: false,
  //   parentId: '7895i',
  //   routerLink: 'installations-and-repair-type',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: '7897i',
  //   title: 'Installations and Repair',
  //   icon: 'build',
  //   hasSubMenu: false,
  //   parentId: '7895i',
  //   routerLink: 'installations-and-repair',
  //   href: null,
  //   target: null
  // },
  // Parent Additional Pages
  {
    id: '45x',
    title: 'Additional Pages',
    icon: 'layers',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: '45xd21',
    title: 'About Us Pages',
    icon: 'layers',
    hasSubMenu: false,
    parentId: '45x',
    routerLink: 'about-us-pages',
    href: null,
    target: null
  },
  {
    id: '45xd22',
    title: 'Other Pages',
    icon: 'layers',
    hasSubMenu: false,
    parentId: '45x',
    routerLink: 'additional-pages',
    href: null,
    target: null
  },
  {
    id: '45xd232',
    title: 'FAQ',
    icon: 'layers',
    hasSubMenu: false,
    parentId: '45x',
    routerLink: 'faq',
    href: null,
    target: null
  },

  // Parent Sales
  {
    id: '4',
    title: 'Sales',
    icon: 'local_mall',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: 'c1',
    title: 'Orders',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '4',
    routerLink: 'orders',
    href: null,
    target: null
  },
  {
    id: 'c1p',
    title: 'Prescription Orders',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '4',
    routerLink: 'prescription-orders',
    href: null,
    target: null
  },
  {
    id: 'c1',
    title: 'Transactions',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '4',
    routerLink: 'transactions',
    href: null,
    target: null
  },
  {
    id: '45x54156',
    title: 'Shipping Charge',
    icon: 'attach_money',
    hasSubMenu: false,
    parentId: '4',
    routerLink: 'shipping-charge',
    href: null,
    target: null
  },
  {
    id: '4544yz',
    title: 'Best Selling Products',
    icon: 'attach_money',
    hasSubMenu: false,
    parentId: '4',
    routerLink: 'best-sell-products',
    href: null,
    target: null
  },
  // {
  //   id: '45yz',
  //   title: 'Warranty Dashboard',
  //   icon: 'attach_money',
  //   hasSubMenu: false,
  //   parentId: '4',
  //   routerLink: 'warranty-dashboard',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: '45y56',
  //   title: 'Product Authenticators',
  //   icon: 'attach_money',
  //   hasSubMenu: false,
  //   parentId: '4',
  //   routerLink: 'product-authenticators',
  //   href: null,
  //   target: null
  // },
  // Roles Users
  {
    id: '631',
    title: 'Admin Control',
    icon: 'offline_bolt',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: '51',
    title: 'Roles',
    icon: 'offline_bolt',
    hasSubMenu: false,
    parentId: '631',
    routerLink: 'roles',
    href: null,
    target: null
  },
  // Parent Users
  {
    id: '5',
    title: 'Users',
    icon: 'group_add',
    hasSubMenu: false,
    parentId: '631',
    routerLink: 'users',
    href: null,
    target: null
  },
  // Parent Customers
  {
    id: '6',
    title: 'Customers',
    icon: 'people',
    hasSubMenu: false,
    parentId: null,
    routerLink: 'customers',
    href: null,
    target: null
  },
// Parent
  {
    id: '412p',
    title: 'Blog Area',
    icon: 'rss_feed',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: '412c',
    title: 'Blogs',
    icon: 'people',
    hasSubMenu: false,
    parentId: '412p',
    routerLink: 'blogs',
    href: null,
    target: null
  },

  // {
  //   id: '413c',
  //   title: 'Career at Esquire',
  //   icon: 'people',
  //   hasSubMenu: false,
  //   parentId: '412p',
  //   routerLink: 'career-esquire',
  //   href: null,
  //   target: null
  // },
  // Parent Reviews
  {
    id: 'push123',
    title: 'Push Notification',
    icon: 'notifications',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: 'p10',
    title: 'App List',
    icon: 'list',
    hasSubMenu: false,
    parentId: 'push123',
    routerLink: null,
    href: 'https://app.onesignal.com',
    target: '_blank'
  },
  {
    id: 'p11',
    title: 'Dashboard',
    icon: 'space_dashboard',
    hasSubMenu: false,
    parentId: 'push123',
    routerLink: null,
    href: 'https://app.onesignal.com/apps/133cae47-429e-44a4-bf2a-34a47562793c',
    target: '_blank'
  },
  {
    id: 'p12',
    title: 'Add Notification',
    icon: 'add',
    hasSubMenu: false,
    parentId: 'push123',
    routerLink: null,
    href: 'https://app.onesignal.com/apps/133cae47-429e-44a4-bf2a-34a47562793c/notifications/new',
    target: '_blank'
  },
  // Parent
  {
    id: '7',
    title: 'Contact Us',
    icon: 'drafts',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: '7newsletter',
    title: 'Newsletter',
    icon: 'drafts',
    hasSubMenu: false,
    parentId: '7',
    routerLink: 'newsletter',
    href: null,
    target: null
  },
  {
    id: '7contact',
    title: 'Contact Data',
    icon: 'drafts',
    hasSubMenu: false,
    parentId: '7',
    routerLink: 'contact-us',
    href: null,
    target: null
  },

  // Parent StoreInfo
  // {
  //   id: '2bc3',
  //   title: 'Store and Dealer',
  //   icon: 'offline_bolt',
  //   hasSubMenu: true,
  //   parentId: null,
  //   routerLink: null,
  //   href: null,
  //   target: null
  // },
  // {
  //   id: '777',
  //   title: 'Store Info',
  //   icon: 'vpn_key',
  //   hasSubMenu: false,
  //   parentId: '2bc3',
  //   routerLink: 'store-info',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: '763',
  //   title: 'Dealer Info',
  //   icon: 'vpn_key',
  //   hasSubMenu: false,
  //   parentId: '2bc3',
  //   routerLink: 'dealer-info',
  //   href: null,
  //   target: null
  // },
  // Parent Reviews
  {
    id: '8rd2',
    title: 'Review and Discussion',
    icon: 'offline_bolt',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: '9',
    title: 'Reviews',
    icon: 'reviews',
    hasSubMenu: false,
    parentId: '8rd2',
    routerLink: 'reviews',
    href: null,
    target: null
  },
  // {
  //   id: '911',
  //   title: 'Discussion',
  //   icon: 'reviews',
  //   hasSubMenu: false,
  //   parentId: '8rd2',
  //   routerLink: 'discussions',
  //   href: null,
  //   target: null
  // },
  {
    id: '3RTGFD',
    title: 'Backup & Restore',
    icon: 'warning',
    hasSubMenu: false,
    parentId: null,
    routerLink: 'backup-restore',
    href: null,
    target: null
  },
  // Parent Support
  {
    id: '10',
    title: 'Support',
    icon: 'support_agent',
    hasSubMenu: false,
    parentId: null,
    routerLink: null,
    href: 'https://softlabit.com/',
    target: '_blank'
  },

];


export const menuItemsEditor: MenuAdmin[] = [

  // Parent Dashboard
  {
    id: '1',
    title: 'Dashboard',
    icon: 'dashboard',
    hasSubMenu: false,
    parentId: null,
    routerLink: 'dashboard',
    href: null,
    target: null
  },
  // Parent Customization
  {
    id: '2',
    title: 'Customization',
    icon: 'dashboard_customize',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: 'a1',
    title: 'Category Menu',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '2',
    routerLink: 'category-menu',
    href: null,
    target: null
  },

  {
    id: 'a2',
    title: 'Carousel',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '2',
    routerLink: 'carousel',
    href: null,
    target: null
  },
  {
    id: 'a3',
    title: 'Shop Info',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '2',
    routerLink: 'shop-info',
    href: null,
    target: null
  },
  {
    id: 'a4',
    title: 'Footer Data',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '2',
    routerLink: 'footer-data',
    href: null,
    target: null
  },
  // Parent Products
  {
    id: '3',
    title: 'Catalog',
    icon: 'category',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: 'b1',
    title: 'Attributes',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '3',
    routerLink: 'attributes',
    href: null,
    target: null
  },
  {
    id: 'b10',
    title: 'Generics',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '3',
    routerLink: 'generics',
    href: null,
    target: null
  },
  {
    id: 'b2',
    title: 'Brands',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '3',
    routerLink: 'brands',
    href: null,
    target: null
  },
  {
    id: 'b3',
    title: 'Categories',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '3',
    routerLink: 'categories',
    href: null,
    target: null
  },
  {
    id: 'b3',
    title: 'Sub Categories',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '3',
    routerLink: 'sub-categories',
    href: null,
    target: null
  },
  {
    id: 'b34r',
    title: 'Unit Types',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '3',
    routerLink: 'unit-types',
    href: null,
    target: null
  },
  // Parent Products
  {
    id: '100',
    title: 'Products',
    icon: 'view_list',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: '100b1',
    title: 'Products List',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '100',
    routerLink: 'products',
    href: null,
    target: null
  },
  {
    id: '100b2',
    title: 'Add Product',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '100',
    routerLink: 'add-product',
    href: null,
    target: null
  },
  // Parent Offer
  {
    id: '745Z',
    title: 'Offers',
    icon: 'local_offer',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  // {
  //   id: '74RX',
  //   title: 'Deal on Play',
  //   icon: 'follow_the_signs',
  //   hasSubMenu: false,
  //   parentId: '745Z',
  //   routerLink: 'deal-on-play',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: '74RY',
  //   title: 'Deal of The Day',
  //   icon: 'follow_the_signs',
  //   hasSubMenu: false,
  //   parentId: '745Z',
  //   routerLink: 'deal-of-the-day',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: '74RZ',
  //   title: 'Featured Product',
  //   icon: 'follow_the_signs',
  //   hasSubMenu: false,
  //   parentId: '745Z',
  //   routerLink: 'featured-product',
  //   href: null,
  //   target: null
  // },
  {
    id: '74RZ2',
    title: 'Featured Category',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '745Z',
    routerLink: 'featured-category',
    href: null,
    target: null
  },
  // Parent Coupons
  {
    id: '8',
    title: 'Coupons',
    icon: 'vpn_key',
    hasSubMenu: false,
    parentId: '745Z',
    routerLink: 'coupons',
    href: null,
    target: null
  },
  {
    id: '74BRY',
    title: 'Banner',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '745Z',
    routerLink: 'banner',
    href: null,
    target: null
  },
  {
    id: '932r',
    title: 'Promotional Offer',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '745Z',
    routerLink: 'promotional-offer',
    href: null,
    target: null
  },
  {
    id: '1024',
    title: 'Offer products',
    icon: 'follow_the_signs',
    hasSubMenu: false,
    parentId: '745Z',
    routerLink: 'offer-products',
    href: null,
    target: null
  },
  // Parent Gallery Folder
  {
    id: '731yh',
    title: 'Gallery',
    icon: 'collections',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: '7895i',
    title: 'Image Folder',
    icon: 'folder',
    hasSubMenu: false,
    parentId: '731yh',
    routerLink: 'image-folder',
    href: null,
    target: null
  },
  // Parent Gallery
  {
    id: '7896i3',
    title: 'Image Gallery',
    icon: 'collections',
    hasSubMenu: false,
    parentId: '731yh',
    routerLink: 'image-gallery',
    href: null,
    target: null
  },
  // {
  //   id: '7895i',
  //   title: 'Installations and Repair',
  //   icon: 'build',
  //   hasSubMenu: true,
  //   parentId: null,
  //   routerLink: 'null',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: '7896i',
  //   title: 'Add New Type',
  //   icon: 'build',
  //   hasSubMenu: false,
  //   parentId: '7895i',
  //   routerLink: 'installations-and-repair-type',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: '7897i',
  //   title: 'Installations and Repair',
  //   icon: 'build',
  //   hasSubMenu: false,
  //   parentId: '7895i',
  //   routerLink: 'installations-and-repair',
  //   href: null,
  //   target: null
  // },
  // Parent Additional Pages
  {
    id: '45x',
    title: 'Additional Pages',
    icon: 'layers',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: '45xd21',
    title: 'About Us Pages',
    icon: 'layers',
    hasSubMenu: false,
    parentId: '45x',
    routerLink: 'about-us-pages',
    href: null,
    target: null
  },
  {
    id: '45xd22',
    title: 'Other Pages',
    icon: 'layers',
    hasSubMenu: false,
    parentId: '45x',
    routerLink: 'additional-pages',
    href: null,
    target: null
  },
  {
    id: '45xd232',
    title: 'FAQ',
    icon: 'layers',
    hasSubMenu: false,
    parentId: '45x',
    routerLink: 'faq',
    href: null,
    target: null
  },
  // Parent
  {
    id: '412p',
    title: 'Blog Area',
    icon: 'rss_feed',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: '412c',
    title: 'Blogs',
    icon: 'people',
    hasSubMenu: false,
    parentId: '412p',
    routerLink: 'blogs',
    href: null,
    target: null
  },

  // {
  //   id: '413c',
  //   title: 'Career at Esquire',
  //   icon: 'people',
  //   hasSubMenu: false,
  //   parentId: '412p',
  //   routerLink: 'career-esquire',
  //   href: null,
  //   target: null
  // },
  // Parent
  {
    id: '7',
    title: 'Contact Us',
    icon: 'drafts',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: '7newsletter',
    title: 'Newsletter',
    icon: 'drafts',
    hasSubMenu: false,
    parentId: '7',
    routerLink: 'newsletter',
    href: null,
    target: null
  },
  {
    id: '7contact',
    title: 'Contact Data',
    icon: 'drafts',
    hasSubMenu: false,
    parentId: '7',
    routerLink: 'contact-us',
    href: null,
    target: null
  },

  // Parent StoreInfo
  // {
  //   id: '2bc3',
  //   title: 'Store and Dealer',
  //   icon: 'offline_bolt',
  //   hasSubMenu: true,
  //   parentId: null,
  //   routerLink: null,
  //   href: null,
  //   target: null
  // },
  // {
  //   id: '777',
  //   title: 'Store Info',
  //   icon: 'vpn_key',
  //   hasSubMenu: false,
  //   parentId: '2bc3',
  //   routerLink: 'store-info',
  //   href: null,
  //   target: null
  // },
  // {
  //   id: '763',
  //   title: 'Dealer Info',
  //   icon: 'vpn_key',
  //   hasSubMenu: false,
  //   parentId: '2bc3',
  //   routerLink: 'dealer-info',
  //   href: null,
  //   target: null
  // },
  // Parent Reviews
  {
    id: '8rd2',
    title: 'Review',
    icon: 'offline_bolt',
    hasSubMenu: true,
    parentId: null,
    routerLink: null,
    href: null,
    target: null
  },
  {
    id: '9',
    title: 'Reviews',
    icon: 'reviews',
    hasSubMenu: false,
    parentId: '8rd2',
    routerLink: 'reviews',
    href: null,
    target: null
  },
  // {
  //   id: '911',
  //   title: 'Discussion',
  //   icon: 'reviews',
  //   hasSubMenu: false,
  //   parentId: '8rd2',
  //   routerLink: 'discussion',
  //   href: null,
  //   target: null
  // },
  // Parent Support
  {
    id: '10',
    title: 'Support',
    icon: 'support_agent',
    hasSubMenu: false,
    parentId: null,
    routerLink: null,
    href: 'https://softlabit.com/',
    target: '_blank'
  }

];
