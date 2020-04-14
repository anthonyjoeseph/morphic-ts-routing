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
    finalRouteIndex?: number,
  ) => M.fold(M.monoidString)(
    A.range(0, separator !== undefined ? numRoutes - 2 : (finalRouteIndex || numRoutes - 1))
    .map(index => indexToString(index) + (separator !== undefined ? separator : ''))
  ) + (separator !== undefined ? indexToString(numRoutes - 1) : '');

  const adtType = forEachRoute(
    (index) => `{ type: ${alphabetIndex(index, uppercase)}Key; value: ${alphabetIndex(index, uppercase)} }`,
    ' | ',
  );

  const matchTypes = forEachRoute((index) => `  ${alphabetIndex(index, uppercase)},\n`);
  const keyTypes = forEachRoute((index) => `  ${alphabetIndex(index, uppercase)}Key extends string,\n`);
  const tupleParams = forEachRoute(
    (index) => `  [${alphabetIndex(index, lowercase)}Key, ${alphabetIndex(index, lowercase)}Match]: [${alphabetIndex(index, uppercase)}Key, R.Match<${alphabetIndex(index, uppercase)}>],\n`
  );
  const adtKeyVals = forEachRoute(
    (index) => `  [${alphabetIndex(index, lowercase)}Key]: ofType<{ type: ${alphabetIndex(index, uppercase)}Key; value: typeof ${alphabetIndex(index, lowercase)}Match._A }>(),\n`
  );
  const parserAlts = forEachRoute(
    (index) => `    .alt(${alphabetIndex(index, lowercase)}Match.parser.map(${alphabetIndex(index, lowercase)} => ({ type: ${alphabetIndex(index, lowercase)}Key as ${alphabetIndex(index, uppercase)}Key, value: ${alphabetIndex(index, lowercase)} })))\n`
  );
  const formatterPredicates = forEachRoute(
    (index) => `  if (RouteAdt.is[${alphabetIndex(index, lowercase)}Key as ${alphabetIndex(index, uppercase)}Key](adt)) {\n`
      + `    return R.format(${alphabetIndex(index, lowercase)}Match.formatter, adt.value);\n`
      + '  }\n',
    undefined,
    numRoutes - 2,
  ) + `  return R.format(${alphabetIndex(numRoutes - 1, lowercase)}Match.formatter, adt.value);\n`;
  return 'import * as R from \'fp-ts-routing\';\n'
  + 'import { makeADT, ADTType, ofType, ADT } from \'morphic-ts/lib/adt/index\';\n'
  + `export const routingFromMatches${numRoutes} = <\n`
  + matchTypes
  + keyTypes
  + '>(\n'
  + tupleParams
  + '): {\n'
  + `  parser: R.Parser<${adtType}>;\n`
  + `  formatter: (adt: ${adtType}) => string;\n`
  + `  adt: ADT<${adtType}, 'type'>\n`
  + '} => {\n'
  + '  const RouteAdt = makeADT(\'type\')({\n'
  + adtKeyVals
  + '  });\n'
  + '  type RouteAdt = ADTType<typeof RouteAdt>\n'
  + '  const parser = R.zero<RouteAdt>()\n'
  + parserAlts
  + '  const formatter = (\n'
  + '    adt: RouteAdt\n'
  + '  ): string => {\n'
  + formatterPredicates
  + '  }\n'
  + '  return {\n'
  + '    parser,\n'
  + '    formatter,\n'
  + '    adt: RouteAdt,\n'
  + '  };\n'
  + '};';
};
