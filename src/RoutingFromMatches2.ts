import * as R from 'fp-ts-routing';
import { unionize, ofType, UnionOf, Unionized, SingleValueVariants } from 'unionize';
export const routingFromMatches2 = <
  A,
  B,
  AKey extends string,
  BKey extends string,
>(
  [aKey, aMatch]: [AKey, R.Match<A>],
  [bKey, bMatch]: [BKey, R.Match<B>],
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
  }, {
    value: 'value',
    tag: 'type',
  });
  type RouteAdt = UnionOf<typeof RouteAdt>
  const parser = R.zero<RouteAdt>()
    .alt(aMatch.parser.map(a => ({ type: aKey as AKey, value: a })))
    .alt(bMatch.parser.map(b => ({ type: bKey as BKey, value: b })))
  const formatter = (
    adt: RouteAdt
  ): string => {
    if (adt.type === 'NotFound') {
      return R.format(R.end.formatter, {});
    }
    if (adt.type === aKey) {
      return R.format(aMatch.formatter, adt.value as A);
    }
    return R.format(bMatch.formatter, adt.value as B);
  }
  return {
    parser: (path: string) => R.parse(parser, R.Route.parse(path), RouteAdt.NotFound({})),
    formatter,
    adt: RouteAdt,
  };
};