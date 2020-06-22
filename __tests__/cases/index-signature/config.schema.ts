import { TypeInfo, Module, SchemaRepository } from '@spcy/lib.core.reflection';

export const KeyedConfigSchema: TypeInfo = {
  $id: '#/$defs/KeyedConfig',
  type: 'object',
  additionalProperties: {
    $ref: '#/$defs/Section'
  }
};
SchemaRepository.register(KeyedConfigSchema);

export const SectionSchema: TypeInfo = {
  $id: '#/$defs/Section',
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
