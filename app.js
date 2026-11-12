const $ = s => document.querySelector(s);
const esc = s => s.replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const norm = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const item = (q,a,cat,hl) => {
  let qq = esc(q);
  if (hl) qq = qq.replace(new RegExp('('+hl.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','ig'),'<mark>$1</mark>');
  return `<details><summary><span>${qq}${cat?`<span class="tagc">${esc(cat)}</span>`:''}</span></summary><div class="ans">${a.split('\n').map(l=>`<p>${esc(l)}</p>`).join('')}</div></details>`;
};

$('#cats').innerHTML = CATS.map(c => `<button class="cat" data-id="${c.id}"><span class="cat__ico">${c.ico}</span><span class="cat__t">${c.t}</span><span class="cat__d">${c.d}</span></button>`).join('');
$('#pop').innerHTML = CATS.flatMap(c => c.faqs.filter(f=>f[2]).map(f => item(f[0],f[1],c.t))).join('');
const ARTS = (typeof ARTICULOS!=='undefined' ? ARTICULOS : []).filter(x=>x.aud===window.AUD);
const plain = h => h.replace(/<[^>]+>/g,' ').replace(/\s+/g,' ');
const artCard = x => `<a class="art" href="articulo.html#${x.id}"><span class="art__ico">${x.ico}</span><span class="art__g">${x.guia}</span><span class="art__t">${esc(x.t)}</span><span class="art__d">${esc(x.d)}</span><span class="art__go">Leer artículo →</span></a>`;
if ($('#arts')) $('#arts').innerHTML = ARTS.map(artCard).join('');
if (!ARTS.length && $('#articulos')) $('#articulos').hidden = true;
if (matchMedia('(max-width:520px)').matches) $('#q').placeholder = 'Busca tu duda…';
$('#yr').textContent = new Date().getFullYear();

function show(id){
  const c = CATS.find(x=>x.id===id);
  $('#detTitle').textContent = c.ico+' '+c.t;
  $('#detDesc').textContent = c.d;
  const ar = ARTS.find(x=>x.id===c.art);
  $('#detArt').innerHTML = ar ? `<a class="art art--wide" href="articulo.html#${ar.id}"><span class="art__ico">${ar.ico}</span><span class="art__t">Artículo completo: ${esc(ar.t)}</span><span class="art__go">Leer →</span></a>` : '';
  $('#detList').innerHTML = c.faqs.map(f=>item(f[0],f[1])).join('');
  $('#categorias').hidden = $('#populares').hidden = true;
  if ($('#articulos')) $('#articulos').hidden = true;
  $('#detalle').hidden = false;
  scrollTo({top:0});
}
$('#cats').addEventListener('click', e => { const b = e.target.closest('.cat'); if (b) show(b.dataset.id); });
$('#back').addEventListener('click', () => { $('#detalle').hidden = true; $('#categorias').hidden = $('#populares').hidden = false; if ($('#articulos') && ARTS.length) $('#articulos').hidden = false; });

$('#q').addEventListener('input', e => {
  const raw = e.target.value.trim(), q = norm(raw), on = q.length > 1;
  $('#resultados').hidden = !on;
  ['#categorias','#populares','#detalle','#articulos'].forEach(s => { if (on) $(s).hidden = true; });
  if (!on){ $('#categorias').hidden = $('#populares').hidden = false; if (ARTS.length) $('#articulos').hidden = false; return; }
  const hits = CATS.flatMap(c => c.faqs.filter(f => norm(f[0]+' '+f[1]).includes(q)).map(f => item(f[0],f[1],c.t,raw)));
  const ah = ARTS.filter(x => norm(x.t+' '+x.d+' '+plain(x.body)).includes(q));
  $('#resArts').innerHTML = ah.length ? '<h3 class="resh">Artículos</h3><div class="arts">'+ah.map(artCard).join('')+'</div><h3 class="resh">Preguntas frecuentes</h3>' : '';
  $('#resTitle').textContent = (hits.length+ah.length) ? `${hits.length+ah.length} resultado${hits.length+ah.length>1?'s':''}` : 'Sin resultados';
  $('#resList').innerHTML = hits.join('') || (ah.length ? '' : '<p class="empty">No encontramos coincidencias. Prueba con otras palabras o escríbenos.</p>');
});
