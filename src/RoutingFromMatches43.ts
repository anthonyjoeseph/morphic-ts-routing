import * as R from 'fp-ts-routing';
import { unionize, ofType, UnionOf, Unionized, SingleValueVariants } from 'unionize';
export const routingFromMatches43 = <
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
  Y,
  Z,
  AA,
  BB,
  CC,
  DD,
  EE,
  FF,
  GG,
  HH,
  II,
  JJ,
  KK,
  LL,
  MM,
  NN,
  OO,
  PP,
  QQ,
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
  YKey extends string,
  ZKey extends string,
  AAKey extends string,
  BBKey extends string,
  CCKey extends string,
  DDKey extends string,
  EEKey extends string,
  FFKey extends string,
  GGKey extends string,
  HHKey extends string,
  IIKey extends string,
  JJKey extends string,
  KKKey extends string,
  LLKey extends string,
  MMKey extends string,
  NNKey extends string,
  OOKey extends string,
  PPKey extends string,
  QQKey extends string,
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
  [yKey, yMatch]: [YKey, R.Match<Y>],
  [zKey, zMatch]: [ZKey, R.Match<Z>],
  [aaKey, aaMatch]: [AAKey, R.Match<AA>],
  [bbKey, bbMatch]: [BBKey, R.Match<BB>],
  [ccKey, ccMatch]: [CCKey, R.Match<CC>],
  [ddKey, ddMatch]: [DDKey, R.Match<DD>],
  [eeKey, eeMatch]: [EEKey, R.Match<EE>],
  [ffKey, ffMatch]: [FFKey, R.Match<FF>],
  [ggKey, ggMatch]: [GGKey, R.Match<GG>],
  [hhKey, hhMatch]: [HHKey, R.Match<HH>],
  [iiKey, iiMatch]: [IIKey, R.Match<II>],
  [jjKey, jjMatch]: [JJKey, R.Match<JJ>],
  [kkKey, kkMatch]: [KKKey, R.Match<KK>],
  [llKey, llMatch]: [LLKey, R.Match<LL>],
  [mmKey, mmMatch]: [MMKey, R.Match<MM>],
  [nnKey, nnMatch]: [NNKey, R.Match<NN>],
  [ooKey, ooMatch]: [OOKey, R.Match<OO>],
  [ppKey, ppMatch]: [PPKey, R.Match<PP>],
  [qqKey, qqMatch]: [QQKey, R.Match<QQ>],
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
    [vKey]: ofType<{ type: VKey; value: typeof vMatch._A }>(),
    [wKey]: ofType<{ type: WKey; value: typeof wMatch._A }>(),
    [xKey]: ofType<{ type: XKey; value: typeof xMatch._A }>(),
    [yKey]: ofType<{ type: YKey; value: typeof yMatch._A }>(),
    [zKey]: ofType<{ type: ZKey; value: typeof zMatch._A }>(),
    [aaKey]: ofType<{ type: AAKey; value: typeof aaMatch._A }>(),
    [bbKey]: ofType<{ type: BBKey; value: typeof bbMatch._A }>(),
    [ccKey]: ofType<{ type: CCKey; value: typeof ccMatch._A }>(),
    [ddKey]: ofType<{ type: DDKey; value: typeof ddMatch._A }>(),
    [eeKey]: ofType<{ type: EEKey; value: typeof eeMatch._A }>(),
    [ffKey]: ofType<{ type: FFKey; value: typeof ffMatch._A }>(),
    [ggKey]: ofType<{ type: GGKey; value: typeof ggMatch._A }>(),
    [hhKey]: ofType<{ type: HHKey; value: typeof hhMatch._A }>(),
    [iiKey]: ofType<{ type: IIKey; value: typeof iiMatch._A }>(),
    [jjKey]: ofType<{ type: JJKey; value: typeof jjMatch._A }>(),
    [kkKey]: ofType<{ type: KKKey; value: typeof kkMatch._A }>(),
    [llKey]: ofType<{ type: LLKey; value: typeof llMatch._A }>(),
    [mmKey]: ofType<{ type: MMKey; value: typeof mmMatch._A }>(),
    [nnKey]: ofType<{ type: NNKey; value: typeof nnMatch._A }>(),
    [ooKey]: ofType<{ type: OOKey; value: typeof ooMatch._A }>(),
    [ppKey]: ofType<{ type: PPKey; value: typeof ppMatch._A }>(),
    [qqKey]: ofType<{ type: QQKey; value: typeof qqMatch._A }>(),
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
    .alt(vMatch.parser.map(v => ({ type: vKey as VKey, value: v })))
    .alt(wMatch.parser.map(w => ({ type: wKey as WKey, value: w })))
    .alt(xMatch.parser.map(x => ({ type: xKey as XKey, value: x })))
    .alt(yMatch.parser.map(y => ({ type: yKey as YKey, value: y })))
    .alt(zMatch.parser.map(z => ({ type: zKey as ZKey, value: z })))
    .alt(aaMatch.parser.map(aa => ({ type: aaKey as AAKey, value: aa })))
    .alt(bbMatch.parser.map(bb => ({ type: bbKey as BBKey, value: bb })))
    .alt(ccMatch.parser.map(cc => ({ type: ccKey as CCKey, value: cc })))
    .alt(ddMatch.parser.map(dd => ({ type: ddKey as DDKey, value: dd })))
    .alt(eeMatch.parser.map(ee => ({ type: eeKey as EEKey, value: ee })))
    .alt(ffMatch.parser.map(ff => ({ type: ffKey as FFKey, value: ff })))
    .alt(ggMatch.parser.map(gg => ({ type: ggKey as GGKey, value: gg })))
    .alt(hhMatch.parser.map(hh => ({ type: hhKey as HHKey, value: hh })))
    .alt(iiMatch.parser.map(ii => ({ type: iiKey as IIKey, value: ii })))
    .alt(jjMatch.parser.map(jj => ({ type: jjKey as JJKey, value: jj })))
    .alt(kkMatch.parser.map(kk => ({ type: kkKey as KKKey, value: kk })))
    .alt(llMatch.parser.map(ll => ({ type: llKey as LLKey, value: ll })))
    .alt(mmMatch.parser.map(mm => ({ type: mmKey as MMKey, value: mm })))
    .alt(nnMatch.parser.map(nn => ({ type: nnKey as NNKey, value: nn })))
    .alt(ooMatch.parser.map(oo => ({ type: ooKey as OOKey, value: oo })))
    .alt(ppMatch.parser.map(pp => ({ type: ppKey as PPKey, value: pp })))
    .alt(qqMatch.parser.map(qq => ({ type: qqKey as QQKey, value: qq })))
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
    if (adt.type === uKey) {
      return R.format(uMatch.formatter, adt.value as U);
    }
    if (adt.type === vKey) {
      return R.format(vMatch.formatter, adt.value as V);
    }
    if (adt.type === wKey) {
      return R.format(wMatch.formatter, adt.value as W);
    }
    if (adt.type === xKey) {
      return R.format(xMatch.formatter, adt.value as X);
    }
    if (adt.type === yKey) {
      return R.format(yMatch.formatter, adt.value as Y);
    }
    if (adt.type === zKey) {
      return R.format(zMatch.formatter, adt.value as Z);
    }
    if (adt.type === aaKey) {
      return R.format(aaMatch.formatter, adt.value as AA);
    }
    if (adt.type === bbKey) {
      return R.format(bbMatch.formatter, adt.value as BB);
    }
    if (adt.type === ccKey) {
      return R.format(ccMatch.formatter, adt.value as CC);
    }
    if (adt.type === ddKey) {
      return R.format(ddMatch.formatter, adt.value as DD);
    }
    if (adt.type === eeKey) {
      return R.format(eeMatch.formatter, adt.value as EE);
    }
    if (adt.type === ffKey) {
      return R.format(ffMatch.formatter, adt.value as FF);
    }
    if (adt.type === ggKey) {
      return R.format(ggMatch.formatter, adt.value as GG);
    }
    if (adt.type === hhKey) {
      return R.format(hhMatch.formatter, adt.value as HH);
    }
    if (adt.type === iiKey) {
      return R.format(iiMatch.formatter, adt.value as II);
    }
    if (adt.type === jjKey) {
      return R.format(jjMatch.formatter, adt.value as JJ);
    }
    if (adt.type === kkKey) {
      return R.format(kkMatch.formatter, adt.value as KK);
    }
    if (adt.type === llKey) {
      return R.format(llMatch.formatter, adt.value as LL);
    }
    if (adt.type === mmKey) {
      return R.format(mmMatch.formatter, adt.value as MM);
    }
    if (adt.type === nnKey) {
      return R.format(nnMatch.formatter, adt.value as NN);
    }
    if (adt.type === ooKey) {
      return R.format(ooMatch.formatter, adt.value as OO);
    }
    if (adt.type === ppKey) {
      return R.format(ppMatch.formatter, adt.value as PP);
    }
    return R.format(qqMatch.formatter, adt.value as QQ);
  }
  return {
    parser: (path: string) => R.parse(parser, R.Route.parse(path), RouteAdt.NotFound({})),
    formatter,
    adt: RouteAdt,
  };
};