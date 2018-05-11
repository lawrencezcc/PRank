import React from "react";
import { Layout } from "antd";

import HeaderWrapper from "./header/header";
import BodyWrapper from "./body/body";
import FooterWrapper from "./footer/footer";
import style from "../style/style.scss";

const { Header, Content, Footer } = Layout;

export const App = () => {
  return (
      <Layout className={[style.prMeun, style.prBlue, style.prFont]}>
        <Header
          className={style.prBgWhite}
          style={{padding: "0 0", borderBottom: "1px solid #e8e8e8"}}
        >
          <HeaderWrapper />
        </Header>
        <Content>
          <BodyWrapper />
        </Content>
        {/* <Footer>
          <FooterWrapper />
        </Footer> */}
      </Layout>
  );
};
