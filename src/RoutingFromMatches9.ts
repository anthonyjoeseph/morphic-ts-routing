import * as R from 'fp-ts-routing';
import { makeADT, ADTType, ofType, ADT } from '@morphic-ts/adt';
export const routingFromMatches9 = <
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  AKey extends string,
  BKey extends string,
  CKey extends string,
  DKey extends string,
  EKey extends string,
  FKey extends string,
  GKey extends string,
  HKey extends string,
  IKey extends string,
>(
  [aKey, aMatch]: [AKey, R.Match<A>],
  [bKey, bMatch]: [BKey, R.Match<B>],
  [cKey, cMatch]: [CKey, R.Match<C>],
  [dKey, dMatch]: [DKey, R.Match<D>],
  [eKey, eMatch]: [EKey, R.Match<E>],
  [fKey, fMatch]: [FKey, R.Match<F>],
  [gKey, gMatch]: [GKey, R.Match<G>],
  [hKey, hMatch]: [HKey, R.Match<H>],
  [iKey, iMatch]: [IKey, R.Match<I>],
): {
  parse: (path: string) => { type: 'NotFound' } | 
A & { type: AKey } | B & { type: BKey } | C & { type: CKey } | D & { type: DKey } | E & { type: EKey } | F & { type: FKey } | G & { type: GKey } | H & { type: HKey } | I & { type: IKey }
  format: (adt: { type: 'NotFound' } | 
A & { type: AKey } | B & { type: BKey } | C & { type: CKey } | D & { type: DKey } | E & { type: EKey } | F & { type: FKey } | G & { type: GKey } | H & { type: HKey } | I & { type: IKey }) => string;
  adt: ADT<{ type: 'NotFound' } | 
A & { type: AKey } | B & { type: BKey } | C & { type: CKey } | D & { type: DKey } | E & { type: EKey } | F & { type: FKey } | G & { type: GKey } | H & { type: HKey } | I & { type: IKey }, 'type'>
} => {
  const RouteAdt = makeADT('type')({
    NotFound: ofType(),
    [aKey]: ofType<A & { type: AKey }>(),
    [bKey]: ofType<B & { type: BKey }>(),
    [cKey]: ofType<C & { type: CKey }>(),
    [dKey]: ofType<D & { type: DKey }>(),
    [eKey]: ofType<E & { type: EKey }>(),
    [fKey]: ofType<F & { type: FKey }>(),
    [gKey]: ofType<G & { type: GKey }>(),
    [hKey]: ofType<H & { type: HKey }>(),
    [iKey]: ofType<I & { type: IKey }>(),
  });
  type RouteAdt = ADTType<typeof RouteAdt>
  const parser = R.zero<RouteAdt>()
    .alt(aMatch.parser.map(a => ({ type: aKey as AKey, ...a })))
    .alt(bMatch.parser.map(b => ({ type: bKey as BKey, ...b })))
    .alt(cMatch.parser.map(c => ({ type: cKey as CKey, ...c })))
    .alt(dMatch.parser.map(d => ({ type: dKey as DKey, ...d })))
    .alt(eMatch.parser.map(e => ({ type: eKey as EKey, ...e })))
    .alt(fMatch.parser.map(f => ({ type: fKey as FKey, ...f })))
    .alt(gMatch.parser.map(g => ({ type: gKey as GKey, ...g })))
    .alt(hMatch.parser.map(h => ({ type: hKey as HKey, ...h })))
    .alt(iMatch.parser.map(i => ({ type: iKey as IKey, ...i })))
  const SafeRouteAdt = RouteAdt as ADT<{ type: 'NotFound' } | 
{ type: AKey } | { type: BKey } | { type: CKey } | { type: DKey } | { type: EKey } | { type: FKey } | { type: GKey } | { type: HKey } | { type: IKey }, "type">
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
    if (SafeRouteAdt.is[dKey as DKey](adt)) {
      return R.format(dMatch.formatter, adt);
    }
    if (SafeRouteAdt.is[eKey as EKey](adt)) {
      return R.format(eMatch.formatter, adt);
    }
    if (SafeRouteAdt.is[fKey as FKey](adt)) {
      return R.format(fMatch.formatter, adt);
    }
    if (SafeRouteAdt.is[gKey as GKey](adt)) {
      return R.format(gMatch.formatter, adt);
    }
    if (SafeRouteAdt.is[hKey as HKey](adt)) {
      return R.format(hMatch.formatter, adt);
    }
    return R.format(iMatch.formatter, adt);
  }
  return {
    parse: (path: string) => R.parse(parser, R.Route.parse(path), { type: 'NotFound' }),
    format,
    adt: RouteAdt,
  };
};