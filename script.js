"use strict";

/* =========================================================
   BANCO DE DADOS DAS OBRAS
   Os arquivos ficam na mesma pasta do index.html.
========================================================= */

const works = [
 {
   id: 1,
     work: "O Menino Maluquinho",
     author: "Ziraldo",
     image: "img01.jpg",
     theme: "Imaginação e autenticidade",

  idea:
    "Ser diferente não significa estar errado; criatividade e liberdade precisam caminhar com respeito.",

     trueStatement:
       "A obra permite refletir sobre autenticidade, criatividade, infância e convivência.",

   falseStatement:
    "A obra ensina que ser criativo significa ignorar limites e desrespeitar as outras pessoas."
 },

 {
     id: 2,
     work: "A Bolsa Amarela",
     author: "Lygia Bojunga",
     image: "img03.jpg",
     theme: "Desejos e identidade",

  idea:
    "Aquilo que sentimos precisa encontrar formas de expressão, escuta e construção de autonomia.",

     trueStatement:
       "A narrativa ajuda a discutir desejos, identidade, autonomia e o direito de ser ouvido.",

   falseStatement:
    "A mensagem principal é que crianças devem esconder seus sentimentos e abandonar seus sonhos."
 },

 {
     id: 3,
     work: "Marcelo, Marmelo, Martelo",
     author: "Ruth Rocha",
     image: "img05.jpg",
     theme: "Linguagem e construção de sentidos",

  idea:
    "As palavras ajudam a organizar o mundo, mas a comunicação depende de sentidos compartilhados.",

     trueStatement:
   "A obra estimula perguntas sobre as palavras, os nomes das coisas e as regras da comunicação.",

   falseStatement:
    "A obra afirma que as palavras surgem prontas na natureza e nunca podem ser questionadas."
 },

 {
     id: 4,
     work: "Reinações de Narizinho",
     author: "Monteiro Lobato",
     image: "img07.jpg",
     theme: "Imaginação, conhecimento e brasilidade",

  idea:
    "A fantasia pode produzir perguntas, hipóteses e novas maneiras de compreender a realidade.",

  trueStatement:
    "A imaginação aparece como uma possibilidade de aprendizagem e conhecimento simbólico.",

   falseStatement:
    "A obra defende que fantasia e conhecimento não podem existir na mesma experiência."
 },

 {
     id: 5,
     work: "O Pequeno Príncipe",
     author: "Antoine de Saint-Exupéry",
     image: "img09.jpg",
     theme: "Amizade e sentido da vida",

  idea:
    "Os vínculos se tornam especiais por meio do tempo, do cuidado, da confiança e da responsabilidade.",

  trueStatement:
    "A obra permite refletir sobre amizade, cuidado e responsabilidade pelos vínculos construídos.",

   falseStatement:
    "A obra ensina que uma amizade só é importante quando as pessoas vivem sempre no mesmo lugar."
 },
 {
     id: 6,
     work: "Alice no País das Maravilhas",
     author: "Lewis Carroll",
     image: "img11.jpg",
     theme: "Curiosidade e transformação",

  idea:
    "Questionar o mundo e enfrentar mudanças pode transformar a maneira como compreendemos nossa identidade.",

  trueStatement:
    "A narrativa relaciona curiosidade, mudança, identidade e questionamento de regras aparentemente naturais.",

   falseStatement:
    "A narrativa mostra que crescer exige parar de fazer perguntas e aceitar todas as regras sem pensar."
 },

 {
     id: 7,
     work: "Harry Potter e a Pedra Filosofal",
     author: "J. K. Rowling",
     image: "img13.jpg",
     theme: "Escolhas, coragem e poder",

  idea:
    "O valor de uma pessoa aparece nas escolhas e na maneira responsável como utiliza suas capacidades.",

  trueStatement:
    "A obra permite discutir coragem, amizade, preconceito, escolhas e responsabilidade no uso do poder.",

    falseStatement:
     "A obra afirma que possuir talento ou poder torna qualquer pessoa automaticamente justa e corajosa."
  },

 {
     id: 8,
     work: "Diário de um Banana",
     author: "Jeff Kinney",
     image: "img15.jpg",
     theme: "Imagem social e amadurecimento",

     idea:
   "Amadurecer envolve reconhecer falhas, assumir consequências e considerar os sentimentos dos outros.",

  trueStatement:
    "A narrativa possibilita refletir sobre popularidade, amizade, imagem social e responsabilidade.",

   falseStatement:
    "A narrativa apresenta a popularidade como motivo suficiente para prejudicar amigos e evitar consequências."
 },

 {
     id: 9,
     work: "Matilda",
     author: "Roald Dahl",
     image: "img17.jpg",
     theme: "Conhecimento e resistência",

  idea:
    "A leitura e o conhecimento podem fortalecer pessoas diante da injustiça e do abuso de autoridade.",

  trueStatement:
    "A obra ajuda a diferenciar autoridade, respeito e justiça, valorizando conhecimento e autonomia.",

    falseStatement:
     "A obra ensina que toda autoridade deve ser obedecida, mesmo quando age de maneira injusta."
  },

 {
     id: 10,
     work: "O Leão, a Feiticeira e o Guarda-Roupa",
     author: "C. S. Lewis",
     image: "img19.jpg",
     theme: "Lealdade e responsabilidade coletiva",

  idea:
    "Escolhas individuais afetam a comunidade, e a confiança pode ser reconstruída com responsabilidade e reparação.",

  trueStatement:
    "A narrativa permite discutir lealdade, tentação, responsabilidade, perdão e reconstrução da confiança.",

     falseStatement:
    "A narrativa afirma que perdoar significa apagar consequências e fingir que nenhum erro aconteceu."
  }
];

