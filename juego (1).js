const GOAL = 35;
const DURATION_S = 300;
const PALETTE = ['#c0492f','#3b6ea5','#5a8f4f','#8b5cf6','#d9a441','#d16aa5','#4fa6a6','#a5723b','#6b7fd6','#8fae4f','#c95c8a'];

// Contenido basado en el documento ESTATUTO subido. Ordenado de lo más
// básico/general a lo más específico y detallado.
const BANK = [
{q:"¿Qué es, en términos simples, un estatuto?",opts:["El libro de reglas que dice cómo va a funcionar una empresa, club o grupo","Un balance contable de fin de año","Una factura de compra de insumos","Un anuncio publicitario de la empresa"],c:0,exp:"El estatuto es como el 'libro de reglas' que arma un grupo para no pelearse: dice qué hace cada uno, cómo se decide algo importante y qué pasa si alguien entra o sale."},
{q:"¿Cuál de estas NO es una de las 3 funciones principales del estatuto?",opts:["Fijar el precio de venta de los productos de la empresa","Poner orden: decir quién es el jefe y cómo se vota","Cuidar la plata: explicar cómo se reparten ganancias o gastos","Hacer todo legal, anotándolo en una oficina del Estado"],c:0,exp:"Las 3 funciones son poner orden, cuidar la plata y hacer todo legal mediante la inscripción (por ejemplo en la IGJ o el Registro Público). El precio de venta no es un tema del estatuto."},
{q:"En una SRL (Sociedad de Responsabilidad Limitada), ¿cómo se llama el estatuto?",opts:["Contrato Social","Estatuto Cooperativo","Reglamento Interno","Convenio de Trabajo"],c:0,exp:"En las SRL, sobre todo cuando recién se forman, a este documento se lo llama Contrato Social."},
{q:"En una S.A. (Sociedad Anónima), ¿cómo se llama este documento?",opts:["Estatuto Social","Contrato Social","Convenio de Trabajo","Reglamento Interno"],c:0,exp:"En las empresas grandes tipo S.A., además de en clubes, ONG y sindicatos, se usa el nombre Estatuto Social."},
{q:"¿Cómo se llama el estatuto en una Cooperativa?",opts:["Estatuto Cooperativo","Contrato Social","Estatuto Profesional","Convenio de Trabajo"],c:0,exp:"Las cooperativas usan el nombre Estatuto Cooperativo."},
{q:"¿Qué son el 'Estatuto Profesional' o 'Convenio de Trabajo'?",opts:["Reglas de juego especiales para todo un gremio, como maestros o periodistas","El reglamento interno de una sola oficina","El contrato social de una SRL chica","El acta de una asamblea puntual"],c:0,exp:"Son reglas pensadas para un oficio o profesión entera, no para una sola organización."},
{q:"¿En qué se diferencia el Estatuto Social del Reglamento Interno?",opts:["El reglamento interno regula la convivencia del día a día; el estatuto fija las reglas fundacionales y de organización","Son exactamente lo mismo con distinto nombre","El reglamento interno reemplaza al estatuto una vez inscripto","El estatuto solo sirve para empresas y el reglamento interno para clubes"],c:0,exp:"El reglamento interno son las reglas de convivencia diaria dentro de un lugar; el estatuto es el documento fundacional más general."},
{q:"¿Qué sigla usa una Asociación Civil?",opts:["A.C.","S.A.","Coop.","A.M."],c:0,exp:"Una Asociación Civil se identifica con la sigla A.C. (ej: 'Club Social y Deportivo A.C.')."},
{q:"¿Qué sigla usa una Cooperativa y por qué suele agregarse 'Ltda.'?",opts:["Coop., y se agrega 'Ltda.' porque la responsabilidad de los socios es limitada","S.A., porque es una sociedad grande","A.C., igual que las asociaciones civiles","No usa ninguna sigla"],c:0,exp:"Se usa 'Coop.' y casi siempre se suma 'Ltda.' porque la responsabilidad de los socios frente a las deudas es limitada."},
{q:"¿Qué sigla usa una Asociación Mutual?",opts:["A.M.","A.C.","Coop.","S.A."],c:0,exp:"Las mutuales se identifican con la sigla A.M."},
{q:"¿Por qué una Fundación normalmente no lleva una sigla de 2 o 3 letras?",opts:["Porque la ley obliga a anteponer o posponer la palabra completa 'Fundación'","Porque las fundaciones no necesitan estatuto","Porque usan la misma sigla que las cooperativas","Porque están prohibidas en Argentina"],c:0,exp:"La ley exige usar la palabra completa 'Fundación' en el nombre (ej: 'Fundación Vida'), aunque informalmente a veces se abrevia 'Fund.'"},
{q:"¿Por qué una 'Simple Asociación' no puede usar la sigla 'S.A.'?",opts:["Porque generaría un grave error legal al confundirse con 'Sociedad Anónima'","Porque esa sigla está reservada para el Estado","Porque 'S.A.' significa 'Sin Autorización'","No hay ningún motivo, es solo una costumbre"],c:0,exp:"La ley exige agregar las palabras completas 'Simple Asociación' al nombre, para no confundirla con una Sociedad Anónima."},
{q:"¿Qué es una 'Cooperativa Efectora'?",opts:["Una cooperativa común (Coop. o Coop. Ltda.) donde 'efectora' es solo una categoría fiscal para facturar como Monotributo Social","Un tipo societario totalmente distinto a la cooperativa","Una cooperativa que no necesita estatuto","Una sigla exclusiva para fundaciones"],c:0,exp:"Usa la misma sigla que cualquier cooperativa; 'efectora' es una categoría fiscal/tributaria, no un tipo societario distinto."},
{q:"¿Quiénes redactan y firman el estatuto de una Cooperativa, y qué organismo lo aprueba?",opts:["Los socios fundadores en la Asamblea Constitutiva; lo aprueba el INAES y el órgano local de cada provincia","Solo un escribano público, sin intervención de los socios","El Ministerio de Educación de la provincia","La AFIP de forma exclusiva"],c:0,exp:"Los socios fundadores lo redactan y firman en la Asamblea Constitutiva; el organismo que aprueba es el INAES junto al órgano local de cada provincia."},
{q:"¿Qué organismo aprueba y registra el estatuto de una Fundación?",opts:["La Dirección de Personas Jurídicas de la provincia (o la IGJ en CABA)","El INAES","El Ministerio de Educación","La AFIP"],c:0,exp:"Las fundaciones se aprueban ante la Dirección de Personas Jurídicas provincial, o la IGJ si es en CABA."},
{q:"¿Qué organismo aprueba el estatuto de una Asociación Cooperadora escolar?",opts:["El Ministerio de Educación de la provincia (o CABA) y Personas Jurídicas","El INAES","La IGJ únicamente","No requiere aprobación de ningún organismo"],c:0,exp:"Al tratarse de la comunidad educativa (padres, docentes, vecinos), interviene el Ministerio de Educación junto con Personas Jurídicas."},
{q:"¿Una 'Simple Asociación' necesita inscribirse obligatoriamente en la IGJ para existir?",opts:["No, no requiere inscripción obligatoria, aunque puede registrarse certificando firmas ante escribano","Sí, es obligatorio como cualquier sociedad comercial","No puede existir legalmente bajo ninguna circunstancia","Solo si tiene más de 10 socios"],c:0,exp:"Es la excepción: no necesita inscripción obligatoria en IGJ/Personas Jurídicas para existir, aunque puede certificar firmas ante escribano público."},
{q:"¿Cuáles son las tres fases del funcionamiento de un estatuto?",opts:["Nacimiento, vida diaria (funcionamiento) y modificación o fin","Redacción, impresión y archivo","Compra, venta y reventa","Auditoría, sanción y expulsión"],c:0,exp:"El estatuto se divide en cómo nace, cómo opera en el día a día, y qué pasa cuando hay que cambiarlo o cerrar."},
{q:"¿Cuándo pasa el estatuto a ser obligatorio para todos los integrantes?",opts:["Cuando el Estado otorga la personería jurídica, reconociendo a la entidad como persona independiente","Apenas los fundadores lo firman, sin más trámites","Recién cuando la entidad cumple 10 años","Nunca es obligatorio, es solo una guía"],c:0,exp:"Tras el control estatal y el otorgamiento de la personería jurídica, el estatuto pasa a ser obligatorio para todos."},
{q:"En la 'vida diaria' de la entidad, ¿qué regula el estatuto sobre la toma de decisiones?",opts:["Fija las reglas para convocar Asambleas y con cuántos votos se aprueba una decisión","Define el menú de la cafetería de la sede","Establece el horario de limpieza de la oficina","No regula nada sobre las decisiones, eso lo decide el Estado"],c:0,exp:"El estatuto establece cómo se llama a Asamblea y qué mayoría de votos hace falta para aprobar algo."},
{q:"¿Quién es el único que puede reformar (modificar) el estatuto?",opts:["Solo la Asamblea General, la reunión de todos los socios","El presidente de la comisión directiva, sin consultar a nadie","Cualquier empleado con más de un año de antigüedad","Un escribano externo a la entidad"],c:0,exp:"Solo la Asamblea General puede reformarlo, y el cambio debe volver a presentarse ante el organismo del Estado."},
{q:"¿Qué dos requisitos le dan vigencia y fuerza legal real a un estatuto?",opts:["La aprobación estatal (inscripción) y el mantenimiento al día de las reglas internas","Que esté impreso en papel oficial y firmado con tinta azul","Que lo revise un contador cada seis meses","Que tenga menos de 10 páginas"],c:0,exp:"No alcanza con estar escrito y firmado: hace falta la aprobación del Estado y mantener al día las obligaciones internas."},
{q:"Para las sociedades comerciales, además de inscribirse, ¿qué otro trámite exige la vigencia inicial?",opts:["La publicación de un extracto en el Boletín Oficial","Una entrevista con un juez","El pago de un impuesto municipal único","Nada más, con la inscripción alcanza"],c:0,exp:"Las sociedades comerciales deben además publicar un extracto en el Boletín Oficial."},
{q:"Sin inscripción ni aprobación estatal, ¿qué es en realidad el estatuto?",opts:["Solo un acuerdo privado entre partes, sin validez legal frente a terceros","Un documento con la misma validez que uno inscripto","Un documento que vale el doble por no estar registrado","Un trámite que se completa automáticamente a los 30 días"],c:0,exp:"Sin inscripción, el estatuto es solo un acuerdo privado y no tiene validez frente a bancos, el Estado o proveedores."},
{q:"Por regla general, ¿cuánto dura la vigencia de un estatuto?",opts:["Es indeterminada (no vence), salvo que el propio texto fije un plazo","Vence siempre a los 5 años exactos","Vence apenas cambia un socio","Nunca puede tener un plazo fijado"],c:0,exp:"Por defecto la vigencia es indeterminada; puede fijarse un plazo (por ejemplo, 99 años) si el texto lo establece."},
{q:"¿Qué puede pasar si una entidad deja de presentar balances y actas de asamblea durante varios años?",opts:["El Estado puede suspender la personería jurídica o declararla en estado irregular","No pasa absolutamente nada","Automáticamente gana un premio fiscal","Se transforma en una Sociedad Anónima"],c:0,exp:"Mantener al día balances y actas es parte de la 'vigencia operativa'; no hacerlo puede llevar a la suspensión de la personería."},
{q:"¿Cuáles son las causas por las que un estatuto deja de tener validez?",opts:["Reforma integral inscripta, disolución/liquidación de la entidad, o revocación estatal de la personería","Solo cuando cambian de oficina","Cuando el estatuto cumple exactamente un año","Nunca deja de tener validez"],c:0,exp:"Pierde validez si se aprueba e inscribe una reforma integral, si la entidad se disuelve, o si el Estado le retira la personería jurídica."},
{q:"¿Qué debe incluir la sección de 'Identificación básica' del estatuto?",opts:["Nombre o razón social, domicilio legal y plazo de duración","La lista de proveedores habituales","El logo oficial en alta resolución","El presupuesto anual detallado"],c:0,exp:"Identificación básica cubre el nombre oficial, el domicilio legal y el plazo de duración de la entidad."},
{q:"En la sección de 'Objeto Social', ¿qué debe quedar claro (salvo en sociedades comerciales)?",opts:["Que la entidad no tiene fines de lucro","Que la entidad cotiza en bolsa","Que la entidad tiene sucursales en el exterior","Que la entidad es propiedad de un solo dueño"],c:0,exp:"El objeto social debe describir claramente a qué se dedica la entidad y dejar en claro que no persigue fines de lucro (salvo sociedades comerciales)."},
{q:"¿Qué diferencia hay entre las Asambleas Ordinarias y las Extraordinarias?",opts:["Las ordinarias son anuales (aprueban balances y eligen autoridades); las extraordinarias son para temas urgentes o reformas del estatuto","Son exactamente lo mismo, solo cambia el nombre","Las extraordinarias son obligatorias cada mes","Las ordinarias solo tratan temas de disolución"],c:0,exp:"Las ordinarias aprueban balances y eligen autoridades; las extraordinarias se convocan para temas urgentes o para reformar el estatuto."},
{q:"¿Qué órgano se encarga de controlar que el dinero y las reglas se manejen correctamente?",opts:["El órgano de fiscalización (Comisión Revisora de Cuentas o Sindicatura)","El órgano de administración","La Asamblea Ordinaria","El fundador de la entidad"],c:0,exp:"La fiscalización interna corre por cuenta de la Comisión Revisora de Cuentas o la Sindicatura."},
{q:"Si una entidad sin fines de lucro se disuelve, ¿qué suele pasar con los bienes que sobran?",opts:["Se donan a otra institución similar","Se reparten en partes iguales entre los socios","Pasan a ser propiedad del Estado nacional","Se destruyen por disposición legal"],c:0,exp:"En entidades sin fines de lucro, los bienes remanentes suelen donarse a otra institución con fines similares."}
];

