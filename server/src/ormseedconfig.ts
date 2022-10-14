import ormConfig from '@app/configs/ormconfig';

const ormseedconfig = {
  ...ormConfig,
  migrations: [__dirname + '/database/seeds/*.ts'],
};

export default ormseedconfig;
