import { TypeInfo, Module, SchemaRepository } from '@spcy/lib.core.reflection';

export const ShapesSchema: TypeInfo = {
  $id: '@spcy/lib.core.mst-model/Shapes',
  oneOf: [
    {
      $ref: '@spcy/lib.core.mst-model/Circle'
    },
    {
      $ref: '@spcy/lib.core.mst-model/Square'
    }
  ]
};
SchemaRepository.register(ShapesSchema);

export const PictureSchema: TypeInfo = {
  $id: '@spcy/lib.core.mst-model/Picture',
  type: 'object',
  required: ['figures'],
  properties: {
    figures: {
      type: 'array',
      items: {
        $ref: '@spcy/lib.core.mst-model/Shapes'
      }
    }
  }
};
SchemaRepository.register(PictureSchema);

export const CircleSchema: TypeInfo = {
  $id: '@spcy/lib.core.mst-model/Circle',
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
  $id: '@spcy/lib.core.mst-model/Square',
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