function shuffle(arr){ const a=[...arr]; for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
function shuffleOptions(item){
  const order = shuffle([0,1,2,3]);
  return { q:item.q, opts:order.map(i=>item.opts[i]), c:order.indexOf(item.c), exp:item.exp };
}
function fmtTime(s){ s=Math.max(0,Math.round(s)); const m=Math.floor(s/60), sec=s%60; return String(m).padStart(2,'0')+':'+String(sec).padStart(2,'0'); }
function escapeHtml(str){ return String(str).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }

const app = document.getElementById('app');
if(!app){ throw new Error('No se encontró el contenedor principal'); }

// ---- estado del juego (todo en memoria, sin dependencias externas) ----
let phase = 'setup';           // setup | question | wrong | spin | result | finished
let players = [];              // {name,color,score,attempts,correct,finished,history:[]}
let turnIndex = 0;
let questionQueue = [];
let usedTexts = [];
let currentQuestion = null;
let raceStartTime = null;
let spinValue = null;
let selectedIdx = null;
let wasCorrect = null;
let winner = null;
let toastMsg = null;
let toastTimer = null;
let tickTimer = null;

function showToast(msg){
  toastMsg = msg;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=>{ toastMsg=null; render(); }, 3200);
  render();
}

function addPlayer(name){
  try{
    name = (name||'').trim();
    if(!name){ showToast('Escribí un nombre antes de agregar.'); return; }
    if(players.length>=11){ showToast('Ya hay 11 jugadores, el máximo permitido.'); return; }
    if(players.some(p=>p.name.toLowerCase()===name.toLowerCase())){ showToast('Ya hay un jugador con ese nombre.'); return; }
    players.push({ name:name.slice(0,20), color:PALETTE[players.length%PALETTE.length], score:0, attempts:0, correct:0, finished:false, history:[] });
    render();
  }catch(e){ showToast('No se pudo agregar al jugador, intentá de nuevo.'); }
}
function removePlayer(i){ try{ players.splice(i,1); render(); }catch(e){} }

