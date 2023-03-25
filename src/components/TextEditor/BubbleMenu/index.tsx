import { BubbleMenu as TiptapBubbleMenu, Editor } from "@tiptap/react";
import Button from "./Button";
import { Content } from "./styles";
import { getMenuItems } from "./helper";
import cx from "classnames";

interface Props {
  editor: Editor | null;
  shouldBeVisible: boolean;
}

export const BubbleMenu = ({ editor, shouldBeVisible }: Props) => {
  if (!editor) return null;

  return (
    <TiptapBubbleMenu
      tippyOptions={{
        duration: 100,
        delay: 250,
        offset: [0, 25],
      }}
      updateDelay={0}
      editor={editor}
    >
      <Content
        className={cx("bubble-menu-container", {
          visible: shouldBeVisible,
        })}
      >
        <ul>
          {getMenuItems(editor).map((item) => (
            <li key={item.tooltip}>
              <Button
                onClick={item.onClick}
                tooltip={item.tooltip}
                name={item?.name}
                icon={item.icon && <item.icon />}
              />
            </li>
          ))}
        </ul>
      </Content>
    </TiptapBubbleMenu>
  );
};