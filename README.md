# Decimal price parser

A small TypeScript utility for converting decimal currency strings into
numeric values.

## Examples

```ts
parsePrice("$18.75");
// 18.75

parsePrice("$1,299.50");
// 1299.5
```

The parser accepts an optional dollar-sign prefix, comma separators, and
surrounding whitespace.

## Development

```bash
npm install
npm test
npm run typecheck
```
