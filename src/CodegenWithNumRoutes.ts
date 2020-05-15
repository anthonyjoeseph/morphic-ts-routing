import * as A from 'fp-ts/lib/Array';
import * as M from 'fp-ts/lib/Monoid';

const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const alphabetIndex = (
  index: number,
  alphabet: string[],
) => M.fold(M.monoidString)(
  A.range(0, Math.floor(index / 26))
    .map(() => alphabet[index % 26])
);

export const codegenWithNumRoutes = (numRoutes: number): string => {
  if (numRoutes <= 0) return 'numRoutes must be higher than 0'
  const forEachRoute = (
    indexToString: (index: number) => string,
    separator?: string,
    finalRouteIndex = numRoutes - 1,
  ) => M.fold(M.monoidString)(
    A.range(0, separator !== undefined
        ? finalRouteIndex - 1
        : finalRouteIndex
    )
    .map(index => indexToString(index) + (
      separator != null
        ? separator
        : ''
    ))
  ) + (
    separator != null
      ? indexToString(finalRouteIndex)
      : ''
  );

  const adtType = '{ type: string; } & { value: {} | null; }';
  const matchTypes = forEachRoute((index) => `  ${alphabetIndex(index, uppercase)},\n`);
  const keyTypes = forEachRoute((index) => `  ${alphabetIndex(index, uppercase)}Key extends string,\n`);
  const tupleParams = forEachRoute(
    (index) => `  [${alphabetIndex(index, lowercase)}Key, ${alphabetIndex(index, lowercase)}Match]: [${alphabetIndex(index, uppercase)}Key, R.Match<${alphabetIndex(index, uppercase)}>],\n`
  );
  const adtKeyVals = forEachRoute(
    (index) => `    [${alphabetIndex(index, lowercase)}Key]: ofType<{ type: ${alphabetIndex(index, uppercase)}Key; value: typeof ${alphabetIndex(index, lowercase)}Match._A }>(),\n`
  );
  const parserAlts = forEachRoute(
    (index) => `    .alt(${alphabetIndex(index, lowercase)}Match.parser.map(${alphabetIndex(index, lowercase)} => ({ type: ${alphabetIndex(index, lowercase)}Key as ${alphabetIndex(index, uppercase)}Key, value: ${alphabetIndex(index, lowercase)} })))\n`
  );
  const formatterPredicates = forEachRoute(
    (index) => `    if (adt.type === ${alphabetIndex(index, lowercase)}Key) {\n`
      + `      return R.format(${alphabetIndex(index, lowercase)}Match.formatter, adt.value as ${alphabetIndex(index, uppercase)});\n`
      + '    }\n',
    undefined,
    numRoutes - 2,
  ) + `    return R.format(${alphabetIndex(numRoutes - 1, lowercase)}Match.formatter, adt.value as ${alphabetIndex(numRoutes - 1, uppercase)});\n`;
  return 'import * as R from \'fp-ts-routing\';\n'
  + 'import { unionize, ofType, UnionOf, Unionized, SingleValueVariants } from \'unionize\';\n'
  + `export const routingFromMatches${numRoutes} = <\n`
  + matchTypes
  + keyTypes
  + '>(\n'
  + tupleParams
  + '): {\n'
  + `  parser: (path: string) => ${adtType}\n`
  + `  formatter: (adt: ${adtType}) => string;\n`
  + `  adt: Unionized<\n`
  + `    { [x: string]: {} | null; NotFound: {} | null; },\n`
  + `    SingleValueVariants<{ [x: string]: {} | null; NotFound: {} | null; }, "type", "value">,\n`
  + `    "type"\n`
  + `  >`
  + '} => {\n'
  + '  const RouteAdt = unionize({\n'
  + '    NotFound: ofType(),\n'
  + adtKeyVals
  + '  }, {\n'
  + '    value: \'value\',\n'
  + '    tag: \'type\',\n'
  + '  });\n'
  + '  type RouteAdt = UnionOf<typeof RouteAdt>\n'
  + '  const parser = R.zero<RouteAdt>()\n'
  + parserAlts
  + '  const formatter = (\n'
  + '    adt: RouteAdt\n'
  + '  ): string => {\n'
  + '    if (adt.type === \'NotFound\') {\n'
  + '      return R.format(R.end.formatter, {});\n'
  + '    }\n'
  + formatterPredicates
  + '  }\n'
  + '  return {\n'
  + '    parser: (path: string) => R.parse(parser, R.Route.parse(path), RouteAdt.NotFound({})),\n'
  + '    formatter,\n'
  + '    adt: RouteAdt,\n'
  + '  };\n'
  + '};';
};
