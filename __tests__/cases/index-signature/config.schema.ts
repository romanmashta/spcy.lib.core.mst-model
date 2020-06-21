import { TypeInfo, Module, SchemaRepository } from '@spcy/lib.core.reflection';

export const ConfigSchema: TypeInfo = {
  $id: '@spcy/lib.core.mst-model/Config',
  type: 'object',
  additionalProperties: {
    $ref: '@spcy/lib.core.mst-model/Section'
  }
};
SchemaRepository.register(ConfigSchema);

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
    Config: ConfigSchema,
    Section: SectionSchema
  }
};
