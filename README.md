# morphic-ts-routing

Helper function that builds an fp-ts-routing parser and formatter and a morphic-ts ADT from keyed Matches.

# Usage

## Note

Formatting the `NotFound` type will return '/'

```ts
import * as R from 'fp-ts-routing'
import { routingFromMatches3 } from 'morphic-ts-routing'
import { ADTType, ADT } from 'morphic-ts/lib/adt/index'

const landing: R.Match<{}> = R.end
const show: R.Match<{}> = R.lit('show').then(R.end)
const id: R.Match<{ id: number }> = R.int('id').then(R.end)

const {
  parser,
  formatter,
  adt: RouteADT
} = routingFromMatches3(
  ['Landing', landing],
  ['Show', show],
  ['Id', id],
);
type RouteADT = ADTType<typeof RouteADT>

/*
  type RouteADT = {
      type: "NotFound";
  } | {
      type: "Landing";
      value: {};
  } | {
      type: "Show";
      value: {};
  } | {
      type: "Id";
      value: {
          id: number;
      };
  }
  const RouteADT: ADT<RouteADT, "type">
  const parser: (path: string) => RouteADT
  const formatter: (adt: RouteADT) => string
 */

```

# Limitations

The library supports up to fifty (50) routes natively. If you need a function to accept more than that, you can generate your own using `codegenWithNumRoutes`

```ts
import * as fs from 'fs'
import { codegenWithNumRoutes } from 'morphic-ts-routing'

fs.writeFile(
  `src/RoutingFromMatches100.ts`,
  codegenWithNumRoutes(100),
  (err) => {
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log('RoutingFromMatches100.ts saved!');
  }
);

```
