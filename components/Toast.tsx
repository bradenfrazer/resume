import React, { FC, useState } from "react";

type ToastProps = {};

const Toast: FC<ToastProps> = ({}) => {
  const [visible, setVisible] = useState(true);
  return visible ? (
    <div className="z-10 pl-3 border border-gray-650 bg-gray-200 rounded fixed top-3 right-3 text-gray-750 inline-flex items-center gap-1 text-sm overflow-hidden print:hidden">
      <a href={"/src/resume.pdf"} className="hover:underline">
        View as PDF
      </a>
      <button
        onClick={() => setVisible(false)}
        className="text-lg leading-none pt-2 pb-3 px-3 hover:bg-gray-400"
      >
        ×
      </button>
    </div>
  ) : (
    <></>
  );
};

export default Toast;