function nextQuestion(){
  try{
    if(questionQueue.length===0){
      if(usedTexts.length >= BANK.length){
        showToast('Se usaron todas las preguntas del banco; se repiten en otro orden.');
        questionQueue = shuffle(BANK);
      } else {
        questionQueue = shuffle(BANK.filter(b=>!usedTexts.includes(b.q)));
      }
    }
    const q = questionQueue.shift();
    if(!q){ showToast('No hay más preguntas disponibles.'); return null; }
    usedTexts.push(q.q);
    return shuffleOptions(q);
  }catch(e){ showToast('Hubo un problema cargando la pregunta.'); return null; }
}

function activeIndices(){ return players.map((p,i)=>i).filter(i=>!players[i].finished); }
function findNextTurn(fromIndex){
  const act = activeIndices();
  if(act.length===0) return -1;
  let i = fromIndex;
  for(let k=0;k<players.length;k++){
    i = (i+1) % players.length;
    if(!players[i].finished) return i;
  }
  return act[0];
}

function startRace(){
  if(players.length<2){ showToast('Sumá al menos 2 jugadores para largar.'); return; }
  raceStartTime = Date.now();
  turnIndex = 0;
  while(players[turnIndex] && players[turnIndex].finished){ turnIndex=(turnIndex+1)%players.length; }
  questionQueue = shuffle(BANK);
  usedTexts = [];
  currentQuestion = nextQuestion();
  phase = 'question';
  clearInterval(tickTimer);
  tickTimer = setInterval(tick, 1000);
  render();
}

