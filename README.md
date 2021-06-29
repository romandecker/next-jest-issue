This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app --typescript`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). I made it to showcase an issue with next.js's custom-server functionality and integration testing with jest.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Confirm that both API endpoints work as intended:

- http://localhost:3000/api/hello
- http://localhost:3000/api/world

should both respond with the same JSON payload.

Then, try to run the integration test sample:

```
npm run test
```

Notice that the second request ALWAYS fails, no matter which one it is, because next seems to only wire up the first route that is being accessed.
