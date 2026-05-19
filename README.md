# juani.me — iOS 6 Edition

A parallel build of [juani.me](https://juani.me) that **actually loads and works on a real iPhone 4/4S/5 running iOS 6.x** (Mobile Safari, WebKit 536.x, c. 2012).

The modern site stays on `master`. This branch (`ios6`) is a hard fork — same content, rewritten in 2012-compatible HTML/CSS/JS, served over plain HTTP, styled to mimic a native iOS 6 Mobile Safari window with full OS chrome.

## Why

The modern portfolio uses iOS 6 skeumorphic styling on top of CSS Grid, ES6, custom properties, and TLS 1.2+ — none of which an iOS 6 device can render or even handshake with. This branch is the logical conclusion: make the aesthetic literal.

## Compatibility floor

| Layer | Constraint |
|---|---|
| HTML | HTML 4.01 / HTML5 doctype, no `<picture>`, no `<dialog>` |
| CSS | CSS 2.1 + early CSS3 (`border-radius`, `box-shadow`, `text-shadow`, `-webkit-linear-gradient`, `-webkit-box` flexbox). No Grid, no modern flex, no `var()`, no `clamp()`. |
| JS | ES5 only. `var`, function expressions, `addEventListener`, `XMLHttpRequest`. No `const`/`let`/arrow/`fetch`/`Promise`/template literals. |
| Fonts | WOFF or TTF self-hosted. No WOFF2. |
| Images | PNG / JPEG / GIF / SVG. No WebP, no AVIF. |
| Transport | Plain HTTP. No TLS. |

## Dev loop

```sh
python3 -m http.server 8080
```

- Desktop iteration: Safari 6 desktop pointed at `http://localhost:8080`.
- Real device: phone on same WiFi → `http://<dev-machine-lan-ip>:8080`.
- Inspect via macOS Safari Develop menu (paired iOS 6 device with Web Inspector enabled).

## Hosting

Deferred. When ready, ships to `ios6.juani.me` over plain HTTP. See `/Users/juani/.claude/plans/so-my-current-portfolio-mutable-fountain.md` for the full plan.
