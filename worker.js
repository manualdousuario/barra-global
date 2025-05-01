export default {
  async fetch(request) {
    const DEFAULT_SECURITY_HEADERS = {
      /*
    Secure your application with Content-Security-Policy headers.
    Enabling these headers will permit content from a trusted domain and all its subdomains.
    @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Content-Security-Policy */
    "Content-Security-Policy": "default-src 'self';style-src 'nonce-p5b2j8dMij'",
      /*
    You can also set Strict-Transport-Security headers.
    These are not automatically set because your website might get added to Chrome's HSTS preload list.
    Here's the code if you want to apply it:
    "Strict-Transport-Security" : "max-age=63072000; includeSubDomains; preload",
    */
      /*
    Permissions-Policy header provides the ability to allow or deny the use of browser features, such as opting out of FLoC - which you can use below:
    "Permissions-Policy": "interest-cohort=()",
    */
      /*
    X-XSS-Protection header prevents a page from loading if an XSS attack is detected.
    @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-XSS-Protection
    */
      "X-XSS-Protection": "0",
      /*
    X-Frame-Options header prevents click-jacking attacks.
    @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Frame-Options
    */
      "X-Frame-Options": "DENY",
      /*
    X-Content-Type-Options header prevents MIME-sniffing.
    @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/X-Content-Type-Options
    */
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "Cross-Origin-Embedder-Policy": 'require-corp; report-to="default";',
      "Cross-Origin-Opener-Policy": 'same-site; report-to="default";',
      "Cross-Origin-Resource-Policy": "same-site",
    };
    const BLOCKED_HEADERS = [
      "Public-Key-Pins",
      "X-Powered-By",
      "X-AspNet-Version",
    ];

    let response = await fetch(request);
    let newHeaders = new Headers(response.headers);

    const tlsVersion = request.cf.tlsVersion;
    console.log(tlsVersion);
    // This sets the headers for HTML responses:
    if (
      newHeaders.has("Content-Type") &&
      !newHeaders.get("Content-Type").includes("text/html")
    ) {
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders,
      });
    }

    Object.keys(DEFAULT_SECURITY_HEADERS).map((name) => {
      newHeaders.set(name, DEFAULT_SECURITY_HEADERS[name]);
    });

    BLOCKED_HEADERS.forEach((name) => {
      newHeaders.delete(name);
    });

    if (tlsVersion !== "TLSv1.2" && tlsVersion !== "TLSv1.3") {
      return new Response("You need to use TLS version 1.2 or higher.", {
        status: 400,
      });
    } else {
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders,
      });
    }
  },
};

class ElementHandler {
	element(element) {
		element.prepend(`<style nonce="p5b2j8dMij">body{padding-top:0 !important;margin:0 0 0 auto !important}.top-bar-p5b2j8dMij{background:hsl(0, 0%, 97%);font-size:14px;font-family:ui-monospace, monospace;display:flex;align-items:center;justify-content:center;column-gap:1.5rem;z-index:99999;padding-inline:1rem;height:36px}.top-bar-p5b2j8dMij *{margin:0;padding:0}.top-bar-p5b2j8dMij h3{margin-top:10px;z-index:999}.top-bar-p5b2j8dMij h3 img{max-width:33px;height:38px}.top-bar-p5b2j8dMij ul{list-style:none;display:flex;flex-wrap:nowrap;column-gap:1rem;white-space:nowrap;overflow-x:auto;overflow-y:hidden;scrollbar-width:none}.top-bar-p5b2j8dMij li{margin:0}.top-bar-p5b2j8dMij ul li a{padding:10px 6px}.top-bar-p5b2j8dMij a{flex-shrink:0}.top-bar-p5b2j8dMij a:active{font-weight:bold}.top-bar-p5b2j8dMij a,.top-bar-p5b2j8dMij a:visited{color:hsl(229, 100%, 39%)}.top-bar-p5b2j8dMij a:hover{color:hsl(240, 63%, 27%)}.top-bar-p5b2j8dMij .apoie a{text-decoration:none}.top-bar-p5b2j8dMij .apoie a span{text-decoration:underline}@media (max-width: 900px){.top-bar-p5b2j8dMij{justify-content:start;padding-right:0;column-gap:1rem}.top-bar-p5b2j8dMij ul{column-gap:0.5rem;padding-right:1rem}}@media (prefers-color-scheme: dark){.top-bar-p5b2j8dMij{background-color:hsl(0, 0%, 18%);box-shadow:none}.top-bar-p5b2j8dMij h3 img{filter: invert(1)}.top-bar-p5b2j8dMij a,.top-bar-p5b2j8dMij a:visited{color:hsl(224, 100%, 71%)}.top-bar-p5b2j8dMij a:hover{color:hsl(224, 100%, 83%)}}.top-bar-p5b2j8dMij::-webkit-scrollbar{display:none}</style>
    <div class="top-bar-p5b2j8dMij">
  <h3>
    <a href="https://manualdousuario.net/">
      <img src="https://manualdousuario.net/wp-content/themes/dez/img/logo-manual-top-bar.avif" height="38" width="33" alt>
    </a>
  </h3>
  <ul>
    <li><a href="https://manualdousuario.net/orbita/">Órbita</a></li>
    <li class="apoie"><a href="https://manualdousuario.net/apoie/">⭐️<span>Assine</span></a></li>
    <li><a href="https://pcdomanual.com/">PC do Manual</a></li>
    <li><a href="https://manualdousuario.net/podcast/">Podcasts</a></li>
    <li><a href="https://manualdousuario.net/loja/">Lojinha</a></li>
    <li><a href="https://manualdousuario.net/newsletters-brasileiras/">Diretório de newsletters</a></li>
    <li><a href="https://lerama.pcdomanual.com">Lerama</a></li>
  </ul>
</div>`, {html: true});
		console.log("injected");
	}
}
async function handleRequest(req) {
	const res = await fetch(req)
	return new HTMLRewriter().on("body", new ElementHandler()).transform(res)
}

addEventListener("fetch", (event) => {
	event.respondWith(
		handleRequest(event.request).catch(
			(err) => new Response(err.stack, { status: 500 })
			)
		);
});