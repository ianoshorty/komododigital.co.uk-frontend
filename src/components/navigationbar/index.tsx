import React, { ReactNode } from 'react';
import { Link } from '@reach/router';

// import './NavigationBar.css';

interface Props {
  data?: any;
}

const NavigationBar: React.SFC<Props> = ({ data }) => {
  return (
    <div className="bg-black flex p-8">
      <h1 className="flex-1">
        <Link to="/" className="text-white no-underline uppercase">
          Komodo
        </Link>
      </h1>
      <ul className="list-reset flex-1 flex flex-row items-center justify-end">
        <li className="w-full text-center text-2xl">
          <Link to={'about'} className="text-white no-underline">
            About
          </Link>
        </li>
        <li className="w-full text-center text-2xl">
          <Link to={'case-studies'} className="text-white no-underline">
            Case Studies
          </Link>
        </li>
        <li className="w-full text-center text-2xl">
          <Link to={'blog-list'} className="text-white no-underline">
            Insights
          </Link>
        </li>
        <li className="w-full text-center text-2xl">
          <Link to={'contact'} className="text-white no-underline">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavigationBar;
