import { getAnalytics, Analytics } from 'firebase/analytics';
import { backendApp } from './backend';
const backendAnalytics: Analytics = getAnalytics(backendApp);

export { backendAnalytics };
