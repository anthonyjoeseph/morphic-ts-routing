import * as R from 'fp-ts-routing';
import { makeADT, ADTType, ofType, ADT } from 'morphic-ts/lib/adt/index';
export const routingFromMatches6 = <
  A,
  B,
  C,
  D,
  E,
  F,
  AKey extends string,
  BKey extends string,
  CKey extends string,
  DKey extends string,
  EKey extends string,
  FKey extends string,
>(
  [aKey, aMatch]: [AKey, R.Match<A>],
  [bKey, bMatch]: [BKey, R.Match<B>],
  [cKey, cMatch]: [CKey, R.Match<C>],
  [dKey, dMatch]: [DKey, R.Match<D>],
  [eKey, eMatch]: [EKey, R.Match<E>],
  [fKey, fMatch]: [FKey, R.Match<F>],
): {
  parser: R.Parser<{ type: AKey; value: A } | { type: BKey; value: B } | { type: CKey; value: C } | { type: DKey; value: D } | { type: EKey; value: E } | { type: FKey; value: F }>;
  formatter: (adt: { type: AKey; value: A } | { type: BKey; value: B } | { type: CKey; value: C } | { type: DKey; value: D } | { type: EKey; value: E } | { type: FKey; value: F }) => string;
  adt: ADT<{ type: AKey; value: A } | { type: BKey; value: B } | { type: CKey; value: C } | { type: DKey; value: D } | { type: EKey; value: E } | { type: FKey; value: F }, 'type'>
} => {
  const RouteAdt = makeADT('type')({
  [aKey]: ofType<{ type: AKey; value: typeof aMatch._A }>(),
  [bKey]: ofType<{ type: BKey; value: typeof bMatch._A }>(),
  [cKey]: ofType<{ type: CKey; value: typeof cMatch._A }>(),
  [dKey]: ofType<{ type: DKey; value: typeof dMatch._A }>(),
  [eKey]: ofType<{ type: EKey; value: typeof eMatch._A }>(),
  [fKey]: ofType<{ type: FKey; value: typeof fMatch._A }>(),
  });
  type RouteAdt = ADTType<typeof RouteAdt>
  const parser = R.zero<RouteAdt>()
    .alt(aMatch.parser.map(a => ({ type: aKey as AKey, value: a })))
    .alt(bMatch.parser.map(b => ({ type: bKey as BKey, value: b })))
    .alt(cMatch.parser.map(c => ({ type: cKey as CKey, value: c })))
    .alt(dMatch.parser.map(d => ({ type: dKey as DKey, value: d })))
    .alt(eMatch.parser.map(e => ({ type: eKey as EKey, value: e })))
    .alt(fMatch.parser.map(f => ({ type: fKey as FKey, value: f })))
  const formatter = (
    adt: RouteAdt
  ): string => {
  if (RouteAdt.is[aKey as AKey](adt)) {
    return R.format(aMatch.formatter, adt.value);
  }
  if (RouteAdt.is[bKey as BKey](adt)) {
    return R.format(bMatch.formatter, adt.value);
  }
  if (RouteAdt.is[cKey as CKey](adt)) {
    return R.format(cMatch.formatter, adt.value);
  }
  if (RouteAdt.is[dKey as DKey](adt)) {
    return R.format(dMatch.formatter, adt.value);
  }
  if (RouteAdt.is[eKey as EKey](adt)) {
    return R.format(eMatch.formatter, adt.value);
  }
  return R.format(fMatch.formatter, adt.value);
  }
  return {
    parser,
    formatter,
    adt: RouteAdt,
  };
};