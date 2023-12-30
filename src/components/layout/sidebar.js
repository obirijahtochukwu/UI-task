import { Divider, Flex } from "antd";
import React, { useState } from "react";
import { Icons } from "../icons";
import { pageLinks } from "../../lib/constants";

export default function Sidebar({ children }) {
  const [activePage, setActivePage] = useState("Dashboard");
  return (
    <Flex style={{ background: "#182345", padding: "0px" }}>
      <Flex
        style={{
          height: "95vh",
          width: "250px",
          padding: "24px",
          position: "sticky",
          top: "0px",
          left: "0px",
          flexDirection: "column",
          color: "white",
          fontWeight: "400",
          fontFamily: "inter",
        }}
        gap={"24px"}
      >
        <Flex style={{ fontSize: "19px" }} gap={"8px"} align="center">
          <Icons.logo /> Forecxt-IQ
        </Flex>
        <Flex
          style={{ fontSize: "14px", cursor: "pointer" }}
          gap={"8px"}
          align="center"
        >
          <Icons.store /> Store 1 <Icons.arrow style={{ marginLeft: "auto" }} />
        </Flex>
        <Divider
          style={{ background: "rgba(255, 255, 255, 0.10)", margin: "0px" }}
        />
        <Flex style={{ flexDirection: "column" }}>
          {pageLinks.map(
            ({ title, icon }, idx) =>
              idx < 7 && (
                <Flex
                  key={idx}
                  onClick={() => setActivePage(title)}
                  style={{
                    fontSize: "19px",
                    padding: "12px 16px",
                    whiteSpace: "nowrap",
                    borderRadius: "34px",
                    background:
                      activePage == title ? "rgba(255, 255, 255, 0.10)" : "",
                    cursor: "pointer",
                  }}
                  gap={"16px"}
                  align="center"
                >
                  {icon} {title}
                </Flex>
              )
          )}
        </Flex>
        <Divider
          style={{ background: "rgba(255, 255, 255, 0.10)", margin: "0px" }}
        />
        <Flex
          style={{
            fontSize: "19px",
            padding: "0px 16px",
            borderRadius: "34px",
            cursor: "pointer",
          }}
          gap={"16px"}
          align="center"
        >
          <Icons.setting /> {"Settings"}{" "}
          <Icons.arrow style={{ marginLeft: "auto" }} />
        </Flex>
        <Flex style={{ flexDirection: "column", marginTop: "auto" }}>
          {pageLinks.map(
            ({ title, icon }, idx) =>
              idx > 6 && (
                <Flex
                  style={{
                    fontSize: "19px",
                    padding: "12px 16px",
                    borderRadius: "34px",
                    cursor: "pointer",
                  }}
                  gap={"16px"}
                  align="center"
                >
                  {icon} {title}
                </Flex>
              )
          )}
        </Flex>
      </Flex>
      {children}
    </Flex>
  );
}
