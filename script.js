/* ============================================================
   PERSONALIZE AQUI — troque nomes e os textos de cada conto
   como quiser.
   ============================================================ */
const CONFIG = {
  paraNome: "Intercânbista",
  deNome: "Seu Jogador⚽",

  hubTitulo: "Meu amor",
  hubSubtitulo: "escolhi alguns personagens com alguns recadinhos para você.😁",

  contos: {
    rapunzel: {
      titulo: "Toda história tem uma torre. A nossa tem você.",
      caracteristicas: ["cabelo dourado e infinito", "encantadora", "sonha em ver as lanternas de pertinho", "corajosa na hora de sair pelo mundo"],
      declaracao: "Começando pela sua princesa favorita kkk, queria te falar que você conseguiu reviver o Pedrinho la de trás, de quando ele tinha uns 8 anos de idade. Sei que é muito clichê falar isso meu amor mas isso realmente aconteceu, e hoje eu me encontro muito mais feliz e muito mais alegre, pois vc trouxe luz na minha vida igual aquele trecho daquela musica 'vejo enfim a luz brilhar, já passou o nevoeiro', é amor, você conseguiu tirar o nevoeiro da minha vida trazendo luz para ela...",
    },
    coringa: {
      titulo: "Você é o meu trunfo favorito.",
      caracteristicas: ["a carta mais imprevisível do baralho", "muda o jogo todo quando entra", "nunca segue as regras certinho", "encaixa em qualquer lugar, do jeito dela"],
      declaracao: "Trazendo agora um dos meu personagens kkk. Bom, trouxe ele porque ele me lembra nosso inicio do inicio. Quem diria que um interclasse ia gerar isso, mas podemos dizer que a vítima caiu nas palhaçadas do coringa aqui kkkk. Amor, trouxe ele também porque sabemos que ele é o puro caos. Olha que coincidência ein, no meio do meu caos aparece uma figura muito importante né Manuella Rodrigues. Com você eu me sinto seguro e me sinto confortável amor, pois você trouxe a paz pro meu caos. E como diz la no começo da página, você foi a carta mais imprevisível do meu baralho.",
    },
    zootopia: {
      titulo: "Uma raposa e uma coelha, contra todas as probabilidades.",
      caracteristicas: ["um esperto, outra corajosa", "provam que opostos se completam", "não deixam ninguém duvidar da parceria", "viram time imbatível"],
      declaracao: "Agora sem dúvidas uma das melhores parcerias, e mesmo que são diferentes nunca deixa de se ajudar (até porque na vida real todo mundo é diferente), e é por isso que estão aqui. Meu amor, eles são espelho para nós, porque independente de qualquer dificuldade e qualquer diferença eles estão sempre juntos, tem até uma fala no filme que ele diz assim: 'Olha, eu sei que você nunca vai deixar de tentar. Então, se vamos fazer isso, vamos fazer juntos.' e é isso que eu quero para nós, que sempre estejamos juntos. Manuella Rodrigues como a querida coelhinha corajosa, não tem medo de nada porque sempre quer alcançar seu objetivo. De outro Lado, eu, como a raposa esperta que sempre está fazendo graças e acha que sempre é o melhor. (Que belo casal né kkkk)",
    },
    ravena: {
      titulo: "Meio mistério, meio magia e muito poder",
      caracteristicas: ["guarda os sentimentos bem guardados", "poderosa mesmo quando quieta", "traz calma pro caos", "esconde um coração enorme"],
      declaracao: "Nessa aqui você me pegou um pouco kkk, mas vamos lá. Amor, essa personagem nós sabemos que ela é quieta na dela porém muito poderosa. E achei parecida com você, pois no dia 06/08/2026 teve uma hora que você passou por mim na entrada da quadra e apenas me olhou dando um sorriso, e ali eu percebi que você era extremamente poderosa só que quieta (até porque entrou na minha mente com um olhar). Curiosamente em uma episódio a Ravena diz o seguinte: 'Realmente não há fim, apenas novos recomeços'. É isso que eu quero que aconteça com nós amor, que não tenha fim, porém se tiver que recomeçar 1000 vezes, que recomecemos.",
    },
    tiana: {
      titulo: "A princesa que quebrou o feitiço do sapo",
      caracteristicas: ["sonha grande e trabalha duro", "transforma qualquer lugar em festa", "não desiste do que quer", "sabe que os sonhos dão trabalho — e valem a pena"],
      declaracao: "Você a princesa e eu o sapo kkkk. Trouxe eles amor porque nesse filme tem uma frase que ficou na minha cabeça depois que saímos aquele sábado, e também porque você é a única princesa capaz de tirar o meu feitiço de não acreditar mais no amor e me deixar encantado por você. Amor meu maior sonho ta se realizando de pouquinho em pouquinho. Falando da frase agora amor, no filme o enquanto os dois ainda são sapos a Tiana pergunta pro príncipe o porque ele está deixando o sonho dele de lado, e ele simplesmente responde assim: 'Meu sonho? Meu sonho não estaria completo sem você nele.' - Nisso ela fala que ama ele, e ele pergunta se ela o ama com todas a falhas, e ela reponde: 'Com todas falhas.' Eu te amo com todas as falhas Manuella.",
    },
    pooh: {
      titulo: "Com você, todo dia parece hora do mel.",
      caracteristicas: ["ama comer besteiras", "feliz com as coisas pequenas", "sempre tem o melhor abraço de todos", "a melhor companhia que existe"],
      declaracao: "O ursinho fofo que todo mundo conhece, ele está nesta lista porque eu me identifico muito com ele pelo simples fato dele ser tão carinhoso e cuidadoso de quem está ao seu redor. Ele tem uma frase que eu refleti e me identifiquei, e vou te mostrar qual é a fala: 'Como tenho sorte de ter algo que se torna tão difícil dizer adeus.' E isso é verdade, porque antes só pensava na parte ruim de te dar tchau, mas olhando por esse lado eu penso o quão bom é ter você que se torna difícil te dar adeus.",
    },
    belafera: {
      titulo: "Aprendi a amar antes de aprender a ter medo.",
      caracteristicas: ["vê além da aparência", "corajosa mesmo com medo", "gentil por natureza", "acredita que amor quebra qualquer feitiço"],
      declaracao: "Amor não sei muito sobre princesas kkk, mas sei que a Bela aceitou a fera mesmo ele sendo totalmente diferente. Ela se apaixonou por ele mesmo ele sendo uma fera, e isso se resume o que é amor. A referência da bela é quando ela fala isso: ' São os seus defeitos que te fazem uma pessoa única'. O que realmente é verdade, pois seus defeitos aos olhos de quem te ama se torna uma qualidade. Sua fera aqui te ama independente de tudo, porque você me aceitou desse jeito então não faz sentido eu não te aceitar do seu. Eu te amo minha Bela!",
    },
    aranha: {
      titulo: "A saga que sempre tem um episódio novo",
      caracteristicas: ["sempre chega na hora certa", "grandes poderes e grandes responsabilidades", "protege quem ama sem esperar aplausos", "sabe que ser forte também é saber cuidar"],
      declaracao: "Eu poderia ser mais clichê do que já estou sendo e começar falando 'Com grandes poderes vem grandes reponsabilidades.' Essa frase se encaixa muito com você meu amor, porém prefiro usar outra fala do Andrew Garfield no filme do Espetacular Homem Aranha 2. Ele diz assim: 'Eu sei que temos um bilhão de motivos para não ficarmos juntos, mas eu estou cansado deles. Todos nós temos que fazer uma escolha... e eu escolho você!' E no inicio vc disse que era mal falada e tals, porém com diz na frase, eu estou cansado deles e estou cansado do que o povo da escola falam, pois se eu tenho você é o que importa.  E saiba que eu de todas as escolhas que eu pude ou que eu possa fazer, essa escolha sempre será você meu amor. Como diz lá no inicio da página 'todas as teias me levam até você', e vai continuar me levando a ti.",
    },
  },

  closingNote: "escolha outro conto, ou fique só admirando esse. 🌙",
};

