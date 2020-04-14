import * as R from 'fp-ts-routing';
import { makeADT, ADTType, ofType, ADT } from 'morphic-ts/lib/adt/index';
export const routingFromMatches1 = <
  A,
  AKey extends string,
>(
  [aKey, aMatch]: [AKey, R.Match<A>],
): {
  parser: R.Parser<{ type: AKey; value: A }>;
  formatter: (adt: { type: AKey; value: A }) => string;
  adt: ADT<{ type: AKey; value: A }, 'type'>
} => {
  const RouteAdt = makeADT('type')({
  [aKey]: ofType<{ type: AKey; value: typeof aMatch._A }>(),
  });
  type RouteAdt = ADTType<typeof RouteAdt>
  const parser = R.zero<RouteAdt>()
    .alt(aMatch.parser.map(a => ({ type: aKey as AKey, value: a })))
  const formatter = (
    adt: RouteAdt
  ): string => {
  return R.format(aMatch.formatter, adt.value);
  }
  return {
    parser,
    formatter,
    adt: RouteAdt,
  };
};
