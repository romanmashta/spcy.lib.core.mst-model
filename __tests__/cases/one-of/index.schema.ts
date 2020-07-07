import * as r from '@spcy/lib.core.reflection';
import * as m from './index.model';

const PackageName = 'lib.core.mst-model';

const ShapesType: r.TypeInfo = {
  $id: 'Shapes',
  oneOf: [
    {
      $ref: 'Circle'
    },
    {
      $ref: 'Square'
    }
  ]
};
const Shapes: r.Prototype<m.Shapes> = {
  id: ShapesType.$id,
  package: PackageName,
  typeInfo: ShapesType
};
const PictureType: r.TypeInfo = {
  $id: 'Picture',
  type: 'object',
  required: ['figures'],
  properties: {
    figures: {
      type: 'array',
      items: {
        $ref: 'Shapes'
      }
    }
  }
};
const Picture: r.Prototype<m.Picture> = {
  id: PictureType.$id,
  package: PackageName,
  typeInfo: PictureType
};
const CircleType: r.TypeInfo = {
  $id: 'Circle',
  type: 'object',
  required: ['radius'],
  properties: {
    radius: {
      type: 'number'
    }
  }
};
const Circle: r.Prototype<m.Circle> = {
  id: CircleType.$id,
  package: PackageName,
  typeInfo: CircleType
};
const SquareType: r.TypeInfo = {
  $id: 'Square',
  type: 'object',
  required: ['side'],
  properties: {
    side: {
      type: 'number'
    }
  }
};
const Square: r.Prototype<m.Square> = {
  id: SquareType.$id,
  package: PackageName,
  typeInfo: SquareType
};

export const IndexModule: r.Module = {
  $id: PackageName,
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
