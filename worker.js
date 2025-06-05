class ElementHandler {
  element(element) {
    // Criar o HTML sem CSS inline
    const htmlContent = `
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
      </div>
    `;

    // Inserir o HTML
    element.prepend(htmlContent, {html: true});

    // Script para aplicar estilos via JavaScript
    const styleScript = `
      <script>
      (function() {
        // Definir variável CSS customizada
        document.documentElement.style.setProperty('--altura', '36px');
        
        // Estilos para body
        document.body.style.setProperty('padding-top', '0', 'important');
        document.body.style.setProperty('margin', '0 0 0 auto', 'important');
        
        // Encontrar a top-bar e aplicar estilos
        const topBar = document.querySelector('.top-bar-p5b2j8dMij');
        if (topBar) {
          topBar.style.setProperty('background', 'hsl(0, 0%, 97%)');
          topBar.style.setProperty('font-size', '14px');
          topBar.style.setProperty('font-family', 'ui-monospace, monospace');
          topBar.style.setProperty('display', 'flex');
          topBar.style.setProperty('align-items', 'center');
          topBar.style.setProperty('justify-content', 'center');
          topBar.style.setProperty('column-gap', '1.5rem');
          topBar.style.setProperty('z-index', '99999');
          topBar.style.setProperty('padding-inline', '1rem');
          topBar.style.setProperty('height', 'var(--altura)');
        }
        
        // Estilos para elementos dentro da top-bar
        const topBarElements = topBar?.querySelectorAll('*');
        topBarElements?.forEach(el => {
          el.style.setProperty('margin', '0');
          el.style.setProperty('padding', '0');
        });
        
        // Estilos para h3
        const h3 = topBar?.querySelector('h3');
        if (h3) {
          h3.style.setProperty('margin-top', '10px');
          h3.style.setProperty('z-index', '999');
        }
        
        // Estilos para img dentro do h3
        const img = h3?.querySelector('img');
        if (img) {
          img.style.setProperty('max-width', '33px');
          img.style.setProperty('height', '38px');
        }
        
        // Estilos para ul
        const ul = topBar?.querySelector('ul');
        if (ul) {
          ul.style.setProperty('list-style', 'none');
          ul.style.setProperty('display', 'flex');
          ul.style.setProperty('flex-wrap', 'nowrap');
          ul.style.setProperty('column-gap', '1rem');
          ul.style.setProperty('white-space', 'nowrap');
          ul.style.setProperty('overflow-x', 'auto');
          ul.style.setProperty('overflow-y', 'hidden');
          ul.style.setProperty('scrollbar-width', 'none');
        }
        
        // Estilos para li
        const lis = ul?.querySelectorAll('li');
        lis?.forEach(li => {
          li.style.setProperty('margin', '0');
        });
        
        // Estilos para links dentro de li
        const liLinks = ul?.querySelectorAll('li a');
        liLinks?.forEach(link => {
          link.style.setProperty('padding', '10px 6px');
        });
        
        // Estilos para todos os links
        const allLinks = topBar?.querySelectorAll('a');
        allLinks?.forEach(link => {
          link.style.setProperty('flex-shrink', '0');
          link.style.setProperty('font-weight', '400');
          link.style.setProperty('color', 'hsl(229, 100%, 39%)');
          link.style.setProperty('text-decoration', 'underline');
        });
        
        // Estilos para hover (usando event listeners)
        allLinks?.forEach(link => {
          link.addEventListener('mouseenter', function() {
            this.style.setProperty('color', 'hsl(240, 63%, 27%)');
          });
          link.addEventListener('mouseleave', function() {
            this.style.setProperty('color', 'hsl(229, 100%, 39%)');
          });
        });
        
        // Estilos especiais para .apoie
        const apoieLink = topBar?.querySelector('.apoie a');
        if (apoieLink) {
          apoieLink.style.setProperty('text-decoration', 'none');
        }
        
        const apoieSpan = apoieLink?.querySelector('span');
        if (apoieSpan) {
          apoieSpan.style.setProperty('text-decoration', 'underline');
        }
        
        // Media queries via JavaScript
        function applyMediaQueries() {
          if (window.innerWidth <= 900) {
            if (topBar) {
              topBar.style.setProperty('justify-content', 'start');
              topBar.style.setProperty('padding-right', '0');
              topBar.style.setProperty('column-gap', '1rem');
            }
            if (ul) {
              ul.style.setProperty('column-gap', '0.5rem');
              ul.style.setProperty('padding-right', '1rem');
            }
          } else {
            if (topBar) {
              topBar.style.setProperty('justify-content', 'center');
              topBar.style.setProperty('padding-right', '');
              topBar.style.setProperty('column-gap', '1.5rem');
            }
            if (ul) {
              ul.style.setProperty('column-gap', '1rem');
              ul.style.setProperty('padding-right', '');
            }
          }
        }
        
        // Dark mode
        function applyDarkMode() {
          if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            if (topBar) {
              topBar.style.setProperty('background-color', 'hsl(0, 0%, 18%)');
              topBar.style.setProperty('box-shadow', 'none');
            }
            if (img) {
              img.style.setProperty('filter', 'invert(1)');
            }
            allLinks?.forEach(link => {
              link.style.setProperty('color', 'hsl(224, 100%, 71%)');
              link.removeEventListener('mouseenter', function() {});
              link.removeEventListener('mouseleave', function() {});
              link.addEventListener('mouseenter', function() {
                this.style.setProperty('color', 'hsl(224, 100%, 83%)');
              });
              link.addEventListener('mouseleave', function() {
                this.style.setProperty('color', 'hsl(224, 100%, 71%)');
              });
            });
          }
        }
        
        // Aplicar estilos responsivos
        applyMediaQueries();
        applyDarkMode();
        
        // Escutar mudanças de tamanho
        window.addEventListener('resize', applyMediaQueries);
        
        // Escutar mudanças de tema
        if (window.matchMedia) {
          window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyDarkMode);
        }
        
        // Estilos para outros elementos mencionados no CSS original
        const headerContainer = document.querySelector('header.container');
        if (headerContainer) {
          headerContainer.style.setProperty('margin-top', '1rem');
        }
        
        const sideNavFixed = document.querySelector('.side-nav.fixed');
        if (sideNavFixed) {
          sideNavFixed.style.setProperty('padding-top', 'var(--altura)');
        }
        
        // Esconder scrollbar webkit
        if (topBar) {
          topBar.style.setProperty('-webkit-scrollbar', 'none');
        }
      })();
      </script>
    `;

    // Inserir o script
    element.append(styleScript, {html: true});
    
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