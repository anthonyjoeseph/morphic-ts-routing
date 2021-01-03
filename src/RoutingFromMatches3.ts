import * as R from 'fp-ts-routing';
import { makeADT, ADTType, ofType, ADT } from '@morphic-ts/adt';
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
  parse: (path: string) => { type: 'NotFound' } | 
A & { type: AKey } | B & { type: BKey } | C & { type: CKey }
  format: (adt: { type: 'NotFound' } | 
A & { type: AKey } | B & { type: BKey } | C & { type: CKey }) => string;
  adt: ADT<{ type: 'NotFound' } | 
A & { type: AKey } | B & { type: BKey } | C & { type: CKey }, 'type'>
} => {
  const RouteAdt = makeADT('type')({
    NotFound: ofType(),
    [aKey]: ofType<A & { type: AKey }>(),
    [bKey]: ofType<B & { type: BKey }>(),
    [cKey]: ofType<C & { type: CKey }>(),
  });
  type RouteAdt = ADTType<typeof RouteAdt>
  const parser = R.zero<RouteAdt>()
    .alt(aMatch.parser.map(a => ({ type: aKey as AKey, ...a })))
    .alt(bMatch.parser.map(b => ({ type: bKey as BKey, ...b })))
    .alt(cMatch.parser.map(c => ({ type: cKey as CKey, ...c })))
  const SafeRouteAdt = RouteAdt as ADT<{ type: 'NotFound' } | 
{ type: AKey } | { type: BKey } | { type: CKey }, "type">
  const format = (
    adt: RouteAdt
  ): string => {
  if (SafeRouteAdt.is.NotFound(adt)) {
    return R.format(R.end.formatter, {});
  }
    if (SafeRouteAdt.is[aKey as AKey](adt)) {
      return R.format(aMatch.formatter, adt);
    }
    if (SafeRouteAdt.is[bKey as BKey](adt)) {
      return R.format(bMatch.formatter, adt);
    }
    return R.format(cMatch.formatter, adt);
  }
  return {
    parse: (path: string) => R.parse(parser, R.Route.parse(path), { type: 'NotFound' }),
    format,
    adt: RouteAdt,
  };
};