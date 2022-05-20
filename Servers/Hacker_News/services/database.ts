import {
  Database,
  DatabaseReference,
  getDatabase,
  ref,
} from 'firebase/database';
import { backendApp } from './backend';

const backendDatabase: Database = getDatabase(backendApp);
const backendDatabaseReference: DatabaseReference = ref(backendDatabase);

export { backendDatabase, backendDatabaseReference };
