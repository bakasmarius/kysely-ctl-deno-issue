# kysely-ctl-deno-issue

Run `deno task migrate`.

With `kysely-ctl` versions < 0.12.1, you get an error `Cannot find module '@std/assert'`.

With `kysely-ctl` versions >= 0.12.1, you get an error `[ERR_UNSUPPORTED_ESM_URL_SCHEME] Only file and data URLs are supported by the default ESM loader. Received protocol 'c'`.
