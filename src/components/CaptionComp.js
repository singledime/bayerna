import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function CaptionComp({ data, onCopyClick, titleType }) {
  return (
    <div>
      {data.category === titleType ? (
        <div className="caption-component">
          <div style={{ lineHeight: 2, fontSize: 13 }}>{data.caption}</div>
          <CopyToClipboard text={data.caption}>
            <button
              onClick={() => {
                onCopyClick();
              }}
              className="copy-button"
            >
              COPY
            </button>
          </CopyToClipboard>
        </div>
      ) : null}
    </div>
  );
}
