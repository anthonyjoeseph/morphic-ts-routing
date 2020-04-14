import * as R from 'fp-ts-routing';
import { makeADT, ADTType, ofType, ADT } from 'morphic-ts/lib/adt/index';
export const routingFromMatches24 = <
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
  N,
  O,
  P,
  Q,
  R,
  S,
  T,
  U,
  V,
  W,
  X,
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
  NKey extends string,
  OKey extends string,
  PKey extends string,
  QKey extends string,
  RKey extends string,
  SKey extends string,
  TKey extends string,
  UKey extends string,
  VKey extends string,
  WKey extends string,
  XKey extends string,
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
  [nKey, nMatch]: [NKey, R.Match<N>],
  [oKey, oMatch]: [OKey, R.Match<O>],
  [pKey, pMatch]: [PKey, R.Match<P>],
  [qKey, qMatch]: [QKey, R.Match<Q>],
  [rKey, rMatch]: [RKey, R.Match<R>],
  [sKey, sMatch]: [SKey, R.Match<S>],
  [tKey, tMatch]: [TKey, R.Match<T>],
  [uKey, uMatch]: [UKey, R.Match<U>],
  [vKey, vMatch]: [VKey, R.Match<V>],
  [wKey, wMatch]: [WKey, R.Match<W>],
  [xKey, xMatch]: [XKey, R.Match<X>],
): {
  parser: (path: string) => { type: 'NotFound' } | 
{ type: AKey; value: A } | { type: BKey; value: B } | { type: CKey; value: C } | { type: DKey; value: D } | { type: EKey; value: E } | { type: FKey; value: F } | { type: GKey; value: G } | { type: HKey; value: H } | { type: IKey; value: I } | { type: JKey; value: J } | { type: KKey; value: K } | { type: LKey; value: L } | { type: MKey; value: M } | { type: NKey; value: N } | { type: OKey; value: O } | { type: PKey; value: P } | { type: QKey; value: Q } | { type: RKey; value: R } | { type: SKey; value: S } | { type: TKey; value: T } | { type: UKey; value: U } | { type: VKey; value: V } | { type: WKey; value: W } | { type: XKey; value: X }
  formatter: (adt: { type: 'NotFound' } | 
{ type: AKey; value: A } | { type: BKey; value: B } | { type: CKey; value: C } | { type: DKey; value: D } | { type: EKey; value: E } | { type: FKey; value: F } | { type: GKey; value: G } | { type: HKey; value: H } | { type: IKey; value: I } | { type: JKey; value: J } | { type: KKey; value: K } | { type: LKey; value: L } | { type: MKey; value: M } | { type: NKey; value: N } | { type: OKey; value: O } | { type: PKey; value: P } | { type: QKey; value: Q } | { type: RKey; value: R } | { type: SKey; value: S } | { type: TKey; value: T } | { type: UKey; value: U } | { type: VKey; value: V } | { type: WKey; value: W } | { type: XKey; value: X }) => string;
  adt: ADT<{ type: 'NotFound' } | 
{ type: AKey; value: A } | { type: BKey; value: B } | { type: CKey; value: C } | { type: DKey; value: D } | { type: EKey; value: E } | { type: FKey; value: F } | { type: GKey; value: G } | { type: HKey; value: H } | { type: IKey; value: I } | { type: JKey; value: J } | { type: KKey; value: K } | { type: LKey; value: L } | { type: MKey; value: M } | { type: NKey; value: N } | { type: OKey; value: O } | { type: PKey; value: P } | { type: QKey; value: Q } | { type: RKey; value: R } | { type: SKey; value: S } | { type: TKey; value: T } | { type: UKey; value: U } | { type: VKey; value: V } | { type: WKey; value: W } | { type: XKey; value: X }, 'type'>
} => {
  const RouteAdt = makeADT('type')({
    NotFound: ofType(),
    [aKey]: ofType<{ type: AKey; value: typeof aMatch._A }>(),
    [bKey]: ofType<{ type: BKey; value: typeof bMatch._A }>(),
    [cKey]: ofType<{ type: CKey; value: typeof cMatch._A }>(),
    [dKey]: ofType<{ type: DKey; value: typeof dMatch._A }>(),
    [eKey]: ofType<{ type: EKey; value: typeof eMatch._A }>(),
    [fKey]: ofType<{ type: FKey; value: typeof fMatch._A }>(),
    [gKey]: ofType<{ type: GKey; value: typeof gMatch._A }>(),
    [hKey]: ofType<{ type: HKey; value: typeof hMatch._A }>(),
    [iKey]: ofType<{ type: IKey; value: typeof iMatch._A }>(),
    [jKey]: ofType<{ type: JKey; value: typeof jMatch._A }>(),
    [kKey]: ofType<{ type: KKey; value: typeof kMatch._A }>(),
    [lKey]: ofType<{ type: LKey; value: typeof lMatch._A }>(),
    [mKey]: ofType<{ type: MKey; value: typeof mMatch._A }>(),
    [nKey]: ofType<{ type: NKey; value: typeof nMatch._A }>(),
    [oKey]: ofType<{ type: OKey; value: typeof oMatch._A }>(),
    [pKey]: ofType<{ type: PKey; value: typeof pMatch._A }>(),
    [qKey]: ofType<{ type: QKey; value: typeof qMatch._A }>(),
    [rKey]: ofType<{ type: RKey; value: typeof rMatch._A }>(),
    [sKey]: ofType<{ type: SKey; value: typeof sMatch._A }>(),
    [tKey]: ofType<{ type: TKey; value: typeof tMatch._A }>(),
    [uKey]: ofType<{ type: UKey; value: typeof uMatch._A }>(),
    [vKey]: ofType<{ type: VKey; value: typeof vMatch._A }>(),
    [wKey]: ofType<{ type: WKey; value: typeof wMatch._A }>(),
    [xKey]: ofType<{ type: XKey; value: typeof xMatch._A }>(),
  });
  type RouteAdt = ADTType<typeof RouteAdt>
  const parser = R.zero<RouteAdt>()
    .alt(aMatch.parser.map(a => ({ type: aKey as AKey, value: a })))
    .alt(bMatch.parser.map(b => ({ type: bKey as BKey, value: b })))
    .alt(cMatch.parser.map(c => ({ type: cKey as CKey, value: c })))
    .alt(dMatch.parser.map(d => ({ type: dKey as DKey, value: d })))
    .alt(eMatch.parser.map(e => ({ type: eKey as EKey, value: e })))
    .alt(fMatch.parser.map(f => ({ type: fKey as FKey, value: f })))
    .alt(gMatch.parser.map(g => ({ type: gKey as GKey, value: g })))
    .alt(hMatch.parser.map(h => ({ type: hKey as HKey, value: h })))
    .alt(iMatch.parser.map(i => ({ type: iKey as IKey, value: i })))
    .alt(jMatch.parser.map(j => ({ type: jKey as JKey, value: j })))
    .alt(kMatch.parser.map(k => ({ type: kKey as KKey, value: k })))
    .alt(lMatch.parser.map(l => ({ type: lKey as LKey, value: l })))
    .alt(mMatch.parser.map(m => ({ type: mKey as MKey, value: m })))
    .alt(nMatch.parser.map(n => ({ type: nKey as NKey, value: n })))
    .alt(oMatch.parser.map(o => ({ type: oKey as OKey, value: o })))
    .alt(pMatch.parser.map(p => ({ type: pKey as PKey, value: p })))
    .alt(qMatch.parser.map(q => ({ type: qKey as QKey, value: q })))
    .alt(rMatch.parser.map(r => ({ type: rKey as RKey, value: r })))
    .alt(sMatch.parser.map(s => ({ type: sKey as SKey, value: s })))
    .alt(tMatch.parser.map(t => ({ type: tKey as TKey, value: t })))
    .alt(uMatch.parser.map(u => ({ type: uKey as UKey, value: u })))
    .alt(vMatch.parser.map(v => ({ type: vKey as VKey, value: v })))
    .alt(wMatch.parser.map(w => ({ type: wKey as WKey, value: w })))
    .alt(xMatch.parser.map(x => ({ type: xKey as XKey, value: x })))
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
    if (RouteAdt.is[cKey as CKey](adt)) {
      return R.format(cMatch.formatter, adt.value);
    }
    if (RouteAdt.is[dKey as DKey](adt)) {
      return R.format(dMatch.formatter, adt.value);
    }
    if (RouteAdt.is[eKey as EKey](adt)) {
      return R.format(eMatch.formatter, adt.value);
    }
    if (RouteAdt.is[fKey as FKey](adt)) {
      return R.format(fMatch.formatter, adt.value);
    }
    if (RouteAdt.is[gKey as GKey](adt)) {
      return R.format(gMatch.formatter, adt.value);
    }
    if (RouteAdt.is[hKey as HKey](adt)) {
      return R.format(hMatch.formatter, adt.value);
    }
    if (RouteAdt.is[iKey as IKey](adt)) {
      return R.format(iMatch.formatter, adt.value);
    }
    if (RouteAdt.is[jKey as JKey](adt)) {
      return R.format(jMatch.formatter, adt.value);
    }
    if (RouteAdt.is[kKey as KKey](adt)) {
      return R.format(kMatch.formatter, adt.value);
    }
    if (RouteAdt.is[lKey as LKey](adt)) {
      return R.format(lMatch.formatter, adt.value);
    }
    if (RouteAdt.is[mKey as MKey](adt)) {
      return R.format(mMatch.formatter, adt.value);
    }
    if (RouteAdt.is[nKey as NKey](adt)) {
      return R.format(nMatch.formatter, adt.value);
    }
    if (RouteAdt.is[oKey as OKey](adt)) {
      return R.format(oMatch.formatter, adt.value);
    }
    if (RouteAdt.is[pKey as PKey](adt)) {
      return R.format(pMatch.formatter, adt.value);
    }
    if (RouteAdt.is[qKey as QKey](adt)) {
      return R.format(qMatch.formatter, adt.value);
    }
    if (RouteAdt.is[rKey as RKey](adt)) {
      return R.format(rMatch.formatter, adt.value);
    }
    if (RouteAdt.is[sKey as SKey](adt)) {
      return R.format(sMatch.formatter, adt.value);
    }
    if (RouteAdt.is[tKey as TKey](adt)) {
      return R.format(tMatch.formatter, adt.value);
    }
    if (RouteAdt.is[uKey as UKey](adt)) {
      return R.format(uMatch.formatter, adt.value);
    }
    if (RouteAdt.is[vKey as VKey](adt)) {
      return R.format(vMatch.formatter, adt.value);
    }
    if (RouteAdt.is[wKey as WKey](adt)) {
      return R.format(wMatch.formatter, adt.value);
    }
    return R.format(xMatch.formatter, adt.value);
  }
  return {
    parser: (path: string) => R.parse(parser, R.Route.parse(path), RouteAdt.as.NotFound({})),
    formatter,
    adt: RouteAdt,
  };
};