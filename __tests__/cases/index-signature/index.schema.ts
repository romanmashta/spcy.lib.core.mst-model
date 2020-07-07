import * as r from '@spcy/lib.core.reflection';
import * as m from './index.model';

const KeyedConfigType: r.TypeInfo = {
  $id: 'KeyedConfig',
  $package: 'lib.core.mst-model',
  type: 'object',
  additionalProperties: {
    $ref: 'Section',
    $refPackage: 'lib.core.mst-model'
  }
};

const KeyedConfig: r.Prototype<m.KeyedConfig> = {
  $ref: KeyedConfigType.$id!,
  $refPackage: KeyedConfigType.$package!,
  typeInfo: KeyedConfigType
};

const SectionType: r.TypeInfo = {
  $id: 'Section',
  $package: 'lib.core.mst-model',
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

const Section: r.Prototype<m.Section> = {
  $ref: SectionType.$id!,
  $refPackage: SectionType.$package!,
  typeInfo: SectionType
};

export const IndexModule: r.Module = {
  $id: 'lib.core.mst-model',
  $defs: {
    KeyedConfig: KeyedConfigType,
    Section: SectionType
  }
};

export const Types = {
  KeyedConfig,
  Section
};
