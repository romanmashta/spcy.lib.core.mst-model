import { MetaSchema, Module } from '@spcy/lib.core.reflection';
import { TestCase } from './test-case';

export const testCase: TestCase<Module> = {
  meta: MetaSchema,
  tree: {
    AllOf:
      '{ allOf: (late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }))[] }',
    ArrayType:
      '{ type: "array"; items: (late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); })); minItems: (number | undefined?); maxItems: (number | undefined?); uniqueItems: (boolean | undefined?) }',
    BooleanType: '{ type: "boolean" }',
    ConstLiteral: '{ const: (string | number | boolean | null) }',
    DateType: '{ type: "date" }',
    EnumType: '{ enum: string[] }',
    MetaInfo: '{ modules: Module[]; hasErrors: boolean }',
    Module:
      '{ $defs: Map<string, (late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }))>? }',
    NullType: '{ type: "null" }',
    NumberType: '{ type: "number"; minimum: (number | undefined?); maximum: (number | undefined?) }',
    ObjectType:
      '{ type: "object"; required: (string[] | undefined?); properties: (Map<string, (late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }))> | undefined?); additionalProperties: (((late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); })) | boolean) | undefined?) }',
    OneOf:
      '{ oneOf: (late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }))[] }',
    StringType:
      '{ type: "string"; minLength: (number | undefined?); maxLength: (number | undefined?); pattern: (string | undefined?) }',
    TypeInfo:
      '(ObjectType | StringType | BooleanType | NumberType | DateType | NullType | ArrayType | TypeReference | EnumType | ConstLiteral | OneOf | AllOf)',
    TypeReference: '{ $ref: string }'
  },
  rootType: 'Module',
  data: MetaSchema
};
