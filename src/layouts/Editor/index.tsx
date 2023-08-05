import React, { useCallback, useEffect } from "react";
import cx from "clsx";
import dynamic from "next/dynamic";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useImportExternalPage } from "../../hooks/useImportExternalPage";
import styles from "./styles.module.scss";
import ResultBox from "../../components/ResultBox";
import useModal from "../../hooks/useModal";
import Loading from "@/components/TextEditor/Loading";
const TextEditor = dynamic(() => import("../../components/TextEditor"), {
  ssr: false,
  loading: () => <Loading />,
});

const Editor: React.FC = () => {
  const { showModal } = useModal();

  const { fetch, data: pageContent, error, loading } = useImportExternalPage();

  const handleImportClick = useCallback((value: string) => {
    if (value) {
      fetch(value);
    }
  }, []);

  useEffect(() => {
    if (error) {
      showModal({
        title: error.title,
        message: error.message,
      });
    }
  }, [error]);

  return (
    <>
      <div className={styles.container}>
        <div
          className={
            cx(
              styles.content,
              styles.left,
              styles.textarea
            )
          }>
          <TextEditor html={pageContent} />
        </div>

        <aside
          className={
            cx(
              styles.content,
              styles.right
            )
          }>
          <ResultBox onImportPage={handleImportClick} />
        </aside>
      </div>

      {loading && (
        <div className={styles.loading}>
          <AiOutlineLoading3Quarters stroke="white" />
        </div>
      )}
    </>
  );
};

export default Editor;
