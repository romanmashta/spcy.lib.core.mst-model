import { TypeInfo, Module, SchemaRepository } from '@spcy/lib.core.reflection';

export const KeyedConfigSchema: TypeInfo = {
  $id: '@spcy/lib.core.mst-model/KeyedConfig',
  type: 'object',
  additionalProperties: {
    $ref: '@spcy/lib.core.mst-model/Section'
  }
};
SchemaRepository.register(KeyedConfigSchema);

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
SchemaRepository.register(SectionSchema);

export const MetaSchema: Module = {
  $defs: {
    KeyedConfig: KeyedConfigSchema,
    Section: SectionSchema
  }
};
