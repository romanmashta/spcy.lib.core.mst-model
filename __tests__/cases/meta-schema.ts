import { TestCase } from './test-case';

import _ from 'lodash';

export type TypeInfo = ObjectType | SimpleType | ArrayType | TypeReference | EnumType | ConstLiteral | OneOf | AllOf;

export interface TypeReference {
  $ref: string;
}

export interface ArrayType {
  type: 'array';
  items: TypeInfo;
}

export interface ConstLiteral {
  const: string | number | boolean | null;
}

export interface EnumType {
  enum: string[];
}

export interface SimpleType {
  type: 'string' | 'number' | 'boolean' | 'date' | 'null';
}

export interface ObjectType {
  type: 'object';
  required?: string[];
  properties?: {
    [name: string]: TypeInfo;
  };
  additionalProperties?: TypeInfo | boolean;
}

export interface OneOf {
  oneOf: TypeInfo[];
}

export interface AllOf {
  allOf: TypeInfo[];
}

export interface Module {
  $defs: {
    [name: string]: TypeInfo;
  };
}

export interface MetaInfo {
  modules: Module[];
  hasErrors: boolean;
}

const metaSchema: Module = {
  $defs: {
    TypeInfo: {
      oneOf: [
        {
          $ref: '#/$defs/ObjectType'
        },
        {
          $ref: '#/$defs/SimpleType'
        },
        {
          $ref: '#/$defs/ArrayType'
        },
        {
          $ref: '#/$defs/TypeReference'
        },
        {
          $ref: '#/$defs/EnumType'
        },
        {
          $ref: '#/$defs/ConstLiteral'
        },
        {
          $ref: '#/$defs/OneOf'
        },
        {
          $ref: '#/$defs/AllOf'
        }
      ]
    },
    TypeReference: {
      type: 'object',
      required: ['$ref'],
      properties: {
        $ref: {
          type: 'string'
        }
      }
    },
    ArrayType: {
      type: 'object',
      required: ['type', 'items'],
      properties: {
        type: {
          const: 'array'
        },
        items: {
          $ref: '#/$defs/TypeInfo'
        }
      }
    },
    ConstLiteral: {
      type: 'object',
      required: ['const'],
      properties: {
        const: {
          oneOf: [
            {
              type: 'string'
            },
            {
              type: 'number'
            },
            {
              type: 'boolean'
            },
            {
              type: 'null'
            }
          ]
        }
      }
    },
    EnumType: {
      type: 'object',
      required: ['enum'],
      properties: {
        enum: {
          type: 'array',
          items: {
            type: 'string'
          }
        }
      }
    },
    SimpleType: {
      type: 'object',
      required: ['type'],
      properties: {
        type: {
          oneOf: [
            {
              const: 'string'
            },
            {
              const: 'number'
            },
            {
              const: 'boolean'
            },
            {
              const: 'date'
            },
            {
              const: 'null'
            }
          ]
        }
      }
    },
    ObjectType: {
      type: 'object',
      required: ['type'],
      properties: {
        type: {
          const: 'object'
        },
        required: {
          type: 'array',
          items: {
            type: 'string'
          }
        },
        properties: {
          type: 'object',
          additionalProperties: {
            $ref: '#/$defs/TypeInfo'
          }
        },
        additionalProperties: {
          oneOf: [
            {
              $ref: '#/$defs/TypeInfo'
            },
            {
              type: 'boolean'
            }
          ]
        }
      }
    },
    OneOf: {
      type: 'object',
      required: ['oneOf'],
      properties: {
        oneOf: {
          type: 'array',
          items: {
            $ref: '#/$defs/TypeInfo'
          }
        }
      }
    },
    AllOf: {
      type: 'object',
      required: ['allOf'],
      properties: {
        allOf: {
          type: 'array',
          items: {
            $ref: '#/$defs/TypeInfo'
          }
        }
      }
    },
    Module: {
      type: 'object',
      required: ['$defs'],
      properties: {
        $defs: {
          type: 'object',
          additionalProperties: {
            $ref: '#/$defs/TypeInfo'
          }
        }
      }
    },
    MetaInfo: {
      type: 'object',
      required: ['modules', 'hasErrors'],
      properties: {
        modules: {
          type: 'array',
          items: {
            $ref: '#/$defs/Module'
          }
        },
        hasErrors: {
          type: 'boolean'
        }
      }
    }
  }
};

export const testCase: TestCase<Module> = {
  meta: metaSchema,
  tree: {
    AllOf:
      '{ allOf: (late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }))[]? }',
    ArrayType:
      '{ type: "array"; items: (late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); })) }',
    ConstLiteral: '{ const: (string | number | boolean | null) }',
    EnumType: '{ enum: string[]? }',
    MetaInfo: '{ modules: Module[]?; hasErrors: boolean }',
    Module:
      '{ $defs: Map<string, (late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }))>? }',
    ObjectType:
      '{ type: "object"; required: (string[] | undefined?); properties: (Map<string, (late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }))> | undefined?); additionalProperties: (((late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); })) | boolean) | undefined?) }',
    OneOf:
      '{ oneOf: (late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }))[]? }',
    SimpleType: '{ type: ("string" | "number" | "boolean" | "date" | "null") }',
    TypeInfo: '(ObjectType | SimpleType | ArrayType | TypeReference | EnumType | ConstLiteral | OneOf | AllOf)',
    TypeReference: '{ $ref: string }'
  },
  rootType: 'Module',
  data: metaSchema
};