const imageResources = [
  "capa.jpg",
  "capa-2.jpg",
  ...works.map((item) => item.image)
];

/* =========================================================
   REFERÊNCIAS DO HTML
========================================================= */

const preloader =
 document.querySelector("#preloader");

const loadingBar =
 document.querySelector("#loadingBar");

const loadingText =
 document.querySelector("#loadingText");

const heroImage =
 document.querySelector("#heroImage");

const homeScreen =
 document.querySelector("#homeScreen");

const gameScreen =
 document.querySelector("#gameScreen");

const resultScreen =
 document.querySelector("#resultScreen");

const activityArea =
 document.querySelector("#activityArea");

const modeEyebrow =
 document.querySelector("#modeEyebrow");

const gameTitle =
 document.querySelector("#gameTitle");

const scoreText =
 document.querySelector("#scoreText");
const progressLabel =
 document.querySelector("#progressLabel");

const progressPercent =
 document.querySelector("#progressPercent");

const progressBar =
 document.querySelector("#progressBar");

const progressTrack =
 document.querySelector(
   ".progress-area .progress-track"
 );

const restartButton =
 document.querySelector("#restartButton");

const homeButton =
 document.querySelector("#homeButton");

const playAgainButton =
 document.querySelector("#playAgainButton");

const chooseModeButton =
 document.querySelector("#chooseModeButton");

const resultTitle =
 document.querySelector("#resultTitle");

const resultMessage =
 document.querySelector("#resultMessage");

const resultScore =
 document.querySelector("#resultScore");

const resultPercent =
 document.querySelector("#resultPercent");

const resultLevel =
 document.querySelector("#resultLevel");

const resultSymbol =
 document.querySelector("#resultSymbol");

const toast =
 document.querySelector("#toast");

/* =========================================================
 ESTADO GERAL
========================================================= */

let currentMode = null;
let orderedWorks = [];
let currentIndex = 0;
let score = 0;
let answered = false;
let selectedDraggable = null;
let toastTimer = null;

let authorRounds = [];
let currentAuthorRound = 0;
let authorSelections = new Map();
let authorResultScore = 0;

/* =========================================================
   FUNÇÕES UTILITÁRIAS
========================================================= */

function shuffle(items) {
 const copy = [...items];

    for (
     let index = copy.length - 1;
     index > 0;
     index -= 1
    ){
     const randomIndex =
       Math.floor(Math.random() * (index + 1));

        [
          copy[index],
          copy[randomIndex]
        ]=[
          copy[randomIndex],
          copy[index]
        ];
    }

    return copy;
}

function escapeHtml(value) {
 return String(value)
  .replaceAll("&", "&amp;")
     .replaceAll("<", "&lt;")
     .replaceAll(">", "&gt;")
     .replaceAll('"', "&quot;")
     .replaceAll("'", "&#039;");
}

function showScreen(screen) {
 [
   homeScreen,
   gameScreen,
   resultScreen
 ].forEach((item) => {
   item.hidden = item !== screen;
 });

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
}

function updateScore(value = score) {
  scoreText.textContent = String(value);
}

function updateProgress(
 completed,
 total,
 customLabel = null
){
 const safeTotal = Math.max(total, 1);

    const percent =
     Math.min(
       100,
       Math.round(
         (completed / safeTotal) * 100
       )
     );

    progressLabel.textContent =
     customLabel ??
     `Questão ${Math.min(completed + 1, total)} de ${total}`;

    progressPercent.textContent =
     `${percent}%`;

    progressBar.style.width =
     `${percent}%`;

    progressTrack.setAttribute(
      "aria-valuenow",
      String(percent)
    );
}

function showToast(message, type = "") {
 clearTimeout(toastTimer);

    toast.hidden = false;
    toast.textContent = message;
    toast.className =
     `toast ${type}`.trim();

    toastTimer =
     window.setTimeout(() => {
       toast.hidden = true;
     }, 2200);
}

function createImageMarkup(
  item,
  className = ""
){
  return `
    <div class="image-frame ${className}">
     <img
      src="${escapeHtml(item.image)}"
      alt="Imagem simbólica relacionada à obra ${escapeHtml(item.work)}"
      data-fallback-title="${escapeHtml(item.work)}"
     >
    </div>
  `;
}

function applyImageFallbacks(
 container = document
){
 container
   .querySelectorAll(
     "img[data-fallback-title]"
   )
   .forEach((image) => {
     image.addEventListener(
       "error",
       () => {
           const placeholder =
            document.createElement("div");

           placeholder.className =
            "image-placeholder";

           placeholder.textContent =
            image.dataset.fallbackTitle ||
            "Imagem da obra";

              image.replaceWith(placeholder);
            },
            {
              once: true
            }
          );
        });
}

function getLevel(percent) {
 if (percent >= 90) {
   return {
     level: "Excelente",
     symbol: "✦",

          message:
           "Você demonstrou ótimo domínio das relações entre imagens, obras e autores."
        };
    }

    if (percent >= 70) {
      return {
        level: "Muito bom",
        symbol: "★",

     message:
      "Você reconheceu a maior parte das relações literárias e está avançando com segurança."
   };
 }

    if (percent >= 50) {
      return {
        level: "Em desenvolvimento",
        symbol: "◆",

         message:
      "Você já construiu boas relações. Uma nova rodada ajudará a consolidar os conhecimentos."
   };
 }

    return {
     level: "Em construção",
     symbol: "●",

    message:
     "Continue explorando as imagens e informações. Cada tentativa amplia sua leitura das obras."
  };
}

