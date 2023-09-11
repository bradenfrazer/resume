import React, { FC } from "react";

type HeaderContactProps = {
  phone: number;
  location: string;
  email: string;
  website: string;
};

const HeaderContact: FC<HeaderContactProps> = ({
  phone,
  location,
  email,
  website,
}) => {
  return (
    <ul className="grid md:grid-cols-2 print:grid-cols-2">
      <li className="mt-1.5 flex items-start text-md text-gray-700 leading-normal md:order-1">
        <span className="flex items-center flex-shrink-0">
          <svg
            className="w-4.5 h-4.5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              className="text-gray-600 print:text-gray-900 fill-current"
              d="M5.64 16.36a9 9 0 1 1 12.72 0l-5.65 5.66a1 1 0 0 1-1.42 0l-5.65-5.66zm11.31-1.41a7 7 0 1 0-9.9 0L12 19.9l4.95-4.95zM12 14a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"
            />
          </svg>
        </span>
        <span className="ml-1.5">{location}</span>
      </li>
      <li className="mt-1.5 flex items-start text-md text-gray-700 leading-normal md:order-3">
        <a href={`tel:${phone}`} target="_blank" className="group flex">
          <span className="flex items-center flex-shrink-0">
            <svg
              className="w-4.5 h-4.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                className="text-gray-600 group-hover:text-gray-700 transition print:text-gray-900 fill-current"
                d="M13.04 14.69l1.07-2.14a1 1 0 0 1 1.2-.5l6 2A1 1 0 0 1 22 15v5a2 2 0 0 1-2 2h-2A16 16 0 0 1 2 6V4c0-1.1.9-2 2-2h5a1 1 0 0 1 .95.68l2 6a1 1 0 0 1-.5 1.21L9.3 10.96a10.05 10.05 0 0 0 3.73 3.73zM8.28 4H4v2a14 14 0 0 0 14 14h2v-4.58l-4.5-1.5-1.12 2.26a1 1 0 0 1-1.3.46 12.04 12.04 0 0 1-6.02-6.01 1 1 0 0 1 .46-1.3l2.26-1.14L8.28 4z"
              />
            </svg>
          </span>
          <span className="ml-1.5">
            ({phone.toString().slice(0, 3)}) {phone.toString().slice(3, 6)}-
            {phone.toString().slice(6)}
          </span>
        </a>
      </li>
      <li className="mt-1.5 flex items-start text-md text-gray-700 leading-normal md:order-2">
        <a
          href={`https://www.${website}`}
          target="_blank"
          className="group flex"
        >
          <span className="inline-flex items-center flex-shrink-0">
            <svg
              className="w-4.5 h-4.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                className="text-gray-600 group-hover:text-gray-700 transition print:text-gray-900 fill-current"
                d="M19.48 13.03A4 4 0 0 1 16 19h-4a4 4 0 1 1 0-8h1a1 1 0 0 0 0-2h-1a6 6 0 1 0 0 12h4a6 6 0 0 0 5.21-8.98L21.2 12a1 1 0 1 0-1.72 1.03zM4.52 10.97A4 4 0 0 1 8 5h4a4 4 0 1 1 0 8h-1a1 1 0 0 0 0 2h1a6 6 0 1 0 0-12H8a6 6 0 0 0-5.21 8.98l.01.02a1 1 0 1 0 1.72-1.03z"
              />
            </svg>
          </span>
          <span className="ml-1.5">{website}</span>
        </a>
      </li>
      <li className="mt-1.5 flex items-start text-md text-gray-700 leading-normal md:order-4">
        <a href={`mailto:${email}`} target="_blank" className="group flex">
          <span className="flex items-center flex-shrink-0">
            <svg
              className="w-4.5 h-4.5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                className="text-gray-600 group-hover:text-gray-700 transition print:text-gray-900 fill-current"
                d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm16 3.38V6H4v1.38l8 4 8-4zm0 2.24l-7.55 3.77a1 1 0 0 1-.9 0L4 9.62V18h16V9.62z"
              />
            </svg>
          </span>
          <span className="ml-1.5">{email}</span>
        </a>
      </li>
    </ul>
  );
};

export default HeaderContact;
