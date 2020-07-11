import * as r from '@spcy/lib.core.reflection';
import * as m from './index.model';

const ShapesType: r.TypeInfo = {
  $id: 'Shapes',
  $package: 'lib.core.mst-model',
  oneOf: [
    {
      $ref: 'Circle',
      $refPackage: 'lib.core.mst-model'
    },
    {
      $ref: 'Square',
      $refPackage: 'lib.core.mst-model'
    }
  ]
};

const Shapes: r.Prototype<m.Shapes> = {
  ref: { $ref: ShapesType.$id!, $refPackage: ShapesType.$package! },
  typeInfo: ShapesType
};

const PictureType: r.TypeInfo = {
  $id: 'Picture',
  $package: 'lib.core.mst-model',
  type: 'object',
  required: ['figures'],
  properties: {
    figures: {
      type: 'array',
      items: {
        $ref: 'Shapes',
        $refPackage: 'lib.core.mst-model'
      }
    }
  }
};

const Picture: r.Prototype<m.Picture> = {
  ref: { $ref: PictureType.$id!, $refPackage: PictureType.$package! },
  typeInfo: PictureType
};

const CircleType: r.TypeInfo = {
  $id: 'Circle',
  $package: 'lib.core.mst-model',
  type: 'object',
  required: ['radius'],
  properties: {
    radius: {
      type: 'number'
    }
  }
};

const Circle: r.Prototype<m.Circle> = {
  ref: { $ref: CircleType.$id!, $refPackage: CircleType.$package! },
  typeInfo: CircleType
};

const SquareType: r.TypeInfo = {
  $id: 'Square',
  $package: 'lib.core.mst-model',
  type: 'object',
  required: ['side'],
  properties: {
    side: {
      type: 'number'
    }
  }
};

const Square: r.Prototype<m.Square> = {
  ref: { $ref: SquareType.$id!, $refPackage: SquareType.$package! },
  typeInfo: SquareType
};

export const IndexModule: r.Module = {
  $id: 'lib.core.mst-model',
  $defs: {
    Shapes: ShapesType,
    Picture: PictureType,
    Circle: CircleType,
    Square: SquareType
  }
};

export const Types = {
  Shapes,
  Picture,
  Circle,
  Square
};
