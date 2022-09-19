import Heading from "@tiptap/extension-heading";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import ListItem from "@tiptap/extension-list-item";
import Blockquote from "@tiptap/extension-blockquote";
import Paragraph from "@tiptap/extension-paragraph";
import Text from "@tiptap/extension-text";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Document from "@tiptap/extension-document";
import Underline from "@tiptap/extension-underline";
import TextAlign from "@tiptap/extension-text-align";
import BubbleMenu from "@tiptap/extension-bubble-menu";
import Placeholder from "@tiptap/extension-placeholder";

import { IEase } from "../../context/LeiturabilidadeContext";

import * as ReadingEase from "../../libs/readability/ReadingEase.js";

export const EditorExtensions = [
  Heading,
  Underline,
  BulletList,
  OrderedList,
  Blockquote,
  ListItem,
  Text,
  Bold,
  Italic,
  Paragraph,
  Document,
  Placeholder.configure({
    placeholder: "Digite aqui seu texto...",
  }),
  BubbleMenu.configure({}),
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
];

export const textExample = `
  <h1>Ei! Esse é um exemplo de título.</h1> 
  <p>
    Você poder escrever <b>qualquer texto</b> que quiser aqui. <br />
    Além disso, ainda pode importar textos de outros lugares!
  </p>
  <p>
    O texto que você escreve é analisado automaticamente.<br />
    Você pode ver o resultado na barra de ferramentas ao lado.
  </p>
  <blockquote>
    Você também pode formatar o texto com as ferramentas acima. :)
  </blockquote>
  <p>
    Se quiser saber mais sobre como funciona o site, tem mais conteúdo logo abaixo!
  </p>
`;

export const handleContentEase = (
  text: string,
  setEase: (obj: IEase) => void
) => {
  const textAnalyses = ReadingEase.fleschReadingEaseBR(text);

  setEase({
    index: textAnalyses.result,
    syllables: textAnalyses.totalSyllables,
    words: textAnalyses.totalWords,
    sentences: textAnalyses.nTotalSentences,
  });
};