function finishActivity(
 finalScore = score,
 total = 10
){
 const percent =
   Math.round(
     (finalScore / total) * 100
   );

    const evaluation =
     getLevel(percent);

    resultTitle.textContent =
     modeConfig[currentMode].resultTitle;

    resultMessage.textContent =
     evaluation.message;

    resultScore.textContent =
     `${finalScore}/${total}`;

    resultPercent.textContent =
     `${percent}%`;

    resultLevel.textContent =
     evaluation.level;

    resultSymbol.textContent =
     evaluation.symbol;

    showScreen(resultScreen);
}
/* =========================================================
   CONFIGURAÇÃO DOS MODOS
========================================================= */

const modeConfig = {
 drag: {
  eyebrow:
   "DESAFIO 01 — LEITURA DE IMAGENS",

    title:
      "ARRASTE A INFORMAÇÃO PARA A IMAGEM",

  resultTitle:
   "Leitura visual concluída"
},

truefalse: {
  eyebrow:
   "DESAFIO 02 — INTERPRETAÇÃO",

    title:
      "ABRA A IMAGEM: VERDADEIRO OU FALSO",

  resultTitle:
   "Verdadeiro ou falso concluído"
},

author: {
 eyebrow:
  "DESAFIO 03 — AUTORES E OBRAS",

    title:
      "RELACIONE CADA AUTOR À SUA OBRA",

  resultTitle:
   "Autores e obras relacionados"
},

memory: {
 eyebrow:
  "DESAFIO 04 — JOGO DA MEMÓRIA",

    title:
      "ENCONTRE OS PARES DAS OBRAS",

    resultTitle:
     "Jogo da memória concluído"
}
};

function startMode(mode) {
 currentMode = mode;
 orderedWorks = shuffle(works);
 currentIndex = 0;
 score = 0;
 answered = false;
 selectedDraggable = null;

    modeEyebrow.textContent =
     modeConfig[mode].eyebrow;

    gameTitle.textContent =
     modeConfig[mode].title;

    updateScore(0);
    showScreen(gameScreen);

    if (mode === "drag") {
      renderDragQuestion();
    } else if (mode === "truefalse") {
      renderTrueFalseQuestion();
    } else if (mode === "memory") {
      startMemoryGame();
    } else {
      setupAuthorMode();
    }
}

/* =========================================================
   MODO 1 — ARRASTE A INFORMAÇÃO
========================================================= */

function getDragOptions(item) {
 const distractors =
  shuffle(
    works.filter(
      (workItem) =>
        workItem.id !== item.id
    )
  )
    .slice(0, 2)
    .map((workItem) => ({
      id: workItem.id,
      text: workItem.idea,
      correct: false
    }));
    return shuffle([
     ...distractors,

     {
          id: item.id,
          text: item.idea,
          correct: true
      }
    ]);
}

function renderDragQuestion() {
 answered = false;
 selectedDraggable = null;

    const item =
     orderedWorks[currentIndex];

    const options =
     getDragOptions(item);

    updateProgress(
      currentIndex,
      works.length
    );

    activityArea.innerHTML = `
     <div class="challenge-shell">

          <p class="challenge-instruction">
           Observe a imagem. Arraste a informação correta
           para a imagem ou toque primeiro na informação
           e depois na imagem.
          </p>

          <div class="drag-layout">

           <div>

            <div
             id="dragTarget"
             class="drag-target"
             data-correct-id="${item.id}"
             tabindex="0"
             role="button"
             aria-label="Área para receber a informação selecionada"
            >
   ${createImageMarkup(item)}

   <div class="drop-overlay">
    SOLTE OU TOQUE AQUI
   </div>
  </div>

 </div>

 <div>

  <div
   id="dragOptions"
   class="drag-options"
  >
   ${options.map((option) => `
     <button
       class="info-card"
       type="button"
       draggable="true"
       data-option-id="${option.id}"
       data-correct="${option.correct}"
     >
       ${escapeHtml(option.text)}
     </button>
   `).join("")}
  </div>

  <div id="dragFeedback"></div>

 </div>
</div>
      </div>
    `;

    applyImageFallbacks(activityArea);
    bindDragQuestion(item);
}

function bindDragQuestion(item) {
 const target =
  document.querySelector(
    "#dragTarget"
  );

    const optionButtons = [
      ...document.querySelectorAll(
        ".info-card"
      )
    ];

    optionButtons.forEach((button) => {
     button.addEventListener(
      "dragstart",
      (event) => {
        if (answered) {
          event.preventDefault();
          return;
        }

           event.dataTransfer.setData(
             "text/plain",
             button.dataset.optionId
           );

           event.dataTransfer.effectAllowed =
            "move";

           selectDraggable(button);
       }
     );

     button.addEventListener(
      "click",
      () => {
        if (!answered) {
          selectDraggable(button);

            showToast(
             "Informação selecionada. Agora toque na imagem."
              );
          }
    }
  );
});

target.addEventListener(
 "dragover",
 (event) => {
   if (!answered) {
     event.preventDefault();

          target.classList.add(
            "is-over"
          );
      }
  }
);

target.addEventListener(
  "dragleave",
  () => {
    target.classList.remove(
      "is-over"
    );
  }
);

target.addEventListener(
 "drop",
 (event) => {
   event.preventDefault();

      target.classList.remove(
        "is-over"
      );

      if (answered) {
        return;
      }

      const optionId =
       event.dataTransfer.getData(
         "text/plain"
       );

      const selected =
       optionButtons.find(
         (button) =>
          button.dataset.optionId ===
          optionId
       );

      if (selected) {
        evaluateDragAnswer(
          selected,
          item
        );
      }
  }
);

target.addEventListener(
  "click",
  () => {
    if (
      !answered &&
      selectedDraggable
    ){
      evaluateDragAnswer(
         selectedDraggable,
         item
      );
    } else if (!answered) {
      showToast(
         "Escolha primeiro uma das informações."
      );
    }
  }
);

target.addEventListener(
 "keydown",
 (event) => {
   if (
     (
        event.key === "Enter" ||
        event.key === " "
     ) &&
     !answered
   ){
     event.preventDefault();

       if (selectedDraggable) {
         evaluateDragAnswer(
           selectedDraggable,
                  item
                );
              } else {
                showToast(
                  "Escolha primeiro uma das informações."
                );
              }
          }
      }
    );
}

