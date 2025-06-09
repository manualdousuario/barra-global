class ElementHandler {
	element(element) {
		element.prepend(`<style nonce="ikdfg8934r">:root{--altura:36px}body{padding-top:0 !important;margin:0 0 0 auto !important}.top-bar-ikdfg8934r{list-style:none;background:hsl(0, 0%, 97%);font-size:14px;font-family:ui-monospace, monospace;display:flex;align-items:center;justify-content:center;column-gap:1rem;z-index:99999;padding-inline:1rem;height:var(--altura);white-space:nowrap;overflow-x:auto;overflow-y:hidden;scrollbar-width:none}.top-bar-ikdfg8934r *{margin:0;padding:0}.top-bar-ikdfg8934r li{margin:0}.top-bar-ikdfg8934r ul li a{padding:10px 6px}.top-bar-ikdfg8934r a{flex-shrink:0;font-weight:400}.top-bar-ikdfg8934r a,.top-bar-ikdfg8934r a:visited{color:hsl(229, 100%, 39%);text-decoration:underline}.top-bar-ikdfg8934r a:hover{color:hsl(240, 63%, 27%)}.top-bar-ikdfg8934r .apoie a{text-decoration:none}.top-bar-ikdfg8934r .apoie a span{text-decoration:underline}@media (max-width: 728px){.top-bar-ikdfg8934r{justify-content:start}}@media (prefers-color-scheme: dark){.top-bar-ikdfg8934r{background-color:hsl(0, 0%, 18%);box-shadow:none}.top-bar-ikdfg8934r a,.top-bar-ikdfg8934r a:visited{color:hsl(224, 100%, 83%)}.top-bar-ikdfg8934r a:hover{color:hsl(224, 100%, 71%)}}.top-bar-ikdfg8934r::-webkit-scrollbar{display:none}header.container{margin-top:1rem}.side-nav.fixed{padding-top:var(--altura)}</style>
<ul class="top-bar-ikdfg8934r">
  <li><a href="https://manualdousuario.net/">Blog</a></li>
  <li><a href="https://manualdousuario.net/orbita/">Órbita</a></li>
  <li class="apoie"><a href="https://manualdousuario.net/apoie/">✨<span>Assine</span></a></li>
  <li><a href="https://pcdomanual.com/">PC do Manual</a></li>
  <li><a href="https://manualdousuario.net/podcast/">Podcasts</a></li>
  <li><a href="https://manualdousuario.net/loja/">Lojinha</a></li>
  <li><a href="https://manualdousuario.net/newsletters-brasileiras/">Newsletters BR</a></li>
  <li><a href="https://lerama.pcdomanual.com">Lerama</a></li>
</ul>`, {html: true});
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