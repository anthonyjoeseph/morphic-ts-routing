import * as R from 'fp-ts-routing';
import { makeADT, ADTType, ofType, ADT } from 'morphic-ts/lib/adt/index';
export const routingFromMatches3 = <
  A,
  B,
  C,
  AKey extends string,
  BKey extends string,
  CKey extends string,
>(
  [aKey, aMatch]: [AKey, R.Match<A>],
  [bKey, bMatch]: [BKey, R.Match<B>],
  [cKey, cMatch]: [CKey, R.Match<C>],
): {
  parser: (path: string) => { type: 'NotFound' } | 
{ type: AKey; value: A } | { type: BKey; value: B } | { type: CKey; value: C }
  formatter: (adt: { type: 'NotFound' } | 
{ type: AKey; value: A } | { type: BKey; value: B } | { type: CKey; value: C }) => string;
  adt: ADT<{ type: 'NotFound' } | 
{ type: AKey; value: A } | { type: BKey; value: B } | { type: CKey; value: C }, 'type'>
} => {
  const RouteAdt = makeADT('type')({
    NotFound: ofType(),
    [aKey]: ofType<{ type: AKey; value: typeof aMatch._A }>(),
    [bKey]: ofType<{ type: BKey; value: typeof bMatch._A }>(),
    [cKey]: ofType<{ type: CKey; value: typeof cMatch._A }>(),
  });
  type RouteAdt = ADTType<typeof RouteAdt>
  const parser = R.zero<RouteAdt>()
    .alt(aMatch.parser.map(a => ({ type: aKey as AKey, value: a })))
    .alt(bMatch.parser.map(b => ({ type: bKey as BKey, value: b })))
    .alt(cMatch.parser.map(c => ({ type: cKey as CKey, value: c })))
  const formatter = (
    adt: RouteAdt
  ): string => {
  if (RouteAdt.is.NotFound(adt)) {
    return R.format(R.end.formatter, {});
  }
    if (RouteAdt.is[aKey as AKey](adt)) {
      return R.format(aMatch.formatter, adt.value);
    }
    if (RouteAdt.is[bKey as BKey](adt)) {
      return R.format(bMatch.formatter, adt.value);
    }
    return R.format(cMatch.formatter, adt.value);
  }
  return {
    parser: (path: string) => R.parse(parser, R.Route.parse(path), RouteAdt.as.NotFound({})),
    formatter,
    adt: RouteAdt,
  };
};

const landing: R.Match<{}> = R.end
const show: R.Match<{}> = R.lit('show').then(R.end)
const id: R.Match<{ id: number }> = R.int('id').then(R.end)

const {
  parser,
  formatter,
  adt: RouteADT
} = routingFromMatches3(
  ['landing', landing],
  ['show', show],
  ['id', id],
);
type RouteADT = ADTType<typeof RouteADT>

