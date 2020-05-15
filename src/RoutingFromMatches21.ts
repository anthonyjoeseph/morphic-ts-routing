import * as R from 'fp-ts-routing';
import { unionize, ofType, UnionOf, Unionized, SingleValueVariants } from 'unionize';
export const routingFromMatches21 = <
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
): {
  parser: (path: string) => { type: string; } & { value: {} | null; }
  formatter: (adt: { type: string; } & { value: {} | null; }) => string;
  adt: Unionized<
    { [x: string]: {} | null; NotFound: {} | null; },
    SingleValueVariants<{ [x: string]: {} | null; NotFound: {} | null; }, "type", "value">,
    "type"
  >} => {
  const RouteAdt = unionize({
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
  }, {
    value: 'value',
    tag: 'type',
  });
  type RouteAdt = UnionOf<typeof RouteAdt>
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
  const formatter = (
    adt: RouteAdt
  ): string => {
    if (adt.type === 'NotFound') {
      return R.format(R.end.formatter, {});
    }
    if (adt.type === aKey) {
      return R.format(aMatch.formatter, adt.value as A);
    }
    if (adt.type === bKey) {
      return R.format(bMatch.formatter, adt.value as B);
    }
    if (adt.type === cKey) {
      return R.format(cMatch.formatter, adt.value as C);
    }
    if (adt.type === dKey) {
      return R.format(dMatch.formatter, adt.value as D);
    }
    if (adt.type === eKey) {
      return R.format(eMatch.formatter, adt.value as E);
    }
    if (adt.type === fKey) {
      return R.format(fMatch.formatter, adt.value as F);
    }
    if (adt.type === gKey) {
      return R.format(gMatch.formatter, adt.value as G);
    }
    if (adt.type === hKey) {
      return R.format(hMatch.formatter, adt.value as H);
    }
    if (adt.type === iKey) {
      return R.format(iMatch.formatter, adt.value as I);
    }
    if (adt.type === jKey) {
      return R.format(jMatch.formatter, adt.value as J);
    }
    if (adt.type === kKey) {
      return R.format(kMatch.formatter, adt.value as K);
    }
    if (adt.type === lKey) {
      return R.format(lMatch.formatter, adt.value as L);
    }
    if (adt.type === mKey) {
      return R.format(mMatch.formatter, adt.value as M);
    }
    if (adt.type === nKey) {
      return R.format(nMatch.formatter, adt.value as N);
    }
    if (adt.type === oKey) {
      return R.format(oMatch.formatter, adt.value as O);
    }
    if (adt.type === pKey) {
      return R.format(pMatch.formatter, adt.value as P);
    }
    if (adt.type === qKey) {
      return R.format(qMatch.formatter, adt.value as Q);
    }
    if (adt.type === rKey) {
      return R.format(rMatch.formatter, adt.value as R);
    }
    if (adt.type === sKey) {
      return R.format(sMatch.formatter, adt.value as S);
    }
    if (adt.type === tKey) {
      return R.format(tMatch.formatter, adt.value as T);
    }
    return R.format(uMatch.formatter, adt.value as U);
  }
  return {
    parser: (path: string) => R.parse(parser, R.Route.parse(path), RouteAdt.NotFound({})),
    formatter,
    adt: RouteAdt,
  };
};