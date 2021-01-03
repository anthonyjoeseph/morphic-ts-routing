import * as R from 'fp-ts-routing';
import { makeADT, ADTType, ofType, ADT } from '@morphic-ts/adt';
export const routingFromMatches4 = <
  A,
  B,
  C,
  D,
  AKey extends string,
  BKey extends string,
  CKey extends string,
  DKey extends string,
>(
  [aKey, aMatch]: [AKey, R.Match<A>],
  [bKey, bMatch]: [BKey, R.Match<B>],
  [cKey, cMatch]: [CKey, R.Match<C>],
  [dKey, dMatch]: [DKey, R.Match<D>],
): {
  parse: (path: string) => { type: 'NotFound' } | 
A & { type: AKey } | B & { type: BKey } | C & { type: CKey } | D & { type: DKey }
  format: (adt: { type: 'NotFound' } | 
A & { type: AKey } | B & { type: BKey } | C & { type: CKey } | D & { type: DKey }) => string;
  adt: ADT<{ type: 'NotFound' } | 
A & { type: AKey } | B & { type: BKey } | C & { type: CKey } | D & { type: DKey }, 'type'>
} => {
  const RouteAdt = makeADT('type')({
    NotFound: ofType(),
    [aKey]: ofType<A & { type: AKey }>(),
    [bKey]: ofType<B & { type: BKey }>(),
    [cKey]: ofType<C & { type: CKey }>(),
    [dKey]: ofType<D & { type: DKey }>(),
  });
  type RouteAdt = ADTType<typeof RouteAdt>
  const parser = R.zero<RouteAdt>()
    .alt(aMatch.parser.map(a => ({ type: aKey as AKey, ...a })))
    .alt(bMatch.parser.map(b => ({ type: bKey as BKey, ...b })))
    .alt(cMatch.parser.map(c => ({ type: cKey as CKey, ...c })))
    .alt(dMatch.parser.map(d => ({ type: dKey as DKey, ...d })))
  const SafeRouteAdt = RouteAdt as ADT<{ type: 'NotFound' } | 
{ type: AKey } | { type: BKey } | { type: CKey } | { type: DKey }, "type">
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
    if (SafeRouteAdt.is[cKey as CKey](adt)) {
      return R.format(cMatch.formatter, adt);
    }
    return R.format(dMatch.formatter, adt);
  }
  return {
    parse: (path: string) => R.parse(parser, R.Route.parse(path), { type: 'NotFound' }),
    format,
    adt: RouteAdt,
  };
};