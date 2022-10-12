import ormConfig from '@app/ormconfig';

const ormseedconfig = {
  ...ormConfig,
  migrations: [__dirname + '/database/seeds/*.ts'],
};

export default ormseedconfig;