function selectDraggable(element) {
 document
  .querySelectorAll(
    ".info-card, .author-chip"
  )
  .forEach((item) => {
    item.classList.remove(
      "is-selected"
    );
  });

    selectedDraggable = element;

    element.classList.add(
      "is-selected"
    );
}

function evaluateDragAnswer(
 selected,
 item
){
 answered = true;

    const isCorrect =
     selected.dataset.correct ===
     "true";

    const feedback =
     document.querySelector(
       "#dragFeedback"
     );

    const dragTarget =
     document.querySelector(
       "#dragTarget"
     );

    const dropOverlay =
     dragTarget?.querySelector(
       ".drop-overlay"
     );

const optionButtons = [
  ...document.querySelectorAll(
    ".info-card"
  )
];

if (isCorrect) {
  score += 1;

  selected.classList.add(
    "correct-option"
  );

  if (dropOverlay) {
    dropOverlay.hidden = true;
  }

  dragTarget?.removeAttribute(
    "role"
  );

  dragTarget?.removeAttribute(
    "tabindex"
  );
} else {
  selected.classList.add(
    "wrong-option"
  );

    optionButtons
     .find(
       (button) =>
         button.dataset.correct ===
         "true"
     )
     ?.classList.add(
       "correct-option"
     );
}

optionButtons.forEach((button) => {
  button.disabled = true;
  button.draggable = false;
});

feedback.innerHTML = isCorrect
 ? `
   <div class="next-row">

    <button
     id="nextDragButton"
     class="button button-primary"
     type="button"
    >
     ${
       currentIndex ===
       works.length - 1

        ? "VER RESULTADO"
        : "PRÓXIMA IMAGEM"
     }
    </button>

   </div>
  `
 : `
   <div class="feedback-panel wrong">

    <strong>
     Observe a relação correta.
    </strong>

    <p>
     <b>${escapeHtml(item.work)}</b>:
     ${escapeHtml(item.idea)}
    </p>

   </div>

   <div class="next-row">

    <button
     id="nextDragButton"
     class="button button-primary"
     type="button"
    >
     ${
       currentIndex ===
       works.length - 1

        ? "VER RESULTADO"
        : "PRÓXIMA IMAGEM"
     }
    </button>

   </div>
  `;

updateScore();

updateProgress(
  currentIndex + 1,
  works.length,
  `Questão ${currentIndex + 1} de ${works.length}`
);

document
 .querySelector(
   "#nextDragButton"
 )
 .addEventListener(
   "click",
   () => {
     currentIndex += 1;

    if (
      currentIndex >=
      works.length
    ){
      finishActivity(
         score,
               works.length
             );
           } else {
             renderDragQuestion();
           }
       }
     );
}

/* =========================================================
   MODO 2 — VERDADEIRO OU FALSO
========================================================= */

function renderTrueFalseQuestion() {
 answered = false;

    const item =
     orderedWorks[currentIndex];

    const statementIsTrue =
     Math.random() >= 0.5;

    const statement =
     statementIsTrue
      ? item.trueStatement
      : item.falseStatement;

    updateProgress(
      currentIndex,
      works.length
    );

    activityArea.innerHTML = `
     <div class="challenge-shell">

      <p class="challenge-instruction">
       Primeiro, abra a imagem. Em seguida,
       leia a afirmação e escolha VERDADEIRO
       ou FALSO.
      </p>

      <div class="tf-layout">

           <div>

            <div
             id="flipCard"
             class="flip-card"
 >
  <div class="flip-card-inner">

   <div class="flip-face flip-front">
    <img
     src="capa.jpg"
     alt="Face fechada da carta literária"
    >
   </div>

   <div class="flip-face flip-back">
    <img
     src="${escapeHtml(item.image)}"
     alt="Imagem simbólica relacionada à obra ${escapeHtml(item.work)}"
     data-fallback-title="${escapeHtml(item.work)}"
    >
   </div>

  </div>
 </div>

 <button
  id="openCardButton"
  class="button button-light open-card-button"
  type="button"
 >
  ABRIR IMAGEM
 </button>

</div>

<div
 id="tfQuestion"
 class="tf-question"
 hidden
>
 <p class="eyebrow">
   OBRA REVELADA
 </p>

 <h3>
  ${escapeHtml(item.work)}
 </h3>

 <div class="statement-box">
  ${escapeHtml(statement)}
 </div>
     <div class="tf-buttons">

      <button
       class="button tf-button tf-true"
       type="button"
       data-answer="true"
      >
       VERDADEIRO
      </button>

      <button
       class="button tf-button tf-false"
       type="button"
       data-answer="false"
      >
       FALSO
      </button>

     </div>

     <div id="tfFeedback"></div>

    </div>
   </div>
  </div>
`;

applyImageFallbacks(activityArea);

const flipCard =
 document.querySelector(
   "#flipCard"
 );

const openCardButton =
 document.querySelector(
   "#openCardButton"
 );

const tfQuestion =
 document.querySelector(
   "#tfQuestion"
 );

openCardButton.addEventListener(
 "click",
 () => {
   flipCard.classList.add(
            "is-open"
          );

          openCardButton.hidden = true;

          window.setTimeout(() => {
           tfQuestion.hidden = false;

            tfQuestion.scrollIntoView({
              behavior: "smooth",
              block: "nearest"
            });
          }, 350);
      }
    );

    document
     .querySelectorAll(
       ".tf-button"
     )
     .forEach((button) => {
       button.addEventListener(
         "click",
         () => {
           if (!answered) {
             evaluateTrueFalse(
               button.dataset.answer ===
                 "true",

                   statementIsTrue,
                   item
                 );
             }
         }
       );
     });
}

