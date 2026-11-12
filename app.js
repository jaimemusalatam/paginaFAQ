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
$('#yr').textContent = new Date().getFullYear();

function show(id){
  const c = CATS.find(x=>x.id===id);
  $('#detTitle').textContent = c.ico+' '+c.t;
  $('#detDesc').textContent = c.d;
  $('#detList').innerHTML = c.faqs.map(f=>item(f[0],f[1])).join('');
  $('#categorias').hidden = $('#populares').hidden = true;
  $('#detalle').hidden = false;
  scrollTo({top:0});
}
$('#cats').addEventListener('click', e => { const b = e.target.closest('.cat'); if (b) show(b.dataset.id); });
$('#back').addEventListener('click', () => { $('#detalle').hidden = true; $('#categorias').hidden = $('#populares').hidden = false; });

$('#q').addEventListener('input', e => {
  const raw = e.target.value.trim(), q = norm(raw), on = q.length > 1;
  $('#resultados').hidden = !on;
  ['#categorias','#populares','#detalle'].forEach(s => { if (on) $(s).hidden = true; });
  if (!on){ $('#categorias').hidden = $('#populares').hidden = false; return; }
  const hits = CATS.flatMap(c => c.faqs.filter(f => norm(f[0]+' '+f[1]).includes(q)).map(f => item(f[0],f[1],c.t,raw)));
  $('#resTitle').textContent = hits.length ? `${hits.length} resultado${hits.length>1?'s':''}` : 'Sin resultados';
  $('#resList').innerHTML = hits.join('') || '<p class="empty">No encontramos coincidencias. Prueba con otras palabras o escríbenos.</p>';
});
