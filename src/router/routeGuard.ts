import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';

const isAuthenticated = () => {
  return !!localStorage.getItem('userCredentials');
};

export const authenticationGuard: (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => void = (to, from, next) => {
  if (to.meta.requiresAuth && !isAuthenticated()) {
    next('/login');
  } else {
    next();
  }
};
