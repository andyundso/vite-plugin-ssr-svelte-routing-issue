import { escapeInject, dangerouslySkipEscape } from "vite-plugin-ssr/server";

export { render };
export { passToClient };

//https://github.com/ryanweal/vite-plugin-ssr-svelte
//https://github.com/jiangfengming/svelte-vite-ssr
// See https://vite-plugin-ssr.com/data-fetching
const passToClient = ["pageProps", "routeParams"];

async function render(pageContext) {
    const app = pageContext.Page.render(pageContext);
    const appHtml = app.html;
    const appCss = app.css.code;
    const appHead = app.head;

    // We are using Svelte's app.head variable rather than the Vite Plugin SSR
    // technique described here: https://vite-plugin-ssr.com/html-head This seems
    // easier for using data fetched from APIs and also allows us to input the
    // data using our custom MetaTags Svelte component.

    return escapeInject`<!DOCTYPE html>
      <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <link rel="preconnect" href="https://fonts.gstatic.com">
          <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" >
            ${dangerouslySkipEscape(appHead)}
            <style>${appCss}</style>
          <title>Test</title>
        </head>
        <body>
          <div id="app">${dangerouslySkipEscape(appHtml)}</div>
        </body>
      </html>`;
}
