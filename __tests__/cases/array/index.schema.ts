import * as r from '@spcy/lib.core.reflection';
import * as m from './index.model';

const PackageName = 'lib.core.mst-model';

const ConfigType: r.TypeInfo = {
  $id: 'Config',
  type: 'object',
  required: ['colors', 'params'],
  properties: {
    colors: {
      type: 'array',
      items: {
        type: 'string'
      }
    },
    params: {
      type: 'array',
      items: {
        type: 'object',
        required: ['key', 'value', 'index'],
        properties: {
          key: {
            type: 'string'
          },
          value: {
            type: 'string'
          },
          index: {
            type: 'number'
          }
        }
      }
    }
  }
};
const Config: r.Prototype<m.Config> = {
  id: ConfigType.$id,
  package: PackageName,
  typeInfo: ConfigType
};

export const IndexModule: r.Module = {
  $id: PackageName,
  $defs: {
    Config: ConfigType
  }
};

export const Types = {
  Config
};
