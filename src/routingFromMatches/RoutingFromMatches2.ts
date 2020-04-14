import * as R from 'fp-ts-routing';
import { makeADT, ADTType, ofType, ADT } from 'morphic-ts/lib/adt/index';
export const routingFromMatches2 = <
  A,
  B,
  AKey extends string,
  BKey extends string,
>(
  [aKey, aMatch]: [AKey, R.Match<A>],
  [bKey, bMatch]: [BKey, R.Match<B>],
): {
  parser: (path: string) => { type: 'NotFound' } | 
{ type: AKey; value: A } | { type: BKey; value: B }
  formatter: (adt: { type: 'NotFound' } | 
{ type: AKey; value: A } | { type: BKey; value: B }) => string;
  adt: ADT<{ type: 'NotFound' } | 
{ type: AKey; value: A } | { type: BKey; value: B }, 'type'>
} => {
  const RouteAdt = makeADT('type')({
    NotFound: ofType(),
    [aKey]: ofType<{ type: AKey; value: typeof aMatch._A }>(),
    [bKey]: ofType<{ type: BKey; value: typeof bMatch._A }>(),
  });
  type RouteAdt = ADTType<typeof RouteAdt>
  const parser = R.zero<RouteAdt>()
    .alt(aMatch.parser.map(a => ({ type: aKey as AKey, value: a })))
    .alt(bMatch.parser.map(b => ({ type: bKey as BKey, value: b })))
  const formatter = (
    adt: RouteAdt
  ): string => {
  if (RouteAdt.is.NotFound(adt)) {
    return R.format(R.end.formatter, {});
  }
    if (RouteAdt.is[aKey as AKey](adt)) {
      return R.format(aMatch.formatter, adt.value);
    }
    return R.format(bMatch.formatter, adt.value);
  }
  return {
    parser: (path: string) => R.parse(parser, R.Route.parse(path), RouteAdt.as.NotFound({})),
    formatter,
    adt: RouteAdt,
  };
};