/* ============================================================
   Dados dos contos (ícones, temas, textos-gancho do hub)
   ============================================================ */
const TALES = [
  { slug:'rapunzel', nome:'Rapunzel',        tema:'a torre e a trança',            teaser:'uma torre, uma trança, e uma luz que não parava de crescer.',    theme:'theme-rapunzel', icon:'braid'      },
  { slug:'coringa',  nome:'Coringa',         tema:'a carta mais imprevisível do baralho', teaser:'a carta que muda o jogo todo quando entra.',                theme:'theme-coringa',  icon:'card'       },
  { slug:'zootopia', nome:'Zootopia',        tema:'uma raposa e uma coelha',       teaser:'dois opostos que provaram todo mundo errado.',                    theme:'theme-zootopia', icon:'foxrabbit'  },
  { slug:'ravena',   nome:'Ravena',          tema:'meio mistério, meio magia',     teaser:'guarda os sentimentos, mas tem um coração enorme.',               theme:'theme-ravena',   icon:'hood'       },
  { slug:'tiana',    nome:'Tiana',           tema:'o sapo, a coroa e o jazz',      teaser:'sonha grande, trabalha duro, não desiste.',                       theme:'theme-tiana',    icon:'lily'       },
  { slug:'pooh',     nome:'Ursinho Pooh',    tema:'mel, floresta e um abraço',     teaser:'simples, gentil, sempre com um abraço de urso pronto.',           theme:'theme-pooh',     icon:'bear'       },
  { slug:'belafera', nome:'Bela e a Fera',   tema:'uma rosa, um castelo, um encanto', teaser:'aprendeu a ver além da aparência.',                            theme:'theme-belafera', icon:'rosedome'   },
  { slug:'aranha',   nome:'Homem-Aranha',    tema:'teias que sempre levam a você',  teaser:'sempre chega na hora certa, mesmo escondido.',                   theme:'theme-aranha',   icon:'web'        },
];
function findTale(slug){ return TALES.find(t => t.slug === slug); }
function particles(kind, lefts, color){
  return lefts.map((l, i) =>
    '<span class="particle ' + kind + '" style="left:' + l + '; width:8px; height:8px; background:' + color + '; box-shadow:0 0 10px 3px ' + color + '66; animation-delay:' + (i * 1.6) + 's; --dx:' + ((i % 2 ? 1 : -1) * (10 + i * 4)) + 'px;"></span>'
  ).join('');
}

/* ============================================================
   Ilustrações de cada cena (CSS puro)
   ============================================================ */
function sceneHtml(slug){
  if (slug === 'rapunzel') return '' +
    '<div class="tower-roof"></div>' +
    '<div class="tower-body"><div class="window"></div></div>' +
    '<div class="braid"></div>' +
    '<span class="braid-flower" style="top:110px; left:calc(50% - 24px);"></span>' +
    '<span class="braid-flower" style="top:160px; left:calc(50% + 6px);"></span>' +
    '<span class="braid-flower" style="top:205px; left:calc(50% - 22px);"></span>' +
    '<div class="tower-base"></div>' +
    '<span class="tower-bird" style="top:26px; left:calc(50% - 74px);"></span>' +
    particles('rise', ['12%','28%','66%','82%'], '#E8B84B');

  if (slug === 'coringa') return '' +
    '<div class="mask-face" style="top:6px; left:calc(50% - 26px);">' +
      '<span class="mask-eye l"></span><span class="mask-eye r"></span>' +
      '<span class="mask-grin"></span>' +
    '</div>' +
    '<span class="harlequin" style="top:10px; left:calc(50% - 60px);"></span>' +
    '<span class="harlequin" style="top:30px; left:calc(50% + 46px);"></span>' +
    '<span class="side-card" style="top:70px; left:calc(50% - 78px); transform:rotate(-16deg);"></span>' +
    '<span class="side-card" style="top:70px; left:calc(50% + 26px); transform:rotate(14deg);"></span>' +
    '<div class="joker-card" style="top:54px;">' +
      '<span class="joker-corner">J</span>' +
      '<span class="joker-diamond"></span>' +
    '</div>' +
    '<div class="jester-hat">' +
      '<span class="jhat a"></span><span class="jhat-bell" style="left:1px;"></span>' +
      '<span class="jhat b"></span><span class="jhat-bell" style="left:30px;"></span>' +
      '<span class="jhat c"></span><span class="jhat-bell" style="right:1px;"></span>' +
    '</div>' +
    particles('fall', ['12%','30%','70%','88%'], '#F2B84E');

  if (slug === 'zootopia') return '' +
    '<div class="fox-tail"></div>' +
    '<div class="fox-body"></div>' +
    '<div class="fox-ear l"></div><div class="fox-ear r"></div>' +
    '<div class="fox-head"></div><div class="fox-snout"></div>' +
    '<div class="rabbit-body"></div>' +
    '<div class="rabbit-ear l"></div><div class="rabbit-ear r"></div>' +
    '<div class="rabbit-head"></div>' +
    '<div class="paw-bump"></div>' +
    '<div class="skyline"><span style="height:30px;"></span><span style="height:46px;"></span><span style="height:24px;"></span><span style="height:38px;"></span><span style="height:20px;"></span></div>';

  if (slug === 'ravena') return '' +
    '<div class="hood-moon2"></div>' +
    '<span class="raven-big" style="top:76px; left:calc(50% - 96px); transform:scale(1.2);"></span>' +
    '<span class="cloak-wisp" style="top:120px; left:calc(50% - 60px); transform:rotate(-10deg);"></span>' +
    '<span class="cloak-wisp" style="top:120px; left:calc(50% + 30px); transform:rotate(10deg) scaleX(-1);"></span>' +
    '<div class="hood-shape"></div>' +
    '<span class="hood-gem" style="top:58px; left:calc(50% - 5px);"></span>' +
    '<div class="hood-face"></div>' +
    '<span class="sparkle" style="top:10%;left:18%;animation-delay:.3s;"></span>' +
    '<span class="sparkle" style="top:16%;left:80%;animation-delay:1.5s;"></span>' +
    '<span class="sparkle" style="top:38%;left:75%;animation-delay:.9s;"></span>';

  if (slug === 'tiana') return '' +
    '<span class="ripple" style="width:110px; height:26px; bottom:32px;"></span>' +
    '<span class="ripple" style="width:140px; height:32px; bottom:28px; opacity:.6;"></span>' +
    '<div class="note"></div>' +
    '<span class="note" style="top:36px; left:70%;"></span>' +
    '<div class="crown"></div>' +
    '<div class="frog-body" style="bottom:50px; left:calc(50% - 17px); z-index:2;">' +
      '<span class="frog-eye l"></span><span class="frog-eye r"></span>' +
      '<span class="frog-leg l"></span><span class="frog-leg r"></span>' +
    '</div>' +
    '<div class="lily"></div>' +
    '<span class="horn" style="bottom:36px; left:14%; transform:rotate(-8deg);"></span>' +
    particles('rise', ['15%','85%'], '#E8C468');

  if (slug === 'pooh') return '' +
    '<div class="pooh-tree"></div>' +
    '<span class="bee" style="top:60px; left:74%; animation:twinkle 2.2s ease-in-out infinite;"></span>' +
    '<span class="bee" style="top:78px; left:80%; animation:twinkle 2.6s ease-in-out infinite .4s;"></span>' +
    '<div class="bear-arm l"></div><div class="bear-arm r"></div>' +
    '<div class="bear-body"></div>' +
    '<div class="bear-ear l"></div><div class="bear-ear r"></div>' +
    '<div class="bear-head"></div><div class="bear-snout"></div>' +
    '<div class="honeypot"></div>';

  if (slug === 'belafera') return '' +
    '<span class="petal" style="top:10%; left:15%; animation:twinkle 3s ease-in-out infinite;"></span>' +
    '<span class="petal" style="top:22%; left:80%; animation:twinkle 3.4s ease-in-out infinite .5s;"></span>' +
    '<span class="petal" style="top:6%; left:60%; animation:twinkle 2.8s ease-in-out infinite 1s;"></span>' +
    '<div class="belacastle">' +
      '<span class="t l"></span><span class="win" style="left:6px; bottom:10px;"></span>' +
      '<span class="t m"></span><span class="win" style="left:30px; bottom:16px;"></span>' +
      '<span class="t r"></span>' +
    '</div>' +
    '<div class="beast-head" style="top:96px; left:calc(50% + 46px);">' +
      '<span class="beast-horn l"></span><span class="beast-horn r"></span>' +
    '</div>' +
    '<div class="dome"></div><div class="dome-rose"></div>' +
    '<span class="paw-print" style="bottom:14px; left:20%;"></span>';

  if (slug === 'aranha') return '' +
    '<div class="city-moon" style="top:8px; right:14%;"></div>' +
    '<div class="web"></div>' +
    '<span class="spider-body" style="top:100px; left:calc(50% - 7px);"></span>' +
    '<span class="spider-leg" style="top:104px; left:calc(50% - 20px); transform:rotate(20deg);"></span>' +
    '<span class="spider-leg" style="top:104px; left:calc(50% + 4px); transform:rotate(-20deg);"></span>' +
    '<span class="spider-leg" style="top:112px; left:calc(50% - 20px); transform:rotate(-10deg);"></span>' +
    '<span class="spider-leg" style="top:112px; left:calc(50% + 4px); transform:rotate(10deg);"></span>' +
    '<span class="swing-line" style="top:0; height:70px; left:22%;"></span>' +
    '<div class="swing-figure" style="top:66px; left:calc(22% - 7px);">' +
      '<span class="swing-head"></span><span class="swing-body"></span>' +
      '<span class="swing-arm" style="top:2px; left:-4px; transform:rotate(-30deg);"></span>' +
    '</div>' +
    '<div class="skyline"><span style="height:26px;"></span><span style="height:44px;"></span><span style="height:18px;"></span><span style="height:36px;"></span><span style="height:22px;"></span><span style="height:30px;"></span></div>';

  return '';
}
function particlesLayer(slug){
  if (slug === 'tiana')  return particles('rise', ['6%','94%'], '#E8C468');
  if (slug === 'aranha') return particles('rise', ['8%','92%'], '#8FB3E8');
  return '';
}
function miniIconHtml(icon){
  if (icon === 'braid')     return '<div class="icon-braid"></div>';
  if (icon === 'card')      return '<div class="icon-card"></div>';
  if (icon === 'foxrabbit') return '<div class="icon-foxrabbit"></div>';
  if (icon === 'hood')      return '<div class="icon-hood"></div>';
  if (icon === 'lily')      return '<div class="icon-lily"></div>';
  if (icon === 'bear')      return '<div class="icon-bear"></div>';
  if (icon === 'rosedome')  return '<div class="icon-rosedome"></div>';
  if (icon === 'web')       return '<div class="icon-web"></div>';
  return '';
}

/* ============================================================
   Páginas
   ============================================================ */
function renderHub(){
  return '' +
  '<div class="theme-hub">' +
    '<nav class="top-nav"><a href="#/">📖 contos de nós</a></nav>' +
    '<section class="hub-hero">' +
      '<span class="eyebrow on-dark">para ' + CONFIG.paraNome + '</span>' +
      '<h1 class="hub-title">' + CONFIG.hubTitulo + '</h1>' +
      '<p class="hub-sub">' + CONFIG.hubSubtitulo + '</p>' +
    '</section>' +
    '<section class="hub-grid-section"><div class="wrap"><div class="hub-grid">' +
      TALES.map(t =>
        '<a class="tale-card" href="#/' + t.slug + '">' +
          '<div class="tale-card-icon">' + miniIconHtml(t.icon) + '</div>' +
          '<h3 class="tale-card-title">' + t.nome + '</h3>' +
          '<p class="tale-card-teaser">' + t.teaser + '</p>' +
          '<span class="tale-card-go">ler esse conto →</span>' +
        '</a>'
      ).join('') +
    '</div></div></section>' +
    '<footer>de ' + CONFIG.deNome + ', com carinho. ✨</footer>' +
  '</div>';
}

function renderTale(slug){
  const tale = findTale(slug);
  if (!tale) return renderHub();
  const conteudo = CONFIG.contos[slug];
  const outros = TALES.filter(t => t.slug !== slug);

  return '' +
  '<div class="' + tale.theme + '">' +
    '<nav class="top-nav"><a href="#/">📖 contos de nós</a></nav>' +
    '<section class="hero">' +
      particlesLayer(slug) +
      '<div class="scene">' + sceneHtml(slug) + '</div>' +
      '<span class="eyebrow on-dark">' + tale.tema + '</span>' +
      '<h1 class="hero-title">' + conteudo.titulo + '</h1>' +
      '<span class="scroll-cue">role para ler ↓</span>' +
    '</section>' +
    '<section class="trait-section"><div class="wrap">' +
      '<div class="trait-card">' +
        '<div class="trait-card-icon">' + miniIconHtml(tale.icon) + '</div>' +
        '<h3 class="trait-card-name">' + tale.nome + '</h3>' +
        '<div class="trait-tags">' +
          conteudo.caracteristicas.map(c => '<span class="trait-tag">' + c + '</span>').join('') +
        '</div>' +
      '</div>' +
    '</div></section>' +
    '<section class="declaration-section"><div class="wrap">' +
      '<span class="eyebrow" style="display:block;text-align:center;margin-bottom:10px;">uma cartinha</span>' +
      '<div class="declaration-card">' +
        '<p class="letter-greeting">Minha Querida ' + CONFIG.paraNome + ',</p>' +
        '<p class="declaration-text">' + conteudo.declaracao + '</p>' +
        '<p class="declaration-sign">— ' + CONFIG.deNome + '</p>' +
      '</div>' +
    '</div></section>' +
    '<section class="page-nav">' +
      '<a class="back-btn" href="#/">← voltar pros contos</a>' +
      '<div class="other-tales">' +
        outros.map(t => '<a class="other-tale-pill" href="#/' + t.slug + '">' + t.nome + '</a>').join('') +
      '</div>' +
    '</section>' +
    '<footer>' + CONFIG.closingNote + '</footer>' +
  '</div>';
}
/* ============================================================
   Roteador
   ============================================================ */
const app = document.getElementById('app');
function currentSlug(){
  return (location.hash || '#/').replace(/^#\/?/, '');
}
function render(){
  const slug = currentSlug();
  app.innerHTML = slug ? renderTale(slug) : renderHub();
  window.scrollTo({ top: 0, behavior: 'instant' });
}
window.addEventListener('hashchange', render);
render();
