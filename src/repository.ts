import _ from 'lodash';
import { IAnyType } from '@spcy/pub.mobx-state-tree';

type TypeCache = { [name: string]: IAnyType };

export class Repository {
  private repo: TypeCache = {};

  resolve = (ref: string): IAnyType => this.repo[ref];

  register(defs: TypeCache) {
    this.repo = _.reduce(defs, (r, def, ref) => ({ ...r, [`#/$defs/${ref}`]: def }), this.repo);
  }
}
