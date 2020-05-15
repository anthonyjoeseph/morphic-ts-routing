import * as R from 'fp-ts-routing';
import { makeADT, ADTType, ofType, ADT } from '@morphic-ts/adt';
export const routingFromMatches47 = <
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
  RR,
  SS,
  TT,
  UU,
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
  RRKey extends string,
  SSKey extends string,
  TTKey extends string,
  UUKey extends string,
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
  [rrKey, rrMatch]: [RRKey, R.Match<RR>],
  [ssKey, ssMatch]: [SSKey, R.Match<SS>],
  [ttKey, ttMatch]: [TTKey, R.Match<TT>],
  [uuKey, uuMatch]: [UUKey, R.Match<UU>],
): {
  parse: (path: string) => { type: 'NotFound' } | 
{ type: AKey; value: A } | { type: BKey; value: B } | { type: CKey; value: C } | { type: DKey; value: D } | { type: EKey; value: E } | { type: FKey; value: F } | { type: GKey; value: G } | { type: HKey; value: H } | { type: IKey; value: I } | { type: JKey; value: J } | { type: KKey; value: K } | { type: LKey; value: L } | { type: MKey; value: M } | { type: NKey; value: N } | { type: OKey; value: O } | { type: PKey; value: P } | { type: QKey; value: Q } | { type: RKey; value: R } | { type: SKey; value: S } | { type: TKey; value: T } | { type: UKey; value: U } | { type: VKey; value: V } | { type: WKey; value: W } | { type: XKey; value: X } | { type: YKey; value: Y } | { type: ZKey; value: Z } | { type: AAKey; value: AA } | { type: BBKey; value: BB } | { type: CCKey; value: CC } | { type: DDKey; value: DD } | { type: EEKey; value: EE } | { type: FFKey; value: FF } | { type: GGKey; value: GG } | { type: HHKey; value: HH } | { type: IIKey; value: II } | { type: JJKey; value: JJ } | { type: KKKey; value: KK } | { type: LLKey; value: LL } | { type: MMKey; value: MM } | { type: NNKey; value: NN } | { type: OOKey; value: OO } | { type: PPKey; value: PP } | { type: QQKey; value: QQ } | { type: RRKey; value: RR } | { type: SSKey; value: SS } | { type: TTKey; value: TT } | { type: UUKey; value: UU }
  format: (adt: { type: 'NotFound' } | 
{ type: AKey; value: A } | { type: BKey; value: B } | { type: CKey; value: C } | { type: DKey; value: D } | { type: EKey; value: E } | { type: FKey; value: F } | { type: GKey; value: G } | { type: HKey; value: H } | { type: IKey; value: I } | { type: JKey; value: J } | { type: KKey; value: K } | { type: LKey; value: L } | { type: MKey; value: M } | { type: NKey; value: N } | { type: OKey; value: O } | { type: PKey; value: P } | { type: QKey; value: Q } | { type: RKey; value: R } | { type: SKey; value: S } | { type: TKey; value: T } | { type: UKey; value: U } | { type: VKey; value: V } | { type: WKey; value: W } | { type: XKey; value: X } | { type: YKey; value: Y } | { type: ZKey; value: Z } | { type: AAKey; value: AA } | { type: BBKey; value: BB } | { type: CCKey; value: CC } | { type: DDKey; value: DD } | { type: EEKey; value: EE } | { type: FFKey; value: FF } | { type: GGKey; value: GG } | { type: HHKey; value: HH } | { type: IIKey; value: II } | { type: JJKey; value: JJ } | { type: KKKey; value: KK } | { type: LLKey; value: LL } | { type: MMKey; value: MM } | { type: NNKey; value: NN } | { type: OOKey; value: OO } | { type: PPKey; value: PP } | { type: QQKey; value: QQ } | { type: RRKey; value: RR } | { type: SSKey; value: SS } | { type: TTKey; value: TT } | { type: UUKey; value: UU }) => string;
  adt: ADT<{ type: 'NotFound' } | 
{ type: AKey; value: A } | { type: BKey; value: B } | { type: CKey; value: C } | { type: DKey; value: D } | { type: EKey; value: E } | { type: FKey; value: F } | { type: GKey; value: G } | { type: HKey; value: H } | { type: IKey; value: I } | { type: JKey; value: J } | { type: KKey; value: K } | { type: LKey; value: L } | { type: MKey; value: M } | { type: NKey; value: N } | { type: OKey; value: O } | { type: PKey; value: P } | { type: QKey; value: Q } | { type: RKey; value: R } | { type: SKey; value: S } | { type: TKey; value: T } | { type: UKey; value: U } | { type: VKey; value: V } | { type: WKey; value: W } | { type: XKey; value: X } | { type: YKey; value: Y } | { type: ZKey; value: Z } | { type: AAKey; value: AA } | { type: BBKey; value: BB } | { type: CCKey; value: CC } | { type: DDKey; value: DD } | { type: EEKey; value: EE } | { type: FFKey; value: FF } | { type: GGKey; value: GG } | { type: HHKey; value: HH } | { type: IIKey; value: II } | { type: JJKey; value: JJ } | { type: KKKey; value: KK } | { type: LLKey; value: LL } | { type: MMKey; value: MM } | { type: NNKey; value: NN } | { type: OOKey; value: OO } | { type: PPKey; value: PP } | { type: QQKey; value: QQ } | { type: RRKey; value: RR } | { type: SSKey; value: SS } | { type: TTKey; value: TT } | { type: UUKey; value: UU }, 'type'>
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
    [rrKey]: ofType<{ type: RRKey; value: typeof rrMatch._A }>(),
    [ssKey]: ofType<{ type: SSKey; value: typeof ssMatch._A }>(),
    [ttKey]: ofType<{ type: TTKey; value: typeof ttMatch._A }>(),
    [uuKey]: ofType<{ type: UUKey; value: typeof uuMatch._A }>(),
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
    .alt(rrMatch.parser.map(rr => ({ type: rrKey as RRKey, value: rr })))
    .alt(ssMatch.parser.map(ss => ({ type: ssKey as SSKey, value: ss })))
    .alt(ttMatch.parser.map(tt => ({ type: ttKey as TTKey, value: tt })))
    .alt(uuMatch.parser.map(uu => ({ type: uuKey as UUKey, value: uu })))
  const format = (
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
    if (RouteAdt.is[xKey as XKey](adt)) {
      return R.format(xMatch.formatter, adt.value);
    }
    if (RouteAdt.is[yKey as YKey](adt)) {
      return R.format(yMatch.formatter, adt.value);
    }
    if (RouteAdt.is[zKey as ZKey](adt)) {
      return R.format(zMatch.formatter, adt.value);
    }
    if (RouteAdt.is[aaKey as AAKey](adt)) {
      return R.format(aaMatch.formatter, adt.value);
    }
    if (RouteAdt.is[bbKey as BBKey](adt)) {
      return R.format(bbMatch.formatter, adt.value);
    }
    if (RouteAdt.is[ccKey as CCKey](adt)) {
      return R.format(ccMatch.formatter, adt.value);
    }
    if (RouteAdt.is[ddKey as DDKey](adt)) {
      return R.format(ddMatch.formatter, adt.value);
    }
    if (RouteAdt.is[eeKey as EEKey](adt)) {
      return R.format(eeMatch.formatter, adt.value);
    }
    if (RouteAdt.is[ffKey as FFKey](adt)) {
      return R.format(ffMatch.formatter, adt.value);
    }
    if (RouteAdt.is[ggKey as GGKey](adt)) {
      return R.format(ggMatch.formatter, adt.value);
    }
    if (RouteAdt.is[hhKey as HHKey](adt)) {
      return R.format(hhMatch.formatter, adt.value);
    }
    if (RouteAdt.is[iiKey as IIKey](adt)) {
      return R.format(iiMatch.formatter, adt.value);
    }
    if (RouteAdt.is[jjKey as JJKey](adt)) {
      return R.format(jjMatch.formatter, adt.value);
    }
    if (RouteAdt.is[kkKey as KKKey](adt)) {
      return R.format(kkMatch.formatter, adt.value);
    }
    if (RouteAdt.is[llKey as LLKey](adt)) {
      return R.format(llMatch.formatter, adt.value);
    }
    if (RouteAdt.is[mmKey as MMKey](adt)) {
      return R.format(mmMatch.formatter, adt.value);
    }
    if (RouteAdt.is[nnKey as NNKey](adt)) {
      return R.format(nnMatch.formatter, adt.value);
    }
    if (RouteAdt.is[ooKey as OOKey](adt)) {
      return R.format(ooMatch.formatter, adt.value);
    }
    if (RouteAdt.is[ppKey as PPKey](adt)) {
      return R.format(ppMatch.formatter, adt.value);
    }
    if (RouteAdt.is[qqKey as QQKey](adt)) {
      return R.format(qqMatch.formatter, adt.value);
    }
    if (RouteAdt.is[rrKey as RRKey](adt)) {
      return R.format(rrMatch.formatter, adt.value);
    }
    if (RouteAdt.is[ssKey as SSKey](adt)) {
      return R.format(ssMatch.formatter, adt.value);
    }
    if (RouteAdt.is[ttKey as TTKey](adt)) {
      return R.format(ttMatch.formatter, adt.value);
    }
    return R.format(uuMatch.formatter, adt.value);
  }
  return {
    parse: (path: string) => R.parse(parser, R.Route.parse(path), RouteAdt.as.NotFound({})),
    format,
    adt: RouteAdt,
  };
};