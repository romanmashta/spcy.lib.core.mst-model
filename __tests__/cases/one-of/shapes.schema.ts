import { TypeInfo, Module, SchemaRepository } from '@spcy/lib.core.reflection';

export const ShapesSchema: TypeInfo = {
  $id: '#/$defs/Shapes',
  oneOf: [
    {
      $ref: '#/$defs/Circle'
    },
    {
      $ref: '#/$defs/Square'
    }
  ]
};

SchemaRepository.register(ShapesSchema);
export const PictureSchema: TypeInfo = {
  $id: '#/$defs/Picture',
  type: 'object',
  required: ['figures'],
  properties: {
    figures: {
      type: 'array',
      items: {
        $ref: '#/$defs/Shapes'
      }
    }
  }
};

SchemaRepository.register(PictureSchema);
export const CircleSchema: TypeInfo = {
  $id: '#/$defs/Circle',
  type: 'object',
  required: ['radius'],
  properties: {
    radius: {
      type: 'number'
    }
  }
};

SchemaRepository.register(CircleSchema);
export const SquareSchema: TypeInfo = {
  $id: '#/$defs/Square',
  type: 'object',
  required: ['side'],
  properties: {
    side: {
      type: 'number'
    }
  }
};

SchemaRepository.register(SquareSchema);

export const MetaSchema: Module = {
  $defs: {
    Shapes: ShapesSchema,
    Picture: PictureSchema,
    Circle: CircleSchema,
    Square: SquareSchema
  }
};
