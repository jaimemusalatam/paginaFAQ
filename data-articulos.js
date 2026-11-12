/* Artículos del centro de ayuda de Musa.
   Contenido basado en las Guías Musa 01–06 (v02 · 2026). */
const ARTICULOS = [
{
  id:'cuenta-whatsapp-business', aud:'cliente', ico:'📱',
  t:'Crea tu cuenta de WhatsApp Business API',
  d:'Todo lo que tu equipo necesita preparar para que la línea de tu ruta de aprendizaje quede verificada y conectada a Musa.',
  para:'Administrador del Meta Business Manager · TI', cuando:'Antes del inicio del proyecto', guia:'Guía 01',
  body:`
<p>Tu ruta de aprendizaje vive dentro de WhatsApp. Para que eso funcione, tu organización necesita una cuenta de WhatsApp Business API: una línea profesional, verificada por Meta, que puede conectarse a Musa y enviar mensajes a gran escala. Este artículo te acompaña en ese proceso de principio a fin.</p>

<h2>Tres términos que vas a leer todo el tiempo</h2>
<dl>
<dt>Cuenta WABA</dt><dd>La versión profesional de WhatsApp para empresas. Es la que permite conectar chatbots y enviar mensajes masivos de forma segura.</dd>
<dt>Portafolio Comercial (Meta Business Manager)</dt><dd>El entorno digital donde tu empresa administra sus páginas, cuentas y demás activos de Meta.</dd>
<dt>Gupshup</dt><dd>El proveedor oficial de Meta (BSP) que aporta la infraestructura técnica para conectar tu portafolio comercial con Musa.</dd>
</dl>

<h2>¿Quién debe hacerlo?</h2>
<p>La configuración la realiza una persona con permisos de administrador del Meta Business Manager de tu organización. Normalmente es alguien de TI, de marketing digital o quien administre las redes corporativas.</p>

<h2>Requisitos críticos</h2>
<p>Estos puntos no son recomendaciones: si alguno falla, la activación se detiene o la cuenta puede ser cancelada por Meta más adelante.</p>
<ol>
<li><strong>Portafolio Comercial validado.</strong> Tu empresa debe estar verificada en Meta para poder escalar el uso de la línea sin restricciones. Si no lo está, Meta puede cancelar la cuenta y dejar el chatbot fuera de operación.</li>
<li><strong>Número de teléfono nuevo.</strong> Debe ser un número exclusivo para este fin, sin ninguna cuenta de WhatsApp activa. No sirve reutilizar el número de la central, de un ejecutivo o de un WhatsApp Business que ya esté en uso.</li>
<li><strong>Acceso de administrador.</strong> Quien realiza la vinculación debe ser administrador del Meta Business Manager. Además, una vez conectado, no debe eliminar el número del portafolio: eso interrumpe la operación del chatbot y obliga a rehacer toda la conexión.</li>
</ol>
<div class="note warn"><strong>Regla de Meta sobre el nombre.</strong> El nombre visible de la cuenta WABA debe coincidir con la identidad legal o comercial de la empresa. No se permiten emojis ni símbolos.</div>

<h2>Paso a paso</h2>
<ol class="steps">
<li><strong>Alineación institucional.</strong> Define internamente bajo qué Portafolio Comercial se creará la cuenta y con qué nombre visible aparecerá ante tus usuarios. Resolver esto antes evita rehacer la configuración después.</li>
<li><strong>Compra y resguardo del chip.</strong>
  <ul>
  <li>Adquiere una SIM física nueva, sin WhatsApp asociado.</li>
  <li>Tras validar el número, guarda el chip físico en un lugar seguro y bajo responsabilidad de una persona identificada.</li>
  <li>Recarga la línea según la política de tu operador para que no la den de baja (en Perú, cada 2 meses).</li>
  </ul></li>
<li><strong>Vinculación con Gupshup.</strong>
  <ul>
  <li>Inicia sesión en tu Facebook personal, el que tiene permisos de administrador comercial.</li>
  <li>Abre el enlace de Gupshup que te comparte el equipo Musa y elige «Crea una cuenta de WhatsApp Business».</li>
  <li>Ingresa el código SMS que llega al chip nuevo.</li>
  </ul></li>
</ol>

<h2>¿Qué pasa después?</h2>
<p>Con la cuenta creada y verificada, el equipo Musa conecta tu línea a la plataforma y te entrega los accesos a la Suite. A partir de ahí continúas con el artículo <a href="articulo.html#tu-dashboard-musa">Tu dashboard Musa</a>.</p>

<h2>Cuida tu línea en el tiempo</h2>
<p>La cuenta WABA no es un trámite de una sola vez. Estos cuatro hábitos evitan casi todas las caídas de servicio que vemos en campo.</p>
<ul>
<li><strong>Mantén la línea activa.</strong> Recarga según la política de tu operador (en Perú, cada 2 meses). Una línea dada de baja obliga a repetir todo el proceso de alta.</li>
<li><strong>No elimines el número.</strong> Ni del Business Manager al hacer limpieza de activos, ni al dar de baja a un colaborador.</li>
<li><strong>Ten más de un administrador.</strong> Si la única persona con acceso deja la organización, recuperar el control toma tiempo.</li>
<li><strong>Guarda el chip físico.</strong> Meta puede solicitar una reverificación por SMS en cualquier momento.</li>
</ul>`
},
{
  id:'buenas-practicas-despliegue', aud:'cliente', ico:'🚀',
  t:'Buenas prácticas de despliegue',
  d:'El plan de comunicación, el kit gráfico y el checklist que sostienen una alta tasa de adopción y finalización.',
  para:'Líder del programa · RRHH · Comunicación interna', cuando:'Una semana antes del lanzamiento', guia:'Guía 02',
  body:`
<h2>La comunicación define el resultado</h2>
<p>La plataforma funciona sola; la adopción no. En los despliegues con mejores tasas de finalización, el cliente comunicó antes, durante y al cierre de la capacitación.</p>
<table>
<thead><tr><th>Lo que sí funciona</th><th>Lo que no</th></tr></thead>
<tbody><tr><td>Anunciar con anticipación, dar un solo mensaje claro por fase y apoyarse en líderes que ya tienen la confianza del equipo.</td><td>Lanzar el número sin aviso previo, saturar con varios comunicados el mismo día o dejar la difusión solo en manos de un correo masivo.</td></tr></tbody>
</table>
<div class="note"><strong>Una sola instrucción para el usuario final.</strong> Guardar el número del chatbot como contacto y escribir únicamente «Hola». Todo lo demás lo guía el chat. Repite esa instrucción sin variaciones en cada pieza y cada mensaje.</div>

<h2>Las tres fases de la campaña</h2>
<h3>Fase 1 · Pre-lanzamiento (3 a 5 días antes)</h3>
<p><strong>Objetivo:</strong> romper la resistencia al cambio y anunciar la capacitación sin saturar.</p>
<p><strong>Mensaje clave:</strong> «Llega una nueva forma de aprender desde tu celular, sin descargar apps y a tu propio ritmo».</p>
<p><strong>Pieza recomendada:</strong> Pieza 1, Conoce tu nueva ruta de aprendizaje.</p>
<h3>Fase 2 · Lanzamiento oficial (día 1)</h3>
<p><strong>Objetivo:</strong> generar la primera interacción masiva en el chatbot.</p>
<p><strong>Mensaje clave:</strong> «¡Tu curso ya está activo! Guarda el número y escribe únicamente Hola».</p>
<p><strong>Piezas recomendadas:</strong> Pieza 2, Tips para tu ruta de aprendizaje, junto con la Pieza 3, Instrucciones de registro.</p>
<h3>Fase 3 · Seguimiento y cierre (hasta el cierre)</h3>
<p><strong>Objetivo:</strong> mantener el ritmo de avance, reactivar a quienes quedaron a medias y promover la descarga del certificado antes de la fecha límite.</p>
<p><strong>Mensaje clave:</strong> «¡Estás a un paso de completar tu ruta! Finaliza tu último módulo, aprueba la evaluación y descarga tu certificado directamente en el chat».</p>
<p><strong>Canales de refuerzo:</strong></p>
<ul>
<li><strong>Notificaciones Musa:</strong> recordatorios directos al WhatsApp del colaborador para impulsar el avance (servicio adicional). Mira <a href="articulo.html#usar-notificaciones">Cómo usar tus notificaciones</a>.</li>
<li><strong>Comunicación interna:</strong> correo masivo, grupos de trabajo o anuncios del líder de campo, según lo que muestren los reportes de avance.</li>
</ul>

<h2>Tu kit gráfico en Canva</h2>
<p>Musa pone a disposición de tu equipo el Kit Gráfico Oficial de Despliegue en un enlace editable (pídelo a tu contacto Musa). Son cuatro piezas, una por momento del despliegue.</p>
<ol>
<li>Abre el enlace del kit. Se abrirá la vista previa en Canva.</li>
<li>Crea tu propia copia editable con «Usar plantilla para un diseño nuevo». Así guardas una copia limpia en tu cuenta sin modificar el archivo original, y el kit sigue disponible para el resto del equipo.</li>
<li>Personaliza cada pieza según la tabla y difúndelas en el momento que corresponde a su fase.</li>
</ol>
<table>
<thead><tr><th>Pieza</th><th>Cuándo se usa</th><th>Qué debes personalizar</th></tr></thead>
<tbody>
<tr><td>1. Ruta de aprendizaje</td><td>Fase 1 · Pre-lanzamiento. Da a conocer la ruta y sus fechas.</td><td>Fechas de inicio y cierre, y logos de tu organización.</td></tr>
<tr><td>2. Tips operativos</td><td>Fase 2 · Lanzamiento. Guía rápida con el número directo.</td><td>El número oficial del chatbot.</td></tr>
<tr><td>3. Registro de curso nuevo</td><td>Fase 2 · Lanzamiento. Onboarding con código QR.</td><td>El QR del bot. Enfatiza el registro con nombre completo.</td></tr>
<tr><td>4. Autoayuda y soporte</td><td>Fase 3 · Seguimiento. Destrabar sesiones.</td><td>Adapta o elimina la palabra «Salir» si tu curso es de ruta lineal.</td></tr>
</tbody>
</table>
<div class="note warn"><strong>Revisa el tipo de ruta antes de difundir la Pieza 4.</strong> En rutas lineales la palabra «Salir» no está disponible. Publicarla genera intentos fallidos y consultas innecesarias a tu mesa de ayuda.</div>

<h2>Líderes y embajadores de campo</h2>
<p>En equipos operativos o distribuidos en territorio, la diferencia entre un 30 % y un 70 % de finalización suele estar en las personas que acompañan, no en el canal.</p>
<ul>
<li><strong>Facilitadores del onboarding:</strong> motivan el registro inicial y guían a sus compañeros en el uso básico de WhatsApp para la capacitación.</li>
<li><strong>Canal interno de consultas:</strong> acompañan al usuario resolviendo dudas sobre fechas del programa, avances o políticas internas de la organización.</li>
</ul>
<h3>¿Cómo prepararlos?</h3>
<ul>
<li>Compártele a cada líder el artículo <a href="articulo.html#soporte-y-chat">Soporte y qué hacer si el chat no responde</a>, con el protocolo correspondiente.</li>
<li>Dales el cronograma con las fechas de corte antes de que lo reciba el resto del equipo.</li>
<li>Acuerda con ellos un canal único donde reportar casos que no puedan resolver.</li>
</ul>

<h2>Checklist de despliegue</h2>
<h3>Antes del lanzamiento</h3>
<ul class="check">
<li>Cuenta WABA creada y verificada.</li>
<li>Accesos a la Suite Musa entregados y probados por el equipo.</li>
<li>Tipo de ruta confirmado: libre o lineal.</li>
<li>Kit de Canva copiado y personalizado con fechas, logos, número y QR.</li>
<li>Líderes o embajadores identificados e informados.</li>
<li>Base de usuarios lista, con celulares en formato internacional.</li>
<li>Pieza 1 difundida entre 3 y 5 días antes.</li>
</ul>
<h3>Día del lanzamiento</h3>
<ul class="check">
<li>Piezas 2 y 3 difundidas por los canales internos.</li>
<li>Número del chatbot comunicado con la instrucción de guardarlo como contacto.</li>
<li>Primera revisión del dashboard al cierre del día.</li>
</ul>
<h3>Durante el programa</h3>
<ul class="check">
<li>Revisión semanal de avance en la vista Estudiantes.</li>
<li>Notificaciones de seguimiento coordinadas con anticipación.</li>
<li>Pieza 4 disponible para quienes reporten problemas en el chat.</li>
<li>Recordatorio de cierre antes de la fecha límite de certificación.</li>
</ul>`
},
{
  id:'tu-dashboard-musa', aud:'cliente', ico:'📊',
  t:'Tu dashboard Musa',
  d:'Cómo entrar a la Suite, qué mide cada indicador y para qué sirve cada vista del panel.',
  para:'Equipo del cliente con acceso a la Suite', cuando:'Al recibir tus accesos', guia:'Guía 03',
  body:`
<h2>Entra a la Suite</h2>
<p>La Suite Musa es donde tu equipo sigue el avance de la ruta de aprendizaje, audita conversaciones y envía notificaciones. Se abre desde cualquier navegador, sin instalar nada.</p>
<ul>
<li><strong>Dirección:</strong> suite.musa.la</li>
<li><strong>Usuario:</strong> el correo electrónico que registraste con el equipo Musa.</li>
<li><strong>Contraseña:</strong> una temporal que te entrega tu contacto Musa. El sistema te pedirá cambiarla en el primer ingreso.</li>
</ul>
<div class="note warn"><strong>Al crear tu nueva contraseña, evita el símbolo #.</strong> Ese carácter genera errores de inicio de sesión. Puedes usar cualquier otro símbolo sin problema.</div>

<h2>¿Cómo está organizada?</h2>
<p>El menú lateral izquierdo agrupa todo en tres bloques.</p>
<ul>
<li><strong>Dashboard:</strong> General, Notificaciones, Campañas, Cursos, Estudiantes y Tracking. Es tu vista del día a día.</li>
<li><strong>Reportes:</strong> donde quedan guardados los archivos que descargas desde la Suite.</li>
<li><strong>Configuración:</strong> Permisos, Usuarios, Roles y Notificaciones. Aquí se define quién accede al curso y se preparan los envíos.</li>
</ul>

<h2>Vista General</h2>
<p>Es la primera pantalla al ingresar y responde una pregunta: ¿cómo va el programa hoy?</p>
<ul>
<li><strong>Finalización:</strong> porcentaje promedio de avance y conclusión de los estudiantes.</li>
<li><strong>Promedio:</strong> cantidad de microcursos tomados por usuario.</li>
<li><strong>Estudiantes:</strong> usuarios activos en los últimos 30 días.</li>
<li><strong>Gráfico de actividad:</strong> mide las interacciones diarias.</li>
</ul>
<p>El gráfico cruza tres series: estudiantes que interactuaron, estudiantes registrados y las notificaciones enviadas. Las barras te permiten ver el efecto de cada envío sobre la actividad de los días siguientes.</p>
<div class="note"><strong>Sobre el indicador de satisfacción.</strong> El NPS se mide directamente dentro del chat de WhatsApp, no en el bloque general del dashboard.</div>

<h2>Vista Notificaciones</h2>
<p>El histórico de todo lo que se ha enviado desde tu cuenta, con su alcance real.</p>
<ul>
<li><strong>Alcance:</strong> número de celulares definidos para recibir la notificación.</li>
<li><strong>Tipo de notificación:</strong> Seguimiento, Bienvenida u Otro. Sirve para categorizar y entender el objetivo de cada comunicación.</li>
<li><strong>Alcance siguientes 24 horas:</strong> usuarios que interactuaron con el chatbot después de recibir la notificación. Es el indicador que te dice si el mensaje funcionó.</li>
<li><strong>Acciones:</strong> permite descargar la lista de celulares a los que se dirigió el envío.</li>
</ul>
<p>Esta vista es solo el histórico. El proceso completo de creación, aprobación y envío está en <a href="articulo.html#usar-notificaciones">Cómo usar tus notificaciones</a>.</p>

<h2>Vista Estudiantes</h2>
<p>El detalle por persona dentro de una campaña específica.</p>
<ol>
<li>Ir a la pestaña Estudiantes.</li>
<li>Seleccionar la campaña vigente.</li>
<li>Buscar por número (sin el signo +).</li>
<li>Hacer clic en el ícono del ojo.</li>
</ol>
<ul>
<li><strong>Total de estudiantes:</strong> usuarios registrados y cursando en esa campaña.</li>
<li><strong>Avance global:</strong> promedio de avance y conclusión de los estudiantes.</li>
<li><strong>Tiempo promedio de estudio:</strong> tiempo real de interacción, calculado internamente omitiendo los periodos de inactividad. Considera interacciones desde un mínimo de 300 segundos.</li>
<li><strong>Tiempo total de estudio:</strong> la suma real de las interacciones de todos los estudiantes.</li>
</ul>
<div class="note"><strong>El tiempo de estudio tarda un día en actualizarse.</strong> Los usuarios que ingresaron hoy aparecerán con 0 minutos hasta el día siguiente. No es un error: es el ciclo de consolidación del dato.</div>

<h2>Vista Tracking</h2>
<p>Te permite auditar el chat en tiempo real y ver exactamente qué conversó un usuario con el bot. Es la vista que más usarás al atender un caso puntual.</p>
<ol>
<li>Ir a la pestaña Tracking.</li>
<li>Ampliar la fecha de búsqueda.</li>
<li>Ingresar el número del usuario para revisar su interacción en la bienvenida o en los cursos.</li>
</ol>
<div class="note warn"><strong>Dos ajustes que evitan búsquedas sin resultado.</strong> Amplía el filtro de fechas: viene configurado en 7 días por defecto, así que un usuario que interactuó antes no aparecerá. Y escribe el número en formato internacional, sin el signo + (por ejemplo, 51987654321).</div>

<h2>Vista Reportes</h2>
<p>Aquí se acumulan los reportes que descargas desde la Suite, para que no dependas del correo ni de la carpeta de descargas de una sola computadora. Para entender cada pestaña del archivo, consulta <a href="articulo.html#leer-tu-reporte">Cómo leer tu reporte Musa</a>.</p>

<h2>Configuración · Permisos</h2>
<p>Si tu ruta de aprendizaje está configurada para que solo accedan determinadas personas, esta es la vista donde agregas o quitas ese acceso, por celular o por documento de identidad.</p>
<div class="note warn"><strong>Si vas a cargar una lista completa.</strong> Usa la opción de archivo y sube un CSV sin encabezados ni columnas adicionales: una sola columna con los datos, nada más. Es el motivo más frecuente de cargas rechazadas.</div>

<h2>Configuración · Notificaciones</h2>
<p>Desde aquí se realizan los envíos. Al seleccionar una campaña puedes revisar el detalle de las notificaciones ya enviadas desde tu cuenta.</p>
<ul>
<li><strong>Lista de templates:</strong> muestra las plantillas ya aprobadas por Meta y disponibles para usar.</li>
<li><strong>Crear notificación:</strong> el formulario de envío.</li>
</ul>

<h2>Cápsulas en video</h2>
<p>Musa tiene seis recorridos cortos por la Suite, útiles para incorporar a alguien nuevo al equipo sin necesidad de una sesión en vivo: ingresar al dashboard y vista general, vista Estudiantes, vista Cursos, vista Tracking, reporte y buenas prácticas, y notificaciones. Pide los enlaces a tu contacto Musa.</p>`
},
{
  id:'leer-tu-reporte', aud:'cliente', ico:'📈',
  t:'¿Cómo leer tu reporte Musa?',
  d:'Qué contiene cada pestaña del archivo descargable y cómo calcular los indicadores del programa.',
  para:'Equipo del cliente con acceso a la Suite', cuando:'Durante el seguimiento del programa', guia:'Guía 04',
  body:`
<h2>¿Qué es el reporte Musa?</h2>
<p>Es el archivo que descargas desde la Suite y que contiene el detalle completo de tu programa, pestaña por pestaña. El dashboard te da la lectura rápida; el reporte te da el dato fino para cruzar con tus propios sistemas.</p>
<div class="note warn"><strong>Consideración crítica: solo se guarda la primera interacción.</strong> Si un usuario repasa o vuelve a tomar el curso, lo único que se actualiza en tiempo real es su constancia. La fecha de inicio y el progreso inicial permanecen tal como quedaron la primera vez. Un usuario que repitió el curso no aparecerá con fechas nuevas; no es un error de carga.</div>

<h3>¿Por qué las pestañas no suman lo mismo?</h3>
<p>Cada pestaña cuenta algo distinto, así que sus totales no tienen por qué coincidir.</p>
<ul>
<li><strong>Bienvenida</strong> cuenta personas que escribieron «Hola» y no completaron el registro. No aparecen en Estudiantes.</li>
<li><strong>Estudiantes</strong> cuenta personas únicas registradas. Es la cifra para saber cuántas personas tiene tu programa.</li>
<li><strong>Cursos</strong> cuenta inscripciones por curso. Si una persona toma tres microcursos, suma tres veces.</li>
</ul>
<p>Ejemplo: 200 estudiantes que toman en promedio 1,5 microcursos generan 300 inscripciones en la pestaña Cursos.</p>

<h2>Pestaña por pestaña</h2>
<h3>Bienvenida</h3>
<p>Reúne a los usuarios que solo iniciaron la interacción escribiendo «Hola», pero no completaron el registro, no aceptaron las políticas de privacidad o no comenzaron ningún curso formal. Se captura el nombre del perfil de WhatsApp, el teléfono y la fecha.</p>
<p><strong>Para qué la usas:</strong> es tu lista natural de recuperación. Son personas que ya mostraron intención y se quedaron a un paso.</p>
<h3>General</h3>
<p>Lista general de todos los números telefónicos registrados en la base, con el detalle de cada curso que tomaron.</p>
<h3>Estudiantes</h3>
<p>El detalle de los usuarios registrados en la base, con su información de avance. Una fila por persona.</p>
<h3>Cursos</h3>
<p>Visualización de los cursos a medida que los usuarios van ingresando, indicando inscritos, quiénes iniciaron, quiénes finalizaron y el porcentaje de progreso. Una persona inscrita en varios cursos aparece en cada uno.</p>
<h3>Respuestas</h3>
<p>Permite filtrar por curso para evaluar el desempeño. Comparte las mismas columnas de la pestaña General y, a partir de la columna AA, guarda las respuestas a las preguntas del curso.</p>
<p><strong>Para qué la usas:</strong> si muchas personas fallan la misma pregunta, casi siempre el problema está en el contenido previo, no en el grupo.</p>
<h3>Mía · Asistente IA</h3>
<p>Pestaña condicional. Se añade únicamente si tu ruta de aprendizaje cuenta con un asistente de inteligencia artificial, y permite visualizar las conversaciones del usuario con la IA.</p>

<h2>Los dos indicadores que miramos</h2>
<p>Con los datos del reporte puedes calcular las dos métricas con las que Musa evalúa un despliegue.</p>
<div class="formula"><strong>Tasa de finalización</strong> = NF ÷ NE × 100<br><span>NF: usuarios que finalizan al menos un curso. NE: usuarios que empiezan al menos un curso. De quienes empezaron, cuántos terminaron.</span></div>
<div class="formula"><strong>Enganche</strong> = NE ÷ NI × 100<br><span>NE: usuarios que empiezan al menos un curso. NI: usuarios que interactúan con Musa (escriben «Hola»). De quienes llegaron al chat, cuántos arrancaron un curso.</span></div>
<h3>¿Dónde encontrar cada dato?</h3>
<table>
<thead><tr><th>Dato</th><th>Cómo obtenerlo del reporte</th></tr></thead>
<tbody>
<tr><td>NI</td><td>Personas en la pestaña Estudiantes + personas en la pestaña Bienvenida.</td></tr>
<tr><td>NE</td><td>Personas en la pestaña Estudiantes con al menos un curso iniciado.</td></tr>
<tr><td>NF</td><td>Personas en la pestaña Estudiantes con al menos un curso completado.</td></tr>
</tbody>
</table>
<h3>¿Cómo leerlos juntos?</h3>
<ul>
<li><strong>Enganche alto, finalización baja:</strong> la convocatoria y el registro funcionaron, pero algo frena a la gente dentro del curso. Revisa la pestaña Respuestas y refuerza con notificaciones de seguimiento.</li>
<li><strong>Enganche bajo:</strong> la gente llega al chat pero no arranca. Usa la pestaña Bienvenida como lista de recuperación y revisa la difusión con las piezas de <a href="articulo.html#buenas-practicas-despliegue">Buenas prácticas de despliegue</a>.</li>
</ul>`
},
{
  id:'usar-notificaciones', aud:'cliente', ico:'🔔',
  t:'¿Cómo usar tus notificaciones?',
  d:'Del mensaje a la plantilla aprobada y del envío al resultado: el ciclo completo de una notificación Musa.',
  para:'Equipo del cliente con acceso a la Suite', cuando:'Al preparar cada envío', guia:'Guía 05',
  body:`
<h2>¿Qué son las notificaciones?</h2>
<p>Son mensajes que envías a tus usuarios dentro de la ruta de aprendizaje, con un objetivo concreto: que se registren, que retomen un curso o que descarguen su certificado antes de la fecha de cierre.</p>
<h3>¿Cómo se comportan en el chat?</h3>
<ul>
<li><strong>Llegan donde está el usuario.</strong> El mensaje aparece en el punto de la ruta en el que la persona se encuentra, sin interrumpir su progreso.</li>
<li><strong>No redireccionan ni modifican.</strong> La notificación no mueve al usuario de módulo ni cambia su estado dentro del curso.</li>
<li><strong>No tienen trazabilidad individual.</strong> No se registra el recorrido específico que hace cada persona a partir de la notificación. Lo que sí puedes medir es el alcance en las siguientes 24 horas, desde la vista Notificaciones del dashboard.</li>
</ul>

<h2>Tipos de notificación</h2>
<p>Recomendamos trabajar con una matriz estándar. Tener las plantillas aprobadas por adelantado te permite enviar el día que lo necesitas, sin esperar.</p>
<table>
<thead><tr><th>Tipo</th><th>Objetivo</th><th>Ejemplo de mensaje</th></tr></thead>
<tbody>
<tr><td>Registro pendiente</td><td>Cerrar el registro de quienes iniciaron el chat y no lo completaron.</td><td>Hola [Nombre]. Tu registro en el programa [Nombre del Programa] está pendiente. Puedes completarlo desde este chat. <em>Botón: Completar</em></td></tr>
<tr><td>Recordatorio de avance</td><td>Informar el estado del curso a quien lo dejó a medias.</td><td>Hola [Nombre]. Tu avance en el microcurso [Nombre del Curso] quedó en [X] %. Puedes continuar desde este chat. <em>Botón: Continuar</em></td></tr>
<tr><td>Aviso de cierre</td><td>Comunicar la fecha límite del programa.</td><td>Hola [Nombre]. El programa [Nombre del Programa] cierra el [fecha]. Al aprobar la evaluación podrás descargar tu constancia desde este chat.</td></tr>
</tbody>
</table>
<div class="note warn"><strong>No uses una notificación como primer contacto.</strong> Si el usuario todavía no conoce el número, un mensaje que le llega sin aviso se percibe como spam. Basta con que unos cuantos lo reporten o lo bloqueen para que la salud de tu cuenta WABA caiga y Meta reduzca tu límite de envíos diarios. Recuperar ese nivel toma semanas. La bienvenida se da dentro del chat, cuando la persona escribe «Hola» por primera vez; lo que abre la puerta es la campaña de difusión. Las notificaciones vienen después, cuando el número ya está guardado como contacto.</div>
<p>Con las tres plantillas de la tabla cubres el ciclo de un despliegue estándar, y las tres se dirigen a personas que ya interactuaron con el chatbot.</p>

<h2>¿Cómo redactar tu mensaje?</h2>
<p>El equipo Musa revisa y carga cada plantilla, así que del trámite con Meta no tienes que preocuparte. Lo que sí depende de ti es el texto: escrito en tono de procedimiento, la aprobación sale rápido y sin observaciones. La idea es simple: informas un estado y ofreces la acción que corresponde. Nada más.</p>
<ul>
<li>Nombra el curso o el programa. El mensaje debe conectarse con algo que la persona ya empezó.</li>
<li>Enuncia un hecho: un avance, una fecha, un estado pendiente.</li>
<li>Usa frases cortas y en tono neutro. «Tu avance quedó en 40 %», no «¡Estás a un paso!».</li>
<li>Sin emojis, o máximo uno. Una cadena de emojis hace que el mensaje se lea como publicidad.</li>
<li>Sin urgencia fabricada: nada de «solo hoy» ni «última oportunidad».</li>
<li>Un solo propósito por mensaje. Si mezclas un aviso con una promoción, deja de ser un aviso.</li>
<li>Botones descriptivos: «Continuar», «Ver mi avance». Nunca «Aprovecha» ni «No te lo pierdas».</li>
</ul>
<table>
<thead><tr><th>Así no</th><th>Así sí</th></tr></thead>
<tbody><tr><td>¡Hola [Nombre]! No te quedes fuera. ¡Termina hoy tu curso y llévate tu certificado! Solo te tomará 1 minuto.</td><td>Hola [Nombre]. Tu avance en el microcurso [Nombre del Curso] quedó en 40 %. Puedes continuar desde este chat.</td></tr></tbody>
</table>
<div class="note"><strong>Si tienes dudas, mándanos el borrador igual.</strong> El equipo Musa ajusta la redacción antes de cargar la plantilla. Es preferible que nos escribas la idea a que el envío se retrase por una corrección de último momento.</div>

<h2>Especificaciones técnicas</h2>
<p>Además del contenido, estos límites de formato aplican a toda notificación. Fuera de ellos, la plantilla se rechaza o se ve mal en el celular del usuario.</p>
<table>
<thead><tr><th>Elemento</th><th>Límite</th></tr></thead>
<tbody>
<tr><td>Texto</td><td>Máx. 300 caracteres. Sin emojis o, como máximo, uno.</td></tr>
<tr><td>Botones interactivos</td><td>Máx. 20 caracteres, espacios incluidos.</td></tr>
<tr><td>Imágenes</td><td>PNG o JPEG, 2 MB. Resolución sugerida de 700 × 700 px.</td></tr>
<tr><td>Videos</td><td>Máx. 12 MB por archivo.</td></tr>
</tbody>
</table>
<p>Para garantizar el cumplimiento de las políticas de aprobación de Meta, el equipo Musa se reserva el derecho de realizar ajustes menores de redacción, ortografía o adecuación de emojis en los mensajes propuestos, sin alterar el objetivo de la comunicación.</p>

<h2>Proceso y tiempos de aprobación</h2>
<p>El equipo Musa acompaña la aprobación de tus notificaciones, pero los tiempos de Meta no son negociables. Planifica hacia atrás desde la fecha en que quieres enviar.</p>
<ol class="steps">
<li><strong>Comparte tu mensaje con el equipo Musa.</strong> Envía el texto, el botón y la pieza gráfica con al menos un día hábil de anticipación.</li>
<li><strong>Revisión y carga de la plantilla.</strong> El equipo ajusta lo necesario para cumplir las políticas y carga la plantilla.</li>
<li><strong>Aprobación de Meta.</strong> Meta toma un día hábil para habilitar la plantilla.</li>
<li><strong>Envío.</strong> Una vez aprobada, la plantilla queda disponible en tu lista de templates y puedes reutilizarla cuando lo necesites.</li>
</ol>
<div class="note warn"><strong>Cuenta dos días hábiles, no dos días.</strong> Una notificación solicitada un viernes por la tarde difícilmente estará lista antes del martes. Si tu envío depende de una fecha de cierre, solicita las plantillas al inicio del programa.</div>

<h2>¿Cómo enviar una notificación?</h2>
<p>Desde Configuración › Notificaciones, con la plantilla ya aprobada, el formulario de envío tiene cinco campos.</p>
<ol>
<li><strong>Nombre de la notificación.</strong> Un nombre interno, solo para tu organización. Por ejemplo: Comunicado_Marzo.</li>
<li><strong>Plantilla.</strong> Selecciona la plantilla aprobada por Meta que deseas enviar.</li>
<li><strong>Tipo de envío.</strong> Define si el propósito es Bienvenida, Seguimiento u Otro. Esta categoría es la que después te permite filtrar el histórico.</li>
<li><strong>Destinatarios.</strong> Sube tu lista CSV. Los celulares deben estar en formato internacional, sin el signo + (por ejemplo, 51987654321).</li>
<li><strong>Archivo adjunto.</strong> Adjunta el recurso gráfico que acompaña a la notificación, en PNG o JPEG y hasta 2 MB. Antes de subirlo, revisa que el nombre del archivo no tenga tildes ni espacios.</li>
</ol>

<h2>Buenas prácticas de envío</h2>
<p>Tres reglas que evitan la mayoría de los envíos fallidos. La primera es la que más veces detiene un envío.</p>
<h3>1. Revisa el nombre del archivo de imagen</h3>
<p>Es el error que más envíos frena, y el más difícil de detectar porque no siempre avisa. Si el nombre del archivo lleva tildes, eñes, espacios o cualquier carácter especial, la notificación no se envía.</p>
<table>
<thead><tr><th>Así no se envía</th><th>Así sí</th></tr></thead>
<tbody>
<tr><td>notificación café.png</td><td>notificacion_cafe.png</td></tr>
<tr><td>promoción día 1.png</td><td>promocion_dia_1.png</td></tr>
<tr><td>bienvenida (final).png</td><td>bienvenida_final.png</td></tr>
</tbody>
</table>
<p>La regla es simple: solo letras sin tilde, números y guiones bajos. Renombra el archivo en tu computadora antes de subirlo, no después de que el envío falle. Aplica el mismo criterio al nombre de tu CSV de destinatarios, aunque ahí el riesgo es menor.</p>
<div class="note warn"><strong>Cuidado al descargar piezas desde Canva o el correo.</strong> Estas herramientas suelen nombrar el archivo con el título del diseño, que casi siempre trae tildes y espacios. Revisa el nombre cada vez, incluso si la pieza es la misma de la semana pasada.</div>
<h3>2. Divide los envíos masivos</h3>
<p>Programa grupos de máximo 2 000 usuarios, con 30 minutos de diferencia entre uno y otro. Meta maneja un límite de envíos por cada 24 horas según el nivel de salud de tu cuenta, y respetar ese ritmo lo protege.</p>
<h3>3. Revisa el formato de los teléfonos</h3>
<p>Siempre en formato internacional completo dentro del CSV. Un número sin código de país no recibe el mensaje, y no genera un error visible.</p>
<h3>Después del envío</h3>
<p>Revisa el alcance en las siguientes 24 horas en la vista Notificaciones del dashboard, y compáralo entre un envío y otro.</p>`
},
{
  id:'soporte-y-chat', aud:'cliente', ico:'🛟',
  t:'Soporte y qué hacer si el chat no responde',
  d:'A quién escribir, el protocolo de tres niveles cuando el chat se detiene y el glosario que tu equipo necesita a la mano.',
  para:'Todo el equipo del cliente · Líderes de campo', cuando:'Durante todo el programa', guia:'Guía 06',
  body:`
<h2>¿Dónde pedir ayuda?</h2>
<p>Cada tipo de consulta tiene un camino distinto. Elegir el correcto es la diferencia entre resolver en minutos o esperar un día.</p>
<div class="note"><strong>Estos canales son para tu equipo, no para los usuarios finales.</strong> El número y el correo de soporte Musa atienden a las personas de tu organización que administran el programa. Los estudiantes resuelven sus dudas dentro del propio chat de WhatsApp o con sus líderes internos.</div>
<ul>
<li><strong>Canal principal · Ticket desde el dashboard.</strong> El botón «Crear Ticket de Soporte», al pie del menú lateral de la Suite, es el canal principal para casos técnicos: un número que no responde, una carga rechazada, un dato que no cuadra. Queda registrado y tiene seguimiento, así que es el que deja trazabilidad de tu caso.</li>
<li><strong>WhatsApp · asistente de soporte con IA: <a href="https://wa.me/51989691266" target="_blank" rel="noopener">+51 989 691 266</a>.</strong> Escríbele para resolver dudas de curso, certificado y datos de registro; si no puede resolver tu caso, lo deriva al equipo.</li>
<li><strong>Correo: soporte@musa.la.</strong> Para consultas del equipo administrador del programa.</li>
<li><strong>Temas del programa · Tu contacto Musa.</strong> Para temas del programa antes que técnicos: fechas, alcance, nuevas campañas o coordinación de notificaciones.</li>
</ul>
<p><strong>Dentro de tu organización.</strong> Las dudas del usuario final sobre fechas, políticas internas o su propio avance se resuelven con los líderes o embajadores de campo. Ellos son quienes deberían tener a mano el protocolo de la siguiente sección.</p>
<div class="note"><strong>Un tiempo que sí está definido.</strong> La aprobación de notificaciones toma un día hábil de Musa más un día hábil de Meta. Los demás tiempos de respuesta se encuentran en función de los tiempos contratados.</div>

<h2>Si el chat no responde</h2>
<p>Protocolo de tres niveles. Empieza siempre por el primero: la mayoría de los casos se resuelven ahí, sin escalar.</p>
<h3>Nivel 1 · Acciones rápidas en el chat</h3>
<table>
<thead><tr><th>Qué está pasando</th><th>Qué debe hacer el usuario</th></tr></thead>
<tbody>
<tr><td>Es su primera interacción: escribió «Hola» y no hay respuesta tras 60 segundos.</td><td>Aguardar un minuto e intentar escribir «Hola» nuevamente.</td></tr>
<tr><td>El chat se detuvo en medio de una lección.</td><td>Reenviar el último mensaje, escribiendo directamente en el chat la palabra que aparece dentro del botón.</td></tr>
</tbody>
</table>
<h3>Nivel 2 · Palabras de autogestión</h3>
<p>Si el Nivel 1 no restablece la conversación, el usuario puede enviar estas palabras clave. Funcionan distinto, así que conviene conocer bien cada una.</p>
<table>
<thead><tr><th>Palabra</th><th>Qué hace</th><th>Cuándo se puede usar</th></tr></thead>
<tbody>
<tr><td><code>Salir</code></td><td>Regresa al usuario al menú principal para seleccionar otro curso.</td><td>Solo en capacitaciones con menú abierto o multicurso. No está disponible en rutas lineales.</td></tr>
<tr><td><code>resetbot</code></td><td>Reinicia la sesión de la lección activa y el proceso de registro. Sirve para destrabar la conversación o corregir datos personales, como el nombre completo, antes de que se emita el certificado.</td><td>Debe escribirse una vez que el usuario ya ingresó a un curso específico. No funciona desde el menú principal.</td></tr>
</tbody>
</table>
<div class="note warn"><strong>Salir sin haber terminado tiene un costo.</strong> Si el usuario no completó el curso ni generó su constancia antes de salir, deberá realizar el curso completo de nuevo para poder certificarse.</div>
<h3>Nivel 3 · Reinicio técnico por soporte Musa</h3>
<p>Si el inconveniente persiste después de las palabras de autogestión, el equipo de Soporte Técnico de Musa puede realizar una revisión y un reinicio del número. Este es el momento de crear el ticket.</p>

<h2>Rutas lineales y rutas con menú</h2>
<p>El tipo de ruta que configuraste cambia por completo cómo se atiende un caso. Verifica cuál es la tuya antes de dar una indicación a un usuario.</p>
<h3>Ruta lineal o secuencial</h3>
<ul>
<li>El estudiante debe finalizar los cursos en orden para poder avanzar al siguiente.</li>
<li>La palabra «Salir» no está disponible, porque no hay menú secundario.</li>
<li>Usar <code>resetbot</code> dentro del curso, o un reinicio por soporte desde la base de datos, borra el progreso activo. El usuario deberá realizar nuevamente todos los microcursos desde el inicio para obtener su certificado.</li>
</ul>
<h3>Ruta con menú o libre</h3>
<ul>
<li>El estudiante elige qué cursos tomar y en qué orden.</li>
<li>Salir de un curso antes de finalizarlo implica repasarlo completo desde el principio al reingresar, para rendir la evaluación y generar la constancia.</li>
<li>Para aplicar <code>resetbot</code>, el usuario debe estar dentro del curso, no en la vista de menú.</li>
</ul>
<div class="note warn"><strong>Antes de indicar resetbot en una ruta lineal.</strong> Confirma con el usuario cuánto ha avanzado. Si está cerca del final, muchas veces conviene escalar el caso a soporte antes que perder todo el progreso.</div>

<h2>Preguntas frecuentes del equipo de campo</h2>
<p>Estas respuestas puedes copiarlas tal cual a tus canales internos.</p>
<h3>¿Qué son los microcursos Musa?</h3>
<p>Son microcursos de capacitación interactiva que se realizan directamente a través de WhatsApp. La ruta de aprendizaje de tu campaña puede estructurarse de dos maneras: ruta libre (el estudiante cuenta con un menú para elegir qué cursos tomar y en qué orden) o ruta lineal (el estudiante debe finalizar obligatoriamente los cursos en orden secuencial).</p>
<h3>¿Cómo inicio mis microcursos?</h3>
<p>Guarda el número de WhatsApp del chatbot como contacto en tu celular. Escribe únicamente la palabra «Hola» para iniciar la interacción; no te preocupes si la respuesta inicial toma unos segundos en cargar. Completa con cuidado los campos de tu registro: de ahí salen los datos con los que se emitirá tu constancia.</p>
<h3>¿Cómo recibo mis constancias?</h3>
<p>Llegan directamente al chat de la ruta de aprendizaje, como un enlace de descarga.</p>
<h3>¿Puedo cambiar mi nombre después de registrarme?</h3>
<p>Sí, mientras no se haya emitido el certificado. Estando dentro de un curso, escribe <code>resetbot</code> para reiniciar el proceso de registro y corregir tus datos.</p>

<h2>Glosario</h2>
<dl>
<dt>Licencia</dt><dd>Un número de celular que interactúa y está realizando los cursos de la ruta de aprendizaje.</dd>
<dt>Campaña</dt><dd>Conjunto de microcursos activos conectados a una cuenta WABA. Se pueden tener varias campañas activas conectadas a diferentes números de celular.</dd>
<dt>Cuenta WABA</dt><dd>La versión profesional de WhatsApp para empresas, la que permite conectar chatbots y enviar mensajes masivos de forma segura.</dd>
<dt>Portafolio Comercial</dt><dd>El Meta Business Manager: el entorno donde tu empresa administra sus páginas, cuentas y activos de Meta.</dd>
<dt>Gupshup</dt><dd>El proveedor oficial de Meta que aporta la infraestructura para conectar tu portafolio comercial con Musa.</dd>
<dt>Template o plantilla</dt><dd>Mensaje preaprobado por Meta que se usa como base de una notificación.</dd>
<dt>Ruta de aprendizaje</dt><dd>El recorrido de microcursos que sigue un usuario dentro del chat.</dd>
<dt>Constancia</dt><dd>El certificado que el usuario descarga desde el chat al completar un curso y aprobar su evaluación.</dd>
</dl>`
},
{
  id:'iniciar-microcursos', aud:'usuario', ico:'🚀',
  t:'¿Cómo iniciar tus microcursos y recibir tu constancia?',
  d:'Guarda el número, escribe «Hola», completa tu registro y descarga tu constancia desde el chat.',
  para:'Estudiantes', cuando:'Al empezar tu curso', guia:'Guía para estudiantes',
  body:`
<p>Tu capacitación se hace por WhatsApp, a tu propio ritmo y sin descargar ninguna aplicación. Estos son los pasos para empezar y para recibir tu constancia al terminar.</p>

<h2>¿Qué son los microcursos Musa?</h2>
<p>Son microcursos de capacitación interactiva que se realizan directamente por WhatsApp. Según tu programa, tu ruta puede ser de dos tipos:</p>
<ul>
<li><strong>Ruta libre:</strong> tienes un menú para elegir qué cursos tomar y en qué orden.</li>
<li><strong>Ruta lineal:</strong> debes terminar los cursos en orden para poder avanzar al siguiente.</li>
</ul>

<h2>¿Cómo empezar?</h2>
<ol class="steps">
<li><strong>Guarda el número del chatbot.</strong> Agrégalo como contacto en tu celular para tenerlo a la mano.</li>
<li><strong>Escribe únicamente «Hola».</strong> No te preocupes si la respuesta inicial toma unos segundos en cargar.</li>
<li><strong>Completa con cuidado tu registro.</strong> De ahí salen los datos con los que se emitirá tu constancia, así que escribe tu nombre completo.</li>
<li><strong>Toma tus cursos y aprueba la evaluación.</strong> El chat te guía en cada lección.</li>
</ol>

<h2>¿Cómo recibes tu constancia?</h2>
<p>La constancia llega directamente al chat de tu ruta de aprendizaje, como un enlace de descarga, cuando completas el curso y apruebas la evaluación.</p>
<div class="note warn"><strong>Si no terminas el curso, no se genera tu constancia.</strong> Si sales sin completar el curso ni generar tu constancia, deberás realizar el curso completo de nuevo para poder certificarte.</div>

<h2>Si tu nombre salió mal</h2>
<p>Puedes cambiarlo mientras no se haya emitido el certificado. Estando dentro de un curso, escribe <code>resetbot</code> para reiniciar el proceso de registro y corregir tus datos.</p>

<h2>Si el chat se detiene</h2>
<p>Revisa el artículo <a href="articulo.html#si-el-chat-no-responde">Qué hacer si el chat no responde</a>.</p>

<h2>¿Tienes dudas sobre tu curso?</h2>
<div class="note"><strong>¿Tienes una duda?</strong> Pregúntale al chatbot de soporte Musa por WhatsApp: <a href="https://wa.me/51989691266" target="_blank" rel="noopener">+51 989 691 266</a>.</div>

<h2>Dudas sobre fechas o tu avance</h2>
<p>Las dudas sobre fechas, políticas internas o tu propio avance se resuelven con los líderes o embajadores de campo de tu organización.</p>`
},
{
  id:'si-el-chat-no-responde', aud:'usuario', ico:'💬',
  t:'¿Qué hacer si el chat no responde?',
  d:'Pasos para destrabar la conversación, qué hacen las palabras «Salir» y «resetbot» y cuándo pedir ayuda.',
  para:'Estudiantes', cuando:'Cuando el chat se demora o se detiene', guia:'Guía para estudiantes',
  body:`
<p>Si el chat se demora o deja de responder, sigue estos pasos en orden. Empieza siempre por el primero: la mayoría de los casos se resuelven ahí.</p>

<h2>Paso 1 · Acciones rápidas</h2>
<table>
<thead><tr><th>Qué está pasando</th><th>Qué hacer</th></tr></thead>
<tbody>
<tr><td>Es tu primera vez: escribiste «Hola» y no hay respuesta tras 60 segundos.</td><td>Espera un minuto e intenta escribir «Hola» nuevamente.</td></tr>
<tr><td>El chat se detuvo en medio de una lección.</td><td>Reenvía el último mensaje, escribiendo directamente en el chat la palabra que aparece dentro del botón.</td></tr>
</tbody>
</table>

<h2>Paso 2 · Palabras que puedes escribir tú</h2>
<p>Si el paso 1 no funcionó, puedes escribir estas palabras en el chat. Funcionan distinto, así que léelas con atención.</p>
<table>
<thead><tr><th>Palabra</th><th>Qué hace</th><th>Cuándo puedes usarla</th></tr></thead>
<tbody>
<tr><td><code>Salir</code></td><td>Te regresa al menú principal para elegir otro curso.</td><td>Solo en capacitaciones con menú abierto o varios cursos. No está disponible en rutas lineales.</td></tr>
<tr><td><code>resetbot</code></td><td>Reinicia la lección activa y el registro. Sirve para destrabar la conversación o corregir tu nombre antes de que se emita el certificado.</td><td>Debes estar dentro de un curso. No funciona desde el menú principal.</td></tr>
</tbody>
</table>
<div class="note warn"><strong>Salir sin haber terminado tiene un costo.</strong> Si no completaste el curso ni generaste tu constancia antes de salir, deberás realizar el curso completo de nuevo para poder certificarte.</div>
<div class="note warn"><strong>Cuidado con resetbot en una ruta lineal.</strong> En una ruta lineal, <code>resetbot</code> borra tu progreso activo y tendrás que repetir todos los microcursos desde el inicio. Si estás cerca del final, avisa primero a tu líder o embajador de campo.</div>

<h2>También puedes escribir al chatbot de soporte</h2>
<div class="note"><strong>¿Tienes una duda?</strong> Pregúntale al chatbot de soporte Musa por WhatsApp: <a href="https://wa.me/51989691266" target="_blank" rel="noopener">+51 989 691 266</a>.</div>

<h2>Paso 3 · Pide ayuda a tu líder</h2>
<p>Si el problema continúa, avisa a tu líder o embajador de campo. Ellos pueden pedir una revisión y un reinicio técnico del número al equipo de soporte de Musa. El soporte de Musa atiende al equipo de tu organización que administra el programa, no directamente a los estudiantes.</p>`
}
];
