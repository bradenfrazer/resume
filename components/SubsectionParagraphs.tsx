import React, { FC } from "react";
import { Renderable as RenderableType } from "../common/types";
import Renderable from "./Renderable";

type SubsectionParagraphsProps = {
  items: RenderableType[];
};

const SubsectionParagraphs: FC<SubsectionParagraphsProps> = ({ items }) => {
  return (
    <p className="mt-2.1 text-md text-gray-700 leading-normal">
      {items.map((child, childIndex) => (
        <>
          <Renderable key={childIndex} data={child} />{" "}
        </>
      ))}
    </p>
  );
};

export default SubsectionParagraphs;