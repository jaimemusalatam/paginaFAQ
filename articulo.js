const $ = s => document.querySelector(s);
const esc = s => s.replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const slug = s => s.normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');

function render(){
  const id = decodeURIComponent(location.hash.replace(/^#/,''));
  const a = ARTICULOS.find(x => x.id === id);
  $('#yr').textContent = new Date().getFullYear();
  if (!a){
    $('#title').textContent = 'Artículo no encontrado';
    $('#missing').hidden = false;
    return;
  }
  document.title = a.t + ' | Musa';
  const home = a.aud === 'cliente' ? 'cliente.html' : 'usuario.html';
  const who = a.aud === 'cliente' ? 'Clientes' : 'Usuarios';
  $('#tag').textContent = 'Ayuda · ' + who;
  $('#backTop').href = home; $('#backTop').textContent = '← ' + who;
  $('#crumb').href = home + '#articulos'; $('#crumb').textContent = '← Artículos para ' + who.toLowerCase();
  $('#guia').textContent = a.guia;
  $('#title').textContent = a.t;
  $('#lead').textContent = a.d;
  $('#para').textContent = a.para; $('#cuando').textContent = a.cuando;
  $('#meta').hidden = false;
  $('#body').innerHTML = a.body;

  const hs = [...$('#body').querySelectorAll('h2')];
  hs.forEach(h => { h.id = 's-' + slug(h.textContent); });
  if (hs.length > 2){
    $('#tocList').innerHTML = hs.map(h => `<li><a href="#" data-t="${h.id}">${esc(h.textContent)}</a></li>`).join('');
    $('#toc').hidden = false;
    $('#tocList').onclick = e => {
      const l = e.target.closest('a'); if (!l) return;
      e.preventDefault();
      const el = document.getElementById(l.dataset.t);
      if (el) el.scrollIntoView({behavior:'smooth', block:'start'});
    };
  } else { $('#toc').hidden = true; }
  const rel = ARTICULOS.filter(x => x.aud === a.aud && x.id !== a.id);
  if (rel.length){
    $('#relList').innerHTML = rel.map(x => `<a class="art" href="articulo.html#${x.id}"><span class="art__ico">${x.ico}</span><span class="art__g">${x.guia}</span><span class="art__t">${esc(x.t)}</span><span class="art__d">${esc(x.d)}</span><span class="art__go">Leer artículo →</span></a>`).join('');
    $('#related').hidden = false;
  } else { $('#related').hidden = true; }
  $('#contacto-art').hidden = a.aud !== 'cliente';
  scrollTo({top:0});
}
addEventListener('hashchange', render);
render();
