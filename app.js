const CATS = [
  {id:'empezar', ico:'🚀', t:'Primeros pasos', d:'Crea tu cuenta y conoce la plataforma.', faqs:[
    ['¿Cómo creo mi cuenta en Musa?','Ingresa a la plataforma, haz clic en “Crear cuenta” y completa tus datos con tu correo. Te enviaremos un enlace de confirmación.',true],
    ['¿Cómo accedo a mi curso?','Inicia sesión y entra a “Mis cursos”. Ahí verás todos los programas a los que tienes acceso.',true],
    ['¿Qué dispositivos puedo usar?','Musa funciona en computadora, tablet y celular desde cualquier navegador actualizado.']
  ]},
  {id:'cuenta', ico:'👤', t:'Mi cuenta', d:'Contraseña, correo y datos personales.', faqs:[
    ['Olvidé mi contraseña, ¿qué hago?','En la pantalla de inicio de sesión elige “¿Olvidaste tu contraseña?” y sigue las instrucciones enviadas a tu correo.',true],
    ['¿Cómo cambio mi correo o mis datos?','Desde “Mi perfil” puedes editar tus datos. Si necesitas cambiar el correo de acceso, escríbenos a soporte.'],
    ['¿Cómo elimino mi cuenta?','Solicítalo por correo a soporte@musa.la desde el email registrado y lo gestionaremos en un máximo de 5 días hábiles.']
  ]},
  {id:'licencias', ico:'🎟️', t:'Licencias y accesos', d:'Activación, vigencia y transferencias.', faqs:[
    ['¿Cómo activo mi licencia?','Ingresa el código recibido en “Activar licencia” dentro de tu perfil. El acceso se habilita al instante.',true],
    ['¿Cuánto dura mi acceso?','La vigencia depende del programa contratado y se muestra en la ficha de cada curso.'],
    ['¿Puedo transferir mi licencia a otra persona?','Las licencias son personales. Si necesitas reasignarla, contáctanos y evaluamos tu caso.']
  ]},
  {id:'aprendizaje', ico:'📚', t:'Cursos y aprendizaje', d:'Avance, evaluaciones y contenidos.', faqs:[
    ['¿Cómo se calcula mi avance?','El avance se actualiza cuando completas cada lección y actividad del curso.'],
    ['¿Cuántos intentos tengo en las evaluaciones?','Cada curso define sus intentos; lo verás indicado antes de iniciar la evaluación.'],
    ['El video no carga, ¿qué hago?','Revisa tu conexión, actualiza el navegador y desactiva extensiones de bloqueo. Si persiste, envíanos una captura.']
  ]},
  {id:'certificados', ico:'🏅', t:'Certificados', d:'Cómo obtenerlos y verificarlos.', faqs:[
    ['¿Cómo obtengo mi certificado?','Al completar el 100% del curso y aprobar las evaluaciones, el certificado se habilita en “Mis certificados”.',true],
    ['Mi nombre salió mal en el certificado','Corrige tu nombre en “Mi perfil” y escríbenos para que lo regeneremos.'],
    ['¿Cómo verifico un certificado?','Cada certificado incluye un código o QR que valida su autenticidad.']
  ]},
  {id:'pagos', ico:'💳', t:'Pagos y facturación', d:'Medios de pago y comprobantes.', faqs:[
    ['¿Qué medios de pago aceptan?','Tarjetas de crédito/débito y transferencia bancaria. Para empresas también ofrecemos facturación.'],
    ['¿Cómo solicito mi factura?','Envía tus datos de facturación a soporte@musa.la indicando el número de pedido.'],
    ['¿Puedo pedir un reembolso?','Evaluamos cada caso según los términos del programa. Escríbenos dentro de los primeros 7 días.']
  ]}
];

const $ = s => document.querySelector(s);
const esc = s => s.replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const norm = s => s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const item = (q,a,cat,hl) => {
  let qq = esc(q);
  if (hl) qq = qq.replace(new RegExp('('+hl.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')','ig'),'<mark>$1</mark>');
  return `<details><summary><span>${qq}${cat?`<span class="tagc">${esc(cat)}</span>`:''}</span></summary><div class="ans"><p>${esc(a)}</p></div></details>`;
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