function evaluateTrueFalse(
 answer,
 statementIsTrue,
 item
){
 answered = true;

    const isCorrect =
     answer === statementIsTrue;
const feedback =
 document.querySelector(
   "#tfFeedback"
 );

if (isCorrect) {
  score += 1;
}

document
 .querySelectorAll(
   ".tf-button"
 )
 .forEach((button) => {
   button.disabled = true;
 });

feedback.innerHTML = `
 <div class="feedback-panel ${isCorrect ? "correct" : "wrong"}">

  <strong>
   ${
     isCorrect
       ? "Resposta correta!"
       : "Resposta incorreta."
   }
  </strong>

  <p>
   <b>${escapeHtml(item.author)}</b>
   é o autor de
   <b>${escapeHtml(item.work)}</b>.

   Tema:
   ${escapeHtml(item.theme)}.
  </p>

 </div>

 <div class="next-row">

  <button
   id="nextTfButton"
   class="button button-primary"
   type="button"
  >
   ${
     currentIndex ===
            works.length - 1

             ? "VER RESULTADO"
             : "PRÓXIMA OBRA"
       }
      </button>

      </div>
    `;

    updateScore();

    updateProgress(
      currentIndex + 1,
      works.length,
      `Questão ${currentIndex + 1} de ${works.length}`
    );

    document
     .querySelector(
       "#nextTfButton"
     )
     .addEventListener(
       "click",
       () => {
         currentIndex += 1;

           if (
             currentIndex >=
             works.length
           ){
             finishActivity(
                score,
                works.length
             );
           } else {
             renderTrueFalseQuestion();
           }
       }
     );
}

/* =========================================================
   MODO 3 — RELACIONE AUTOR E OBRA
   As respostas são registradas sem correção imediata.
   O total de acertos e o gabarito aparecem somente no final.
========================================================= */

function setupAuthorMode() {
 const shuffled =
  shuffle(works);

 authorRounds = [
  shuffled.slice(0, 5),
  shuffled.slice(5, 10)
 ];

 currentAuthorRound = 0;
 authorSelections = new Map();
 authorResultScore = 0;
 selectedDraggable = null;

 updateScore(0);
 renderAuthorRound();
}

function renderAuthorRound() {
 const roundItems =
  authorRounds[currentAuthorRound];

 const authorOrder =
  shuffle(roundItems);

 const workOrder =
  shuffle(roundItems);

 selectedDraggable = null;

 const completed =
  authorSelections.size;

 updateProgress(
  completed,
  works.length,
  `Rodada ${currentAuthorRound + 1} de 2 • ${completed}/10 relações preenchidas`
 );

 activityArea.innerHTML = `
  <div class="challenge-shell author-shell">

   <div class="author-round-title">
    <p class="eyebrow">
     RODADA ${currentAuthorRound + 1} DE 2
    </p>

    <h3>
     Arraste cada autor para a obra correspondente
    </h3>
   </div>

   <p class="challenge-instruction">
    No celular, toque em um autor e depois toque na obra.
    As respostas serão reveladas somente ao final do desafio.
    Para alterar uma resposta, toque na obra preenchida e escolha novamente.
   </p>

   <div class="match-layout">

    <section
     class="author-bank"
     aria-label="Autores disponíveis"
    >
     <p class="panel-heading">
      AUTORES
     </p>

     ${authorOrder.map((item) => `
       <button
        class="author-chip"
        type="button"
        draggable="true"
        data-author-id="${item.id}"
       >
        ${escapeHtml(item.author)}
       </button>
     `).join("")}
    </section>

    <section
     class="work-list"
     aria-label="Obras para relacionar"
    >
     <p class="panel-heading">
      OBRAS
     </p>

     ${workOrder.map((item) => `
       <article
        class="work-drop"
        data-work-id="${item.id}"
        data-assigned-author-id=""
        tabindex="0"
        role="button"
        aria-label="Relacionar autor à obra ${escapeHtml(item.work)}"
       >
        <div class="work-thumb">
         <img
          src="${escapeHtml(item.image)}"
          alt="Imagem relacionada à obra ${escapeHtml(item.work)}"
          data-fallback-title="${escapeHtml(item.work)}"
         >
        </div>

        <div class="work-copy">
         <strong>
          ${escapeHtml(item.work)}
         </strong>

         <span>
          Solte ou toque com o autor selecionado
         </span>
        </div>
       </article>
     `).join("")}
    </section>
   </div>

   <div
    id="authorRoundActions"
    class="round-actions"
   ></div>
  </div>
 `;

 applyImageFallbacks(activityArea);
 bindAuthorRound(roundItems);
 updateAuthorRoundActions(roundItems);
}

