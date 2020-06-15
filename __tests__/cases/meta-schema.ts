import { TestCase } from './test-case';

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

export const testCase: TestCase<Module> = {
  meta: {
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
        properties: {
          $ref: {
            type: 'string'
          }
        }
      },
      ArrayType: {
        type: 'object',
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
        properties: {
          type: {
            const: 'object'
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
  },
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
      '{ type: "object"; properties: Map<string, (late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }))>?; additionalProperties: ((late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); })) | boolean) }',
    OneOf:
      '{ oneOf: (late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }))[]? }',
    SimpleType: '{ type: ("string" | "number" | "boolean" | "date" | "null") }',
    TypeInfo: '(ObjectType | SimpleType | ArrayType | TypeReference | EnumType | ConstLiteral | OneOf | AllOf)',
    TypeReference: '{ $ref: string }'
  },
  data: {
    $defs: {
      Person: {
        type: 'object',
        properties: {
          firstName: {
            type: 'string'
          },
          lastName: {
            type: 'string'
          },
          age: {
            type: 'number'
          },
          isActive: {
            type: 'boolean'
          }
        }
      }
    }
  }
};
