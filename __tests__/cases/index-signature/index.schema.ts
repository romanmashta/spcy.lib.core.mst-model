import * as r from '@spcy/lib.core.reflection';
import * as m from './index.model';

const PackageName = 'lib.core.mst-model';

const KeyedConfigType: r.TypeInfo = {
  $id: 'KeyedConfig',
  type: 'object',
  additionalProperties: {
    $ref: 'Section'
  }
};
const KeyedConfig: r.Prototype<m.KeyedConfig> = {
  id: KeyedConfigType.$id,
  package: PackageName,
  typeInfo: KeyedConfigType
};
const SectionType: r.TypeInfo = {
  $id: 'Section',
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
  id: SectionType.$id,
  package: PackageName,
  typeInfo: SectionType
};

export const IndexModule: r.Module = {
  $id: PackageName,
  $defs: {
    KeyedConfig: KeyedConfigType,
    Section: SectionType
  }
};

export const Types = {
  KeyedConfig,
  Section
};