function bindAuthorRound(roundItems) {
 const authorButtons = [
  ...document.querySelectorAll(
   ".author-chip"
  )
 ];

 const workTargets = [
  ...document.querySelectorAll(
   ".work-drop"
  )
 ];

 authorButtons.forEach((button) => {
  button.addEventListener(
   "dragstart",
   (event) => {
    if (
     button.classList.contains(
      "is-assigned"
     )
    ){
     event.preventDefault();
     return;
    }

    event.dataTransfer.setData(
     "text/plain",
     button.dataset.authorId
    );

    event.dataTransfer.effectAllowed =
     "move";

    selectDraggable(button);
   }
  );

  button.addEventListener(
   "click",
   () => {
    if (
     button.classList.contains(
      "is-assigned"
     )
    ){
     return;
    }

    selectDraggable(button);

    showToast(
     "Autor selecionado. Agora toque na obra correspondente."
    );
   }
  );
 });

 workTargets.forEach((target) => {
  target.addEventListener(
   "dragover",
   (event) => {
    event.preventDefault();

    target.classList.add(
     "is-over"
    );
   }
  );

  target.addEventListener(
   "dragleave",
   () => {
    target.classList.remove(
     "is-over"
    );
   }
  );

  target.addEventListener(
   "drop",
   (event) => {
    event.preventDefault();

    target.classList.remove(
     "is-over"
    );

    const authorId =
     event.dataTransfer.getData(
      "text/plain"
     );

    const authorButton =
     authorButtons.find(
      (button) =>
       button.dataset.authorId ===
       authorId
     );

    if (authorButton) {
     registerAuthorSelection(
      authorButton,
      target,
      roundItems,
      authorButtons,
      workTargets
     );
    }
   }
  );

  target.addEventListener(
   "click",
   () => {
    if (
     selectedDraggable
      ?.classList
      .contains("author-chip")
    ){
     registerAuthorSelection(
      selectedDraggable,
      target,
      roundItems,
      authorButtons,
      workTargets
     );
    } else if (
     target.dataset.assignedAuthorId
    ){
     removeAuthorSelection(
      target,
      roundItems,
      authorButtons
     );
    } else {
     showToast(
      "Escolha primeiro um autor."
     );
    }
   }
  );

  target.addEventListener(
   "keydown",
   (event) => {
    if (
     event.key !== "Enter" &&
     event.key !== " "
    ){
     return;
    }

    event.preventDefault();

    if (
     selectedDraggable
      ?.classList
      .contains("author-chip")
    ){
     registerAuthorSelection(
      selectedDraggable,
      target,
      roundItems,
      authorButtons,
      workTargets
     );
    } else if (
     target.dataset.assignedAuthorId
    ){
     removeAuthorSelection(
      target,
      roundItems,
      authorButtons
     );
    } else {
     showToast(
      "Escolha primeiro um autor."
     );
    }
   }
  );
 });
}

function registerAuthorSelection(
 authorButton,
 workTarget,
 roundItems,
 authorButtons,
 workTargets
){
 const authorId =
  Number(
   authorButton.dataset.authorId
  );

 const workId =
  Number(
   workTarget.dataset.workId
  );

 const authorItem =
  roundItems.find(
   (item) =>
    item.id === authorId
  );

 if (
  !authorItem ||
  authorButton.classList.contains(
   "is-assigned"
  )
 ){
  return;
 }

 const previousAuthorId =
  Number(
   workTarget.dataset.assignedAuthorId
  );

 if (previousAuthorId) {
  const previousButton =
   authorButtons.find(
    (button) =>
     Number(button.dataset.authorId) ===
     previousAuthorId
   );

  previousButton
   ?.classList
   .remove("is-assigned");
 }

 const previousTarget =
  workTargets.find(
   (target) =>
    Number(target.dataset.assignedAuthorId) ===
    authorId
  );

 if (
  previousTarget &&
  previousTarget !== workTarget
 ){
  clearAuthorTarget(
   previousTarget,
   roundItems
  );
 }

 authorSelections.set(
  workId,
  authorId
 );

 workTarget.dataset.assignedAuthorId =
  String(authorId);

 workTarget.classList.add(
  "has-answer"
 );

 const answerText =
  workTarget.querySelector(
   ".work-copy span"
  );

 answerText.className =
  "registered-author";

 answerText.textContent =
  `${authorItem.author} • toque para alterar`;

 authorButton.classList.add(
  "is-assigned"
 );

 authorButton.classList.remove(
  "is-selected"
 );

 selectedDraggable = null;

 const completed =
  authorSelections.size;

 updateProgress(
  completed,
  works.length,
  `Rodada ${currentAuthorRound + 1} de 2 • ${completed}/10 relações preenchidas`
 );

 updateAuthorRoundActions(roundItems);

 showToast(
  "Resposta registrada. O resultado será revelado no final."
 );
}

function removeAuthorSelection(
 workTarget,
 roundItems,
 authorButtons
){
 const workId =
  Number(
   workTarget.dataset.workId
  );

 const authorId =
  Number(
   workTarget.dataset.assignedAuthorId
  );

 if (!authorId) {
  return;
 }

 authorSelections.delete(
  workId
 );

 const authorButton =
  authorButtons.find(
   (button) =>
    Number(button.dataset.authorId) ===
    authorId
  );

 authorButton
  ?.classList
  .remove("is-assigned");

 clearAuthorTarget(
  workTarget,
  roundItems
 );

 selectedDraggable = null;

 const completed =
  authorSelections.size;

 updateProgress(
  completed,
  works.length,
  `Rodada ${currentAuthorRound + 1} de 2 • ${completed}/10 relações preenchidas`
 );

 updateAuthorRoundActions(roundItems);

 showToast(
  "Resposta retirada. Escolha outro autor."
 );
}

function clearAuthorTarget(
 workTarget,
 roundItems
){
 const workId =
  Number(
   workTarget.dataset.workId
  );

 const workItem =
  roundItems.find(
   (item) =>
    item.id === workId
  );

 workTarget.dataset.assignedAuthorId =
  "";

 workTarget.classList.remove(
  "has-answer"
 );

 const answerText =
  workTarget.querySelector(
   ".work-copy span"
  );

 answerText.className = "";
 answerText.textContent =
  "Solte ou toque com o autor selecionado";

 if (!workItem) {
  return;
 }
}

