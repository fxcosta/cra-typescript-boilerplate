import { LayoutWrapper } from '../components/GuestLayout';
import Home from '../pages/Home';

export type RouteItem = {
  path: string;
  breadcrumb?: React.ComponentType | React.ElementType | string;
  pageTitle?: string;
  isPrivate?: boolean;
  exact?: boolean;
  layout: React.ReactNode;
  component: React.ReactNode;
};

export const routesList: RouteItem[] = [
  {
    path: '/',
    exact: true,
    breadcrumb: '',
    isPrivate: false,
    layout: LayoutWrapper,
    component: Home,
  },
];
