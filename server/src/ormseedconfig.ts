import ormConfig from '@app/ormconfig';

const ormseedconfig = {
  ...ormConfig,
  migrations: [__dirname + '/database/seeds/**/*{.ts,.js}'],
};

export default ormseedconfig;