function updateAuthorRoundActions(
 roundItems
){
 const actions =
  document.querySelector(
   "#authorRoundActions"
  );

 if (!actions) {
  return;
 }

 const roundIsComplete =
  roundItems.every(
   (item) =>
    authorSelections.has(item.id)
  );

 if (!roundIsComplete) {
  actions.innerHTML = "";
  return;
 }

 const isLastRound =
  currentAuthorRound ===
  authorRounds.length - 1;

 actions.innerHTML = `
  <button
   id="nextAuthorRoundButton"
   class="button button-primary"
   type="button"
  >
   ${
    isLastRound
     ? "FINALIZAR RESPOSTAS"
     : "INICIAR RODADA 2"
   }
  </button>
 `;

 document
  .querySelector(
   "#nextAuthorRoundButton"
  )
  .addEventListener(
   "click",
   () => {
    if (isLastRound) {
     showAuthorFinalSummary();
    } else {
     currentAuthorRound += 1;
     renderAuthorRound();
    }
   }
  );
}

function showAuthorFinalSummary() {
 authorResultScore =
  works.reduce(
   (total, item) =>
    total + (
     authorSelections.get(item.id) ===
     item.id
      ? 1
      : 0
    ),
   0
  );

 score = authorResultScore;
 updateScore(score);

 updateProgress(
  works.length,
  works.length,
  "10 relações respondidas • resultado final"
 );

 modeEyebrow.textContent =
  "DESAFIO 03 — RESULTADO FINAL";

 gameTitle.textContent =
  "AUTORES E OBRAS";

 activityArea.innerHTML = `
  <div class="challenge-shell author-result-shell">
   <div class="author-final-summary">
    <p class="eyebrow">
     ATIVIDADE CONCLUÍDA
    </p>

    <h3>
     Você acertou ${authorResultScore} de ${works.length} relações
    </h3>

    <div
     class="author-score-box"
     aria-label="Número de acertos"
    >
     <span>NÚMERO DE ACERTOS</span>
     <strong>
      ${authorResultScore}/${works.length}
     </strong>
    </div>

    <p>
     As respostas permaneceram ocultas durante as duas rodadas.
     Selecione o botão abaixo para conferir cada relação.
    </p>

    <button
     id="showAnswerKeyButton"
     class="button button-primary"
     type="button"
    >
     VER GABARITO
    </button>
   </div>

   <section
    id="authorAnswerKey"
    class="author-answer-key"
    aria-label="Gabarito de autores e obras"
    hidden
   ></section>
  </div>
 `;

 document
  .querySelector(
   "#showAnswerKeyButton"
  )
  .addEventListener(
   "click",
   renderAuthorAnswerKey
  );
}

function renderAuthorAnswerKey() {
 const answerKey =
  document.querySelector(
   "#authorAnswerKey"
  );

 const showButton =
  document.querySelector(
   "#showAnswerKeyButton"
  );

 answerKey.innerHTML = `
  <div class="answer-key-heading">
   <p class="eyebrow">
    GABARITO COMPLETO
   </p>

   <h3>
    Confira as dez relações
   </h3>
  </div>

  <div class="answer-key-list">
   ${works.map((item) => {
    const selectedAuthorId =
     authorSelections.get(item.id);

    const selectedAuthor =
     works.find(
      (workItem) =>
       workItem.id ===
       selectedAuthorId
     );

    const isCorrect =
     selectedAuthorId === item.id;

    return `
     <article
      class="answer-key-card ${isCorrect ? "is-correct" : "is-wrong"}"
     >
      <div class="answer-key-image">
       <img
        src="${escapeHtml(item.image)}"
        alt="Imagem relacionada à obra ${escapeHtml(item.work)}"
        data-fallback-title="${escapeHtml(item.work)}"
       >
      </div>

      <div class="answer-key-copy">
       <strong>
        ${escapeHtml(item.work)}
       </strong>

       ${
        isCorrect
         ? `
          <span>
           Autor: ${escapeHtml(item.author)}
          </span>
         `
         : `
          <span>
           Sua resposta: ${escapeHtml(selectedAuthor?.author ?? "Não respondida")}
          </span>

          <span class="correct-author-answer">
           Autor correto: ${escapeHtml(item.author)}
          </span>
         `
       }
      </div>

      <div
       class="answer-status-icon"
       aria-label="${isCorrect ? "Resposta correta" : "Resposta errada"}"
       title="${isCorrect ? "Resposta correta" : "Resposta errada"}"
      >
       ${isCorrect ? "✓" : "✕"}
      </div>
     </article>
    `;
   }).join("")}
  </div>

  <div class="answer-key-actions">
   <button
    id="playAuthorAgainButton"
    class="button button-primary"
    type="button"
   >
    JOGAR NOVAMENTE
   </button>

   <button
    id="chooseAnotherModeButton"
    class="button button-light"
    type="button"
   >
    ESCOLHER OUTRO DESAFIO
   </button>
  </div>
 `;

 answerKey.hidden = false;
 showButton.hidden = true;

 applyImageFallbacks(answerKey);

 document
  .querySelector(
   "#playAuthorAgainButton"
  )
  .addEventListener(
   "click",
   () => startMode("author")
  );

 document
  .querySelector(
   "#chooseAnotherModeButton"
  )
  .addEventListener(
   "click",
   () => {
    currentMode = null;
    showScreen(homeScreen);
   }
  );

 answerKey.scrollIntoView({
  behavior: "smooth",
  block: "start"
 });
}

/* =========================================================
   MODO 4 — JOGO DA MEMÓRIA
========================================================= */