function tick(){
  if(phase==='finished') return;
  const remaining = DURATION_S - (Date.now()-raceStartTime)/1000;
  if(remaining<=0){ endRace(); return; }
  render();
}

function endRace(){
  phase = 'finished';
  clearInterval(tickTimer);
  if(!winner){
    const sorted = [...players].sort((a,b)=> (b.score-a.score) || ((b.attempts?b.correct/b.attempts:0)-(a.attempts?a.correct/a.attempts:0)));
    winner = sorted[0] || null;
  }
  render();
}

function selectAnswer(i){
  try{
    if(phase!=='question' || !currentQuestion) return;
    const p = players[turnIndex];
    const item = currentQuestion;
    const correct = i===item.c;
    selectedIdx = i; wasCorrect = correct;
    p.attempts++;
    p.history.push({ q:item.q, opts:item.opts, selected:i, correctIdx:item.c, correct:correct, exp:item.exp });
    if(correct){ p.correct++; phase='spin'; }
    else{ phase='wrong'; }
    render();
  }catch(e){ showToast('Hubo un error al registrar la respuesta.'); }
}

function spinRoulette(){
  try{
    const value = 1 + Math.floor(Math.random()*5);
    spinValue = value;
    const extraTurns = 4 + Math.floor(Math.random()*2);
    const targetAngles = {1:36,2:108,3:180,4:252,5:324};
    const finalAngle = extraTurns*360 + targetAngles[value];
    const wheel = document.getElementById('roulette-wheel');
    if(wheel) wheel.style.transform = 'rotate('+finalAngle+'deg)';
    render(true);
    setTimeout(()=>{
      const p = players[turnIndex];
      p.score = Math.min(GOAL, p.score + value);
      if(p.history.length) p.history[p.history.length-1].points = value;
      if(p.score >= GOAL){ p.finished = true; winner = p; endRace(); return; }
      phase = 'result';
      render();
    }, 2500);
  }catch(e){ showToast('Hubo un error con la ruleta, se suman los puntos igual.'); }
}

function advanceTurn(){
  try{
    const nx = findNextTurn(turnIndex);
    if(nx===-1){ endRace(); return; }
    turnIndex = nx;
    currentQuestion = nextQuestion();
    if(!currentQuestion){ endRace(); return; }
    phase = 'question';
    render();
  }catch(e){ showToast('No se pudo pasar el turno, intentá de nuevo.'); }
}

function restart(){
  clearInterval(tickTimer);
  phase='setup'; players=[]; turnIndex=0; questionQueue=[]; usedTexts=[];
  currentQuestion=null; raceStartTime=null; spinValue=null; selectedIdx=null; wasCorrect=null; winner=null;
  render();
}

function renderLane(p, i, isTurn){
  const pct = Math.min(100,(p.score/GOAL)*100);
  const acc = p.attempts ? Math.round((p.correct/p.attempts)*100) : 0;
  return '<div class="lane'+(isTurn?' turn':'')+'">'
    +'<span class="rail-name" style="color:'+p.color+'">'+escapeHtml(p.name)+(p.finished?' 🏁':'')+'</span>'
    +'<div class="lane-track"><span class="lane-horse" style="left:'+Math.max(4,pct)+'%;">🐎</span><span class="finish-flag">🏁</span></div>'
    +'<span class="rail-score">'+p.score+'/'+GOAL+' · '+acc+'%</span>'
  +'</div>';
}
function renderMetrics(){
  const rows = [...players].sort((a,b)=>b.score-a.score).map((p,i)=>{
    const acc = p.attempts ? Math.round((p.correct/p.attempts)*100) : 0;
    return '<tr><td>'+(i+1)+'</td><td><span class="dot" style="background:'+p.color+';margin-right:6px;"></span>'+escapeHtml(p.name)+'</td><td>'+p.score+'/'+GOAL+'</td><td>'+p.attempts+'</td><td>'+p.correct+'</td><td>'+acc+'%</td></tr>';
  }).join('');
  return '<div class="table-scroll"><table class="metrics"><thead><tr><th>#</th><th>Jinete</th><th>Puntos</th><th>Preguntas</th><th>Aciertos</th><th>Precisión</th></tr></thead><tbody>'+rows+'</tbody></table></div>';
}
function renderRoulette(){
  return '<div class="roulette-wrap">'
    +'<p style="margin:0;font-size:14px;">¡Correcto! Girá la ruleta para ganar entre 1 y 5 puntos.</p>'
    +'<div class="roulette-inner"><div class="roulette-pointer"></div>'
      +'<div class="roulette" id="roulette-wheel">'
        +'<span class="roulette-num" style="top:14px;left:68px;">3</span>'
        +'<span class="roulette-num" style="top:44px;left:112px;">2</span>'
        +'<span class="roulette-num" style="top:100px;left:100px;">1</span>'
        +'<span class="roulette-num" style="top:100px;left:34px;">5</span>'
        +'<span class="roulette-num" style="top:44px;left:20px;">4</span>'
      +'</div></div>'
    +'<button id="spin-btn">Girar la ruleta</button>'
  +'</div>';
}
function renderFeedback(){
  return players.map(p=>{
    const wrong = (p.history||[]).filter(h=>!h.correct);
    const body = wrong.length===0
      ? '<p class="progress-note">Respondió todo correctamente. Sin errores para repasar.</p>'
      : wrong.map(h=>'<div class="feedback-item">'
          +'<p style="margin:0 0 4px;font-weight:600;font-size:13px;">'+escapeHtml(h.q)+'</p>'
          +'<p style="margin:0 0 2px;font-size:12.5px;"><span class="badge bad">Marcó</span> '+escapeHtml(h.opts[h.selected])+'</p>'
          +'<p style="margin:0 0 2px;font-size:12.5px;"><span class="badge ok">Correcta</span> '+escapeHtml(h.opts[h.correctIdx])+'</p>'
          +'<p style="margin:4px 0 0;font-size:12.5px;color:var(--cream-dim);">'+escapeHtml(h.exp)+'</p>'
        +'</div>').join('');
    const acc = p.attempts ? Math.round((p.correct/p.attempts)*100) : 0;
    return '<div class="card">'
      +'<div style="display:flex;justify-content:space-between;align-items:baseline;margin-bottom:8px;">'
        +'<h2 style="margin:0;font-size:20px;color:'+p.color+';">'+escapeHtml(p.name)+'</h2>'
        +'<span class="progress-note">'+p.score+'/'+GOAL+' pts · '+p.correct+'/'+p.attempts+' aciertos ('+acc+'%)</span>'
      +'</div>'+body+'</div>';
  }).join('');
}

