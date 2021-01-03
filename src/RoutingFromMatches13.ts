import * as R from 'fp-ts-routing';
import { makeADT, ADTType, ofType, ADT } from '@morphic-ts/adt';
export const routingFromMatches13 = <
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
  K,
  L,
  M,
  AKey extends string,
  BKey extends string,
  CKey extends string,
  DKey extends string,
  EKey extends string,
  FKey extends string,
  GKey extends string,
  HKey extends string,
  IKey extends string,
  JKey extends string,
  KKey extends string,
  LKey extends string,
  MKey extends string,
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
  [jKey, jMatch]: [JKey, R.Match<J>],
  [kKey, kMatch]: [KKey, R.Match<K>],
  [lKey, lMatch]: [LKey, R.Match<L>],
  [mKey, mMatch]: [MKey, R.Match<M>],
): {
  parse: (path: string) => { type: 'NotFound' } | 
A & { type: AKey } | B & { type: BKey } | C & { type: CKey } | D & { type: DKey } | E & { type: EKey } | F & { type: FKey } | G & { type: GKey } | H & { type: HKey } | I & { type: IKey } | J & { type: JKey } | K & { type: KKey } | L & { type: LKey } | M & { type: MKey }
  format: (adt: { type: 'NotFound' } | 
A & { type: AKey } | B & { type: BKey } | C & { type: CKey } | D & { type: DKey } | E & { type: EKey } | F & { type: FKey } | G & { type: GKey } | H & { type: HKey } | I & { type: IKey } | J & { type: JKey } | K & { type: KKey } | L & { type: LKey } | M & { type: MKey }) => string;
  adt: ADT<{ type: 'NotFound' } | 
A & { type: AKey } | B & { type: BKey } | C & { type: CKey } | D & { type: DKey } | E & { type: EKey } | F & { type: FKey } | G & { type: GKey } | H & { type: HKey } | I & { type: IKey } | J & { type: JKey } | K & { type: KKey } | L & { type: LKey } | M & { type: MKey }, 'type'>
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
    [jKey]: ofType<J & { type: JKey }>(),
    [kKey]: ofType<K & { type: KKey }>(),
    [lKey]: ofType<L & { type: LKey }>(),
    [mKey]: ofType<M & { type: MKey }>(),
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
    .alt(jMatch.parser.map(j => ({ type: jKey as JKey, ...j })))
    .alt(kMatch.parser.map(k => ({ type: kKey as KKey, ...k })))
    .alt(lMatch.parser.map(l => ({ type: lKey as LKey, ...l })))
    .alt(mMatch.parser.map(m => ({ type: mKey as MKey, ...m })))
  const SafeRouteAdt = RouteAdt as ADT<{ type: 'NotFound' } | 
{ type: AKey } | { type: BKey } | { type: CKey } | { type: DKey } | { type: EKey } | { type: FKey } | { type: GKey } | { type: HKey } | { type: IKey } | { type: JKey } | { type: KKey } | { type: LKey } | { type: MKey }, "type">
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
    if (SafeRouteAdt.is[iKey as IKey](adt)) {
      return R.format(iMatch.formatter, adt);
    }
    if (SafeRouteAdt.is[jKey as JKey](adt)) {
      return R.format(jMatch.formatter, adt);
    }
    if (SafeRouteAdt.is[kKey as KKey](adt)) {
      return R.format(kMatch.formatter, adt);
    }
    if (SafeRouteAdt.is[lKey as LKey](adt)) {
      return R.format(lMatch.formatter, adt);
    }
    return R.format(mMatch.formatter, adt);
  }
  return {
    parse: (path: string) => R.parse(parser, R.Route.parse(path), { type: 'NotFound' }),
    format,
    adt: RouteAdt,
  };
};