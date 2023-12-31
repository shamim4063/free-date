// setupDatabase.ts

import { connectionOptions } from 'db/db.config';
import { createConnection } from 'typeorm';

async function setupDatabase() {
  const connection = await createConnection(connectionOptions);

  // Create Schemas
  await connection.query('CREATE SCHEMA IF NOT EXISTS "admin"');
  await connection.query('CREATE SCHEMA IF NOT EXISTS "client"');

  // Close the connection
  await connection.close();
}

// Run the setup
setupDatabase().then(() => {
  console.log('Database setup complete.');
}).catch(error => {
  console.error('Error during database setup:', error);
});