import { TypeInfo, Module } from '@spcy/lib.core.reflection';

export const ConfigSchema: TypeInfo = {
  $id: '@spcy/lib.core.mst-model/Config',
  type: 'object',
  additionalProperties: {
    $ref: '@spcy/lib.core.mst-model/Section'
  }
};

export const SectionSchema: TypeInfo = {
  $id: '@spcy/lib.core.mst-model/Section',
  type: 'object',
  required: ['id', 'secret'],
  properties: {
    id: {
      type: 'string'
    },
    secret: {
      type: 'string'
    }
  }
};

export const MetaSchema: Module = {
  $defs: {
    Config: ConfigSchema,
    Section: SectionSchema
  }
};
