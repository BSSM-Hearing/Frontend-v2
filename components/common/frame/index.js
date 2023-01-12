import React from "react";
import * as S from "./index.style";
import NoticeIcon from "../../icon/NoticeIcon";
import RollBackIcon from "../../icon/RollbackIcon";
import DownIcon from "../../icon/DownIcon";
import { useNavigate } from "react-router-dom";

export default function Frame({ children, notice, rollback, down }) {
  const navigate = useNavigate();
  const handleGoBack = () => navigate(-1);
  const handleGoNotice = () => navigate("/introduce");

  return (
    <S.Frame>
      {notice ? (
        <span
          style={{
            position: "absolute",
            top: "16px",
            left: "16px",
            zIndex: "100",
          }}
          onClick={handleGoNotice}
        >
          <NoticeIcon />
        </span>
      ) : null}

      {rollback ? (
        <span
          style={{
            width: "32px !important",
            position: "absolute",
            top: "32px",
            left: "32px",
            zIndex: "100",
          }}
          onClick={handleGoBack}
        >
          <RollBackIcon />
        </span>
      ) : null}

      {down ? (
        <span
          style={{
            position: "absolute",
            bottom: "32px",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: "100",
          }}
          onClick={() => navigate("#quick-menu")}
        >
          <DownIcon />
        </span>
      ) : null}
      {children}
    </S.Frame>
  );
}
