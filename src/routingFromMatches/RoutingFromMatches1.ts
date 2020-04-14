import * as R from 'fp-ts-routing';
import { makeADT, ADTType, ofType, ADT } from 'morphic-ts/lib/adt/index';
export const routingFromMatches1 = <
  A,
  AKey extends string,
>(
  [aKey, aMatch]: [AKey, R.Match<A>],
): {
  parser: (path: string) => { type: 'NotFound' } | 
{ type: AKey; value: A }
  formatter: (adt: { type: 'NotFound' } | 
{ type: AKey; value: A }) => string;
  adt: ADT<{ type: 'NotFound' } | 
{ type: AKey; value: A }, 'type'>
} => {
  const RouteAdt = makeADT('type')({
    NotFound: ofType(),
    [aKey]: ofType<{ type: AKey; value: typeof aMatch._A }>(),
  });
  type RouteAdt = ADTType<typeof RouteAdt>
  const parser = R.zero<RouteAdt>()
    .alt(aMatch.parser.map(a => ({ type: aKey as AKey, value: a })))
  const formatter = (
    adt: RouteAdt
  ): string => {
  if (RouteAdt.is.NotFound(adt)) {
    return R.format(R.end.formatter, {});
  }
    return R.format(aMatch.formatter, adt.value);
  }
  return {
    parser: (path: string) => R.parse(parser, R.Route.parse(path), RouteAdt.as.NotFound({})),
    formatter,
    adt: RouteAdt,
  };
};