const CATS = [
  {id:'empezar', art:'iniciar-microcursos', ico:'🚀', t:'¿Cómo empezar?', d:'Inicia tus microcursos por WhatsApp.', faqs:[
    ['¿Qué son los microcursos Musa?','Son microcursos de capacitación interactiva que se realizan directamente por WhatsApp. Tu ruta puede ser libre (tú eliges qué cursos tomar y en qué orden) o lineal (debes terminar los cursos en orden para avanzar al siguiente).',true],
    ['¿Cómo inicio mis microcursos?','Guarda el número de WhatsApp del chatbot como contacto en tu celular y escribe únicamente la palabra «Hola». No te preocupes si la primera respuesta tarda unos segundos en cargar.',true],
    ['¿Tengo que descargar alguna aplicación?','No. Todo ocurre dentro de tu chat de WhatsApp, a tu propio ritmo.'],
    ['¿Qué debo tener en cuenta al registrarme?','Completa con cuidado los campos de tu registro: de ahí salen los datos con los que se emitirá tu constancia. Escribe tu nombre completo.']
  ]},
  {id:'constancias', art:'iniciar-microcursos', ico:'🏅', t:'Constancias', d:'¿Cómo recibirlas y corregir tus datos?', faqs:[
    ['¿Cómo recibo mi constancia?','Llega directamente al chat de tu ruta de aprendizaje, como un enlace de descarga, cuando completas el curso y apruebas la evaluación.',true],
    ['¿Puedo cambiar mi nombre después de registrarme?','Sí, mientras no se haya emitido el certificado. Estando dentro de un curso, escribe «resetbot» para reiniciar el proceso de registro y corregir tus datos.',true]
  ]},
  {id:'chat', art:'si-el-chat-no-responde', ico:'💬', t:'Si el chat no responde', d:'¿Qué hacer paso a paso?', faqs:[
    ['El chatbot se demora o deja de responder, ¿qué hago?','Primero, si es tu primera interacción y escribiste «Hola» sin respuesta tras 60 segundos, espera un minuto y vuelve a escribir «Hola». Si el chat se detuvo en medio de una lección, reenvía el último mensaje escribiendo directamente la palabra que aparece dentro del botón.',true],
    ['¿Qué hace la palabra «Salir»?','Te regresa al menú principal para elegir otro curso. Solo funciona en capacitaciones con menú abierto o varios cursos; no está disponible en rutas lineales.'],
    ['¿Qué hace la palabra «resetbot»?','Reinicia la sesión de la lección activa y el proceso de registro. Sirve para destrabar la conversación o corregir tus datos antes de que se emita tu certificado. Debes escribirla estando dentro de un curso, no desde el menú principal.'],
    ['¿Qué pasa si salgo de un curso sin terminarlo?','Si no completaste el curso ni generaste tu constancia antes de salir, deberás realizar el curso completo de nuevo para poder certificarte. En rutas lineales, «resetbot» borra tu progreso activo y debes repetir los microcursos desde el inicio.']
  ]},
  {id:'ayuda', ico:'🙋', t:'Dudas del programa', d:'Fechas, políticas y avance.', faqs:[
    ['¿A quién le pregunto por fechas o mi avance?','Las dudas sobre fechas, políticas internas o tu propio avance se resuelven con los líderes o embajadores de campo de tu organización.',true],
    ['¿Puedo escribir al soporte de Musa?','El soporte de Musa atiende al equipo de tu organización que administra el programa. Si tienes un problema con el chat, sigue los pasos de la sección anterior y, si persiste, avisa a tu líder para que cree el caso.']
  ]}
];
