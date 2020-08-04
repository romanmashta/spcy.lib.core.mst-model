/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as r from '@spcy/lib.core.reflection';
import * as m from './index.model';

const ConfigType: r.TypeInfo = {
  $id: 'Config',
  $package: 'lib.core.mst-model',
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
  ref: { $ref: ConfigType.$id!, $refPackage: ConfigType.$package! },
  typeInfo: ConfigType
};

export const IndexModule: r.Module = {
  $id: 'lib.core.mst-model',
  $defs: {
    Config: ConfigType
  }
};

export const Types = {
  Config
};