let memoryDeck = [];
let memoryFirstPick = null;
let memorySecondPick = null;
let memoryLock = false;
let memoryMatches = 0;
let memoryAttempts = 0;

function startMemoryGame() {
 memoryFirstPick = null;
 memorySecondPick = null;
 memoryLock = false;
 memoryMatches = 0;
 memoryAttempts = 0;

    const pairs = works.flatMap((item, index) => [
     { key: `${item.id}-a`, workId: item.id, item },
  { key: `${item.id}-b`, workId: item.id, item }
]);

memoryDeck = shuffle(pairs);

updateScore(0);
updateMemoryProgress();

activityArea.innerHTML = `
 <div class="challenge-shell memory-shell">

  <p class="challenge-instruction memory-instruction">
   Vire duas cartas por vez e encontre as ilustrações que
   se repetem. Observe somente as imagens das cartas.
  </p>

  <div class="memory-stats">
   <span>Pares <strong id="memoryMatches">0/10</strong></span>
   <span>Tentativas <strong id="memoryAttempts">0</strong></span>
  </div>

  <div class="memory-grid" id="memoryGrid">
   ${memoryDeck.map((card, index) => `
     <button
       class="memory-card"
       type="button"
       data-index="${index}"
       data-work-id="${card.workId}"
       aria-label="Carta ${index + 1}"
     >
       <div class="memory-card-inner">
         <div class="memory-back">
          <span class="memory-back-mark">✦</span>
         </div>
         <figure class="memory-face">
          <img
            src="${escapeHtml(card.item.image)}"
            alt="Imagem da carta do jogo da memória"
            data-fallback-title="Imagem da carta"
          >
         </figure>
       </div>
     </button>
   `).join("")}
       </div>
      </div>
    `;

    applyImageFallbacks(activityArea);

    document
     .querySelectorAll("#memoryGrid .memory-card")
     .forEach((card) => {
       card.addEventListener("click", () => handleMemoryFlip(card));
     });
}

function updateMemoryProgress() {
 updateProgress(
   memoryMatches,
   works.length,
   `Pares encontrados ${memoryMatches} de ${works.length}`
 );

    const matchesEl = document.querySelector("#memoryMatches");
    const attemptsEl = document.querySelector("#memoryAttempts");

    if (matchesEl) {
      matchesEl.textContent = `${memoryMatches}/${works.length}`;
    }

    if (attemptsEl) {
      attemptsEl.textContent = String(memoryAttempts);
    }
}

function handleMemoryFlip(card) {
 if (memoryLock) return;
 if (card.classList.contains("is-flipped")) return;
 if (card.classList.contains("is-matched")) return;

    card.classList.add("is-flipped");

    if (!memoryFirstPick) {
      memoryFirstPick = card;
      return;
    }

    memorySecondPick = card;
    memoryLock = true;
    memoryAttempts += 1;
    const firstId = memoryFirstPick.dataset.workId;
    const secondId = memorySecondPick.dataset.workId;

    if (firstId === secondId) {
      window.setTimeout(() => {
        memoryFirstPick.classList.add("is-matched");
        memorySecondPick.classList.add("is-matched");
        memoryMatches += 1;
        score = memoryMatches;

         updateScore(score);
         updateMemoryProgress();

         showToast("Par encontrado!", "toast-success");

         memoryFirstPick = null;
         memorySecondPick = null;
         memoryLock = false;

        if (memoryMatches >= works.length) {
          window.setTimeout(() => {
            finishActivity(score, works.length);
          }, 900);
        }
      }, 320);
    } else {
      updateMemoryProgress();

        window.setTimeout(() => {
          memoryFirstPick.classList.remove("is-flipped");
          memorySecondPick.classList.remove("is-flipped");
          memoryFirstPick = null;
          memorySecondPick = null;
          memoryLock = false;
        }, 900);
    }
}

/* =========================================================
   EVENTOS GERAIS
========================================================= */


document
 .querySelectorAll(
   ".mode-card"
 )
 .forEach((button) => {
   button.addEventListener(
     "click",
     () => {
       startMode(
         button.dataset.mode
       );
     }
   );
 });

restartButton.addEventListener(
  "click",
  () => {
    if (currentMode) {
      startMode(currentMode);
    }
  }
);

homeButton.addEventListener(
  "click",
  () => {
    currentMode = null;
    showScreen(homeScreen);
  }
);

playAgainButton.addEventListener(
  "click",
  () => {
    if (currentMode) {
      startMode(currentMode);
    }
  }
);

chooseModeButton.addEventListener(
  "click",
  () => {
    currentMode = null;
    showScreen(homeScreen);
  }
);

/* =========================================================
   CARREGAMENTO DAS IMAGENS
========================================================= */
function preloadImages() {
 let completed = 0;

 const updateLoading = () => {
  completed += 1;

  const percent =
   Math.round(
     (
       completed /
       imageResources.length
     ) * 100
   );

  loadingBar.style.width =
    `${percent}%`;

  loadingText.textContent =
    `${completed} de ${imageResources.length} recursos preparados`;

  if (
    completed >=
    imageResources.length
  ){
    window.setTimeout(() => {
       preloader.classList.add(
         "is-hidden"
       );

         window.setTimeout(() => {
           preloader.hidden = true;
         }, 400);
       }, 350);
   }
 };

 imageResources.forEach(
  (source) => {
   const image =
     new Image();

       image.onload =
        updateLoading;

       image.onerror =
        updateLoading;

       image.src =
          source;
      }
    );
}

heroImage.addEventListener(
  "error",
  () => {
    heroImage.alt =
     "Imagem capa.jpg não encontrada. Coloque o arquivo na mesma pasta do site.";
  }
);

preloadImages();