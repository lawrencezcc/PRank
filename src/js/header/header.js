import React from "react";
import { Menu, Icon, Row, Col, Divider, Input } from "antd";
import MediaQuery from "react-responsive";

import style from "../../style/style.scss";
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.MenuItemGroup;
const Search = Input.Search;
class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      current: "home"
    };
  }

  render() {
    const menuItemSM = (
      <Menu.Item
        key="home"
        className={[style.clearFloat, style.prInlineBlock]}
        style={{ paddingRight: 0 }}
      >
        <Icon type="bars" style={{ fontSize: 16, color: "#08c" }} />
      </Menu.Item>
    );
    return (
      <Row type="flex">
        <Col xs={1} lg={1} xl={2} order={1} />
        <Col xs={1} lg={1} xl={2} order={4} />
        <Col xs={0} lg={3} xl={3} order={2}>
          <div className="logo" />
        </Col>
        <Col xs={22} lg={19} xl={17} order={3} className={style.textRight}>
          <MediaQuery minWidth={320}>
            <Search
              placeholder="Search"
              onSearch={value => console.log(value)}
              className={style.prSearchBar}
              style={{ minWidth: 200, maxWidth: "25%", marginRight: 10 }}
            />
          </MediaQuery>
          <MediaQuery minWidth={992}>
            <Menu
              mode="horizontal"
              className={[
                style.prMeun,
                style.prBlue,
                style.prFont,
                style.textRight
              ]}
              style={{
                lineHeight: "57px",
                borderBottom: "none",
                display: "inline-block"
              }}
            >
              <Menu.Item
                key="home"
                className={[style.clearFloat, style.prInlineBlock]}
              >
                <Icon type="home" />Home
              </Menu.Item>
              <Menu.Item
                key="question-type"
                className={[style.clearFloat, style.prInlineBlock]}
              >
                <Icon type="bar-chart" />Question Analysis
              </Menu.Item>
              <Menu.Item
                key="about-us"
                className={[style.clearFloat, style.prInlineBlock]}
              >
                <Icon type="user" />About us
              </Menu.Item>
              <Menu.Item
                key="login"
                className={[style.clearFloat, style.prInlineBlock]}
              >
                <Icon type="login" />Sign in
              </Menu.Item>
            </Menu>
          </MediaQuery>
          <MediaQuery maxWidth={991}>
            <Menu
              mode="horizontal"
              className={[
                style.prMeun,
                style.prBlue,
                style.prFont,
                style.textRight
              ]}
              style={{
                lineHeight: "57px",
                borderBottom: "none",
                display: "inline-block"
              }}
            >
              {menuItemSM}
            </Menu>
          </MediaQuery>
        </Col>
      </Row>
    );
  }
}

export default Header;
