import React, { FC } from "react";

type SubsectionPillsProps = {
  items: string[];
};

const SubsectionPills: FC<SubsectionPillsProps> = ({ items }) => {
  return (
    <div className="my-3.2 last:pb-1.5">
      <ul className="flex flex-wrap text-md leading-relaxed -mr-1.6 -mb-1.6">
        {items.map((item, i) => (
          <li
            key={i}
            className="px-2.5 mr-1.6 mb-1.6 text-base text-gray-750 bg-gray-200 print:bg-white print:outline print:outline-gray-300 print:outline-offset-[-2px] print:outline-2"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SubsectionPills;
