import { TypeInfo, Module, SchemaRepository } from '@spcy/lib.core.reflection';

export const ConfigSchema: TypeInfo = {
  $id: '#/$defs/Config',
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
SchemaRepository.register(ConfigSchema);

export const MetaSchema: Module = {
  $defs: {
    Config: ConfigSchema
  }
};
