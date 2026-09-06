# Lulu ITS — Static Website

A single-page static website for Lulu ITS, a software solutions company.

## Structure

- `index.html` — all page content and sections (Home, Services, Why Us, About, Contact)
- `css/style.css` — styles
- `js/main.js` — nav toggle, year

## Running locally

Just open `index.html` in a browser, or serve the folder with any static server, e.g.:

```
npx serve .
```

## Contact form

The contact form submits to Formspree (form ID `xoeqnbkq`, delivering to `sales@luluits.com`) using the `@formspree/ajax` library loaded from a pinned, SRI-verified CDN URL in `index.html`. It handles submission, per-field validation errors, and the success/error state — no custom JS needed. If you ever need to rotate the Formspree form, update both the `action` attribute on `#contactForm` and the `formId` passed to `formspree('initForm', ...)` in `index.html`.
