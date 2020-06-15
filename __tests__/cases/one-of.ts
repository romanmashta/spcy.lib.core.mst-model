import { TestCase } from './test-case';

export type Shapes = Circle | Square;

export interface Picture {
  figures: Shapes[];
}

export interface Circle {
  radius: number;
}

export interface Square {
  side: number;
}

export const testCase: TestCase<Picture> = {
  meta: {
    $defs: {
      Shapes: {
        oneOf: [
          {
            $ref: '#/$defs/Circle'
          },
          {
            $ref: '#/$defs/Square'
          }
        ]
      },
      Picture: {
        type: 'object',
        properties: {
          figures: {
            type: 'array',
            items: {
              $ref: '#/$defs/Shapes'
            }
          }
        }
      },
      Circle: {
        type: 'object',
        required: ['radius'],
        properties: {
          radius: {
            type: 'number'
          }
        }
      },
      Square: {
        type: 'object',
        required: ['side'],
        properties: {
          side: {
            type: 'number'
          }
        }
      }
    }
  },
  tree: {
    Circle: '{ radius: number }',
    Picture:
      '{ figures: ((late(function () { return GlobalRepository.resolve(def.$ref); }) | late(function () { return GlobalRepository.resolve(def.$ref); }))[] | undefined?) }',
    Shapes: '(Circle | Square)',
    Square: '{ side: number }'
  },
  rootType: 'Picture',
  data: {
    figures: [{ side: 10 }, { radius: 20 }, { side: 1 }]
  }
};
