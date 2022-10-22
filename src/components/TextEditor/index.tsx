import { useEffect, useRef, useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import cx from "classnames";
import dynamic from "next/dynamic";
import useLeiturabilidade from "../../hooks/useLeiturabilidade";
import { textExample, EditorExtensions, handleContentEase } from "./helper";
import { EditorDiv } from "./styles";
import Toolbar from "./Toolbar";
// import InTextMenu from "./InTextMenu";
const InTextMenu = dynamic(() => import("./InTextMenu"), {
  ssr: false,
});

type ComponentPropsType = {
  className?: string;
  html: string;
};

const TextEditorComponent = ({ html, className }: ComponentPropsType) => {
  const { setEase } = useLeiturabilidade();
  const [editorConfig] = useState({
    colors: true,
  });

  const editorRef = useRef(null);

  const editor = useEditor({
    extensions: EditorExtensions,
    onCreate: (state) => {
      if (html) {
        state.editor.commands.setContent(html);
        return;
      }
      if (localStorage.getItem("text")) {
        state.editor.commands.setContent(localStorage.getItem("text"));
      }
      handleContentEase(state.editor.getText(), setEase);
    },
    onUpdate: (state) => {
      localStorage.setItem("text", state.editor.getHTML());
      handleContentEase(state.editor.getText(), setEase);
    },
    content: textExample,
  });

  useEffect(() => {
    if (html && editor) {
      editor.commands.setContent(html, true);
    }
  }, [html]);

  return (
    <EditorDiv
      className={cx({
        [`${className}`]: className,
        editorColor: editorConfig.colors,
      })}
    >
      <Toolbar editor={editor as any} />
      <EditorContent ref={editorRef} className="editor" editor={editor} />
      {editor && <InTextMenu editor={editor} />}
    </EditorDiv>
  );
};

export default TextEditorComponent;
