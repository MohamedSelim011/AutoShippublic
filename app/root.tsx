import { Links, Meta, Outlet, Scripts, ScrollRestoration, useRouteError, isRouteErrorResponse } from "react-router";

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error) && error.status === 401) {
    return (
      <html lang="en">
        <head><meta charSet="utf-8" /><title>Unauthorized</title></head>
        <body>
          <p>You need to access this app through your Shopify admin.</p>
        </body>
      </html>
    );
  }

  return (
    <html lang="en">
      <head><meta charSet="utf-8" /><title>Error</title></head>
      <body>
        <p>Something went wrong. Please try again.</p>
      </body>
    </html>
  );
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="preconnect" href="https://cdn.shopify.com/" />
        <link
          rel="stylesheet"
          href="https://cdn.shopify.com/static/fonts/inter/v4/styles.css"
        />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
