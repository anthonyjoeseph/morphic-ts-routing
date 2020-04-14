# morphic-ts-routing

Helper function that builds an fp-ts-routing parser and formatter and a morphic-ts ADT from keyed Matches.

# Usage

```ts
import * as R from 'fp-ts-routing'
import { routingFromMatches3 } from 'morphic-ts-routing'
import { ADTType } from 'morphic-ts/lib/adt/index'

const landing = R.end
const show = R.lit('show').then(R.end)
const id = R.int('id').then(R.end)

const {
  parser,
  formatter,
  adt: RouteADT
} = routingFromMatches3(
  ['landing', landing],
  ['show', show],
  ['id', id],
);
type RouteADT = ADTType<typeof RouteADT>

/*

type RouteADT = {
    type: "landing";
    value: {};
} | {
    type: "show";
    value: {};
} | {
    type: "id";
    value: {
        id: number;
    };
}
const parser: R.Parser<RouteADT>
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
