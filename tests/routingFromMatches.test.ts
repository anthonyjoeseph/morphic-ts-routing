import * as assert from 'assert';
import { routingFromMatches3 } from '../src/index';
import * as R from 'fp-ts-routing'
import { ADTType } from '@morphic-ts/adt'

describe('Generated ADTs', () => {

  const landing: R.Match<{}> = R.end
  const show: R.Match<{}> = R.lit('show').then(R.end)
  const id: R.Match<{ id: number }> = R.int('id').then(R.end)
  const {
    parse,
    format,
    adt: RouteADT
  } = routingFromMatches3(
    ['Landing', landing],
    ['Show', show],
    ['Id', id],
  );
  type RouteADT = ADTType<typeof RouteADT>

  const routeAdts = [
    RouteADT.as.Landing({}),
    RouteADT.as.Landing({}),
    RouteADT.as.Show({}),
    RouteADT.as.Id({ id: 1234 }),
    RouteADT.as.NotFound({}),
  ];

  it('can parse', () => {
    const plaintext = [
      '', '/', '/show', '/1234', '/sshow'
    ];
    assert.deepStrictEqual(plaintext.map(parse), routeAdts);
  });
  it('can format', () => {
    const plaintext = [
      '/', '/', '/show', '/1234', '/'
    ];
    assert.deepStrictEqual(routeAdts.map(format), plaintext);
  });
});