# Cached

This folder contains assets that should be background-loaded using
`./fetcher.js`. Fetcher can be used to background-load non-critical
assets and cache the into localStorage.

## What is fetcher?

Fetcher is a background asset loader. Checkout
[the repo](https://github.com/vigetlabs/fetcher).

## Where does this happen?

We include Fetcher inline within the
[`index.html`](https://github.com/vigetlabs/pearl/blob/master/www/server/views/index.html#L17-L21)
server view.
