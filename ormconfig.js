module.exports = {
  type: 'mysql',
  host: 'database-1.crjw48i2voq5.ap-northeast-2.rds.amazonaws.com',
  port: 3306,
  username: 'dreamaker888',
  password: 'DreaMaker88!',
  database: 'test_db_nest',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