function render(spinning){
  if(!app) return;

  if(phase==='setup'){
    app.innerHTML =
      '<h1 class="hero-title">🏇 Hipódromo del Estatuto</h1>'
      +'<p class="hero-sub">Se juega en este mismo dispositivo, pasándose el turno. Cada acierto da un giro de ruleta (1 a 5 puntos). Gana quien llegue primero a '+GOAL+' puntos, o quien vaya más lejos al cumplirse los 5 minutos.</p>'
      +'<div class="card">'
        +'<p style="margin:0 0 10px;font-size:13px;color:var(--cream-dim);">Jugadores anotados ('+players.length+'/11)</p>'
        +'<div style="display:flex;gap:8px;margin-bottom:12px;">'
          +'<input id="name-input" type="text" placeholder="Nombre del jugador" maxlength="20" '+(players.length>=11?'disabled':'')+'/>'
          +'<button id="add-btn" '+(players.length>=11?'disabled':'')+'>Agregar</button>'
        +'</div>'
        +'<div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px;">'
          + players.map((p,i)=>'<span class="chip"><span class="dot" style="background:'+p.color+';"></span>'+escapeHtml(p.name)+'<button data-i="'+i+'" class="rm-btn">×</button></span>').join('')
        +'</div>'
        +'<button id="start-btn" '+(players.length<2?'disabled':'')+'>Largar la carrera ('+players.length+'/11)</button>'
      +'</div>';
    const ni=document.getElementById('name-input'), ab=document.getElementById('add-btn'), sb=document.getElementById('start-btn');
    if(ab) ab.addEventListener('click', ()=>{ addPlayer(ni.value); if(ni) ni.value=''; });
    if(ni) ni.addEventListener('keydown', e=>{ if(e.key==='Enter'){ addPlayer(e.target.value); e.target.value=''; } });
    if(sb) sb.addEventListener('click', startRace);
    document.querySelectorAll('.rm-btn').forEach(b=>b.addEventListener('click',()=>removePlayer(parseInt(b.dataset.i))));
  }

  else if(phase==='finished'){
    const winnerName = winner ? winner.name : null;
    app.innerHTML =
      '<h1 class="hero-title">🏁 Terminó la carrera</h1>'
      +'<p class="hero-sub">'+(winnerName ? ('Ganador: <strong style="color:var(--gold);">'+escapeHtml(winnerName)+'</strong>') : 'No hubo jugadores suficientes.')+'</p>'
      +'<div class="card"><p style="margin:0 0 8px;font-size:12px;color:var(--cream-dim);text-transform:uppercase;letter-spacing:0.4px;">Tabla final</p>'+renderMetrics()+'</div>'
      +'<h2 style="font-size:24px;color:var(--gold);margin:24px 0 10px;">Retroalimentación por jinete</h2>'
      + renderFeedback()
      +'<div style="margin-top:8px;"><button id="restart-btn" class="secondary">Jugar de nuevo</button></div>';
    const rb=document.getElementById('restart-btn');
    if(rb) rb.addEventListener('click', restart);
  }

  else {
    const remaining = raceStartTime ? DURATION_S - (Date.now()-raceStartTime)/1000 : DURATION_S;
    const timerClass = remaining<=30 ? 'timer low' : 'timer';
    const p = players[turnIndex];
    let bottom = '';
    if(phase==='spin'){
      bottom = '<div class="card">'+renderRoulette()+'</div>';
    } else if(phase==='result'){
      bottom = '<div class="card"><p style="margin:0 0 12px;font-size:15px;">Sacaste <span class="accent" style="font-size:18px;font-weight:700;">+'+spinValue+'</span> puntos en la ruleta.</p><button id="cont-btn">Siguiente turno</button></div>';
    } else if(phase==='wrong'){
      const item = currentQuestion;
      bottom = '<div class="card">'
        +'<p style="margin:0 0 10px;font-size:13px;">Esta vez no. La respuesta correcta era: <strong>'+escapeHtml(item.opts[item.c])+'</strong></p>'
        +'<p style="margin:0 0 14px;font-size:12.5px;color:var(--cream-dim);">'+escapeHtml(item.exp)+'</p>'
        +'<button id="cont-btn">Siguiente turno</button>'
      +'</div>';
    } else {
      const item = currentQuestion;
      const optsHtml = item ? item.opts.map((o,i)=>'<button class="opt-btn" data-i="'+i+'">'+escapeHtml(o)+'</button>').join('') : '';
      bottom = '<div class="card">'
        +'<p style="margin:0 0 4px;font-size:12px;color:var(--cream-dim);">Turno de <strong style="color:'+p.color+';">'+escapeHtml(p.name)+'</strong></p>'
        +'<p style="margin:0 0 12px;font-size:15.5px;font-weight:600;">'+(item?escapeHtml(item.q):'Cargando pregunta…')+'</p>'
        +'<div>'+optsHtml+'</div>'
      +'</div>';
    }

    app.innerHTML =
      '<div class="header-row">'
        +'<h1 class="hero-title" style="margin:0;">🏇 Hipódromo del Estatuto</h1>'
        +'<span class="'+timerClass+'">'+fmtTime(remaining)+'</span>'
      +'</div>'
      +'<div class="card">'+players.map((pl,i)=>renderLane(pl,i,i===turnIndex && phase!=='finished')).join('')+'</div>'
      +'<div class="card"><p style="margin:0 0 8px;font-size:12px;color:var(--cream-dim);text-transform:uppercase;letter-spacing:0.4px;">Métricas en vivo</p>'+renderMetrics()+'</div>'
      + bottom;

    if(phase==='question'){
      document.querySelectorAll('.opt-btn').forEach(btn=>btn.addEventListener('click', ()=>selectAnswer(parseInt(btn.dataset.i))));
    }
    const contBtn = document.getElementById('cont-btn');
    if(contBtn) contBtn.addEventListener('click', advanceTurn);
    const spinBtn = document.getElementById('spin-btn');
    if(spinBtn && !spinning) spinBtn.addEventListener('click', ()=>{ spinBtn.disabled=true; spinRoulette(); });
  }

  if(toastMsg){
    const t=document.createElement('div');
    t.className='toast';
    t.textContent=toastMsg;
    app.appendChild(t);
  }
}

window.addEventListener('error', function(e){
  showToast('Ocurrió un problema inesperado. Podés seguir jugando o reiniciar.');
});

render();
