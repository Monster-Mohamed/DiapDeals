import React, { Fragment, ReactNode } from "react";
import Head from "next/head";
import vars from "../../static/vars.static";
import { Children } from "../types/Children.type";
import { Title } from "../types/Title.type";

interface PageType extends Children, Title {
  description?: string;
}

const Page: React.FC<PageType> = ({ children, title, description }) => {
  title = `${vars.APP_NAME} ${title ? `| ${title}` : ""}`;

  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="ico2n" href="/favicon.ico" />
      </Head>

      {children}
    </Fragment>
  );
};

export default Page;
