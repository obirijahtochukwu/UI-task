import { Button, Col, Flex, Input, Row } from "antd";
import React from "react";
import { duplicate_items } from "../../../lib/constants";

export default function Products({ currentPage, setCurrentPage }) {
  const titles = [
    "Product",
    "Classification",
    "Avg. lead time",
    "Avg purchase cost",
    "Current stock level",
    "Safety stock",
    "Avg holding cost",
  ];

  return (
    <Flex
      style={{
        flexDirection: "column",
        width: "100%",
        fontFamily: "inter",
        fontWeight: "400",
      }}
    >
      <Row
        style={{
          background: "rgba(0, 0, 0, 0.05)",
          padding: "16px",
          borderRadius: "10px 10px 0 0",
        }}
      >
        {titles.map((title, idx) => (
          <Col span={3} key={idx} style={{ fontSize: "12px" }}>
            <Flex justify={idx === 1 && "center"}>{title}</Flex>
          </Col>
        ))}
      </Row>
      <Flex
        style={{
          flexDirection: "column",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          borderRadius: "0px 0px 24px 24px",
        }}
      >
        {duplicate_items.map(
          ({ product, classify, time, cost, level, unit, holding_cost }, idx) =>
            idx < currentPage * 10 &&
            idx > currentPage * 10 - 11 && (
              <Row
                key={idx}
                align={"center"}
                style={{
                  padding: "16px",
                  borderRadius: "0 0 10px 10px",
                }}
              >
                <Col span={3}>
                  <Flex gap={"8px"}>
                    <img
                      src="/Rectangle 8.svg"
                      alt=""
                      style={{ width: "52px", height: "52px" }}
                    />
                    <Flex style={{ flexDirection: "column" }}>
                      <Flex
                        style={{
                          fontSize: "14px",
                          fontWeight: "500",
                          color: "",
                          lineHeight: "18.2px",
                        }}
                      >
                        {product.name}
                      </Flex>
                      <Flex
                        style={{
                          fontSize: "10px",
                          fontWeight: "400",
                          color: "rgba(0, 0, 0, 0.50)",
                          lineHeight: "14px",
                        }}
                      >
                        {product.color}
                      </Flex>
                      <Flex
                        style={{
                          fontSize: "12px",
                          fontWeight: "500",
                          lineHeight: "15.6px",
                        }}
                      >
                        {product.price}
                      </Flex>
                    </Flex>
                  </Flex>
                </Col>
                <Col
                  style={{
                    fontSize: "12px",
                    display: "flex",
                    alignItems: "center",
                  }}
                  span={3}
                >
                  <Flex
                    justify="center"
                    align="center"
                    style={{
                      width: "32px",
                      height: "32px",
                      color: classify == "A" ? "#52C41A" : "#FAAD14",
                      background: classify == "A" ? "#F6FFED" : "#FFFBE6",
                      border:
                        classify == "A"
                          ? "1px solid #B7EB8F"
                          : "1px solid #FFE58F",
                      borderRadius: "100%",
                      fontWeight: "700",
                      fontSize: "12px",
                      marginLeft: "auto",
                      marginRight: "auto",
                    }}
                  >
                    {classify}
                  </Flex>
                </Col>
                <Col
                  style={{
                    fontSize: "12px",
                    display: "flex",
                    alignItems: "center",
                  }}
                  span={3}
                >
                  {time}
                </Col>
                <Col
                  style={{
                    fontSize: "12px",
                    display: "flex",
                    alignItems: "center",
                  }}
                  span={3}
                >
                  {cost}
                </Col>
                <Col
                  style={{
                    fontSize: "12px",
                    display: "flex",
                    alignItems: "center",
                  }}
                  span={3}
                >
                  {idx * 2} units
                </Col>
                <Col
                  style={{
                    fontSize: "12px",
                    display: "flex",
                    alignItems: "center",
                  }}
                  span={3}
                >
                  <Input
                    addonBefore={
                      <div
                        style={{
                          fontFamily: "inter",
                          fontSize: "12px",
                          fontWeight: "400",
                          color: "rgba(0, 0, 0, 0.80)",
                        }}
                      >
                        Unit
                      </div>
                    }
                    defaultValue={unit}
                    placeholder={unit || "Stock"}
                    style={{ maxWidth: "129px" }}
                  />
                </Col>
                <Col
                  style={{
                    fontSize: "12px",
                    display: "flex",
                    alignItems: "center",
                  }}
                  span={3}
                >
                  <Input
                    addonBefore={
                      <div
                        style={{
                          fontFamily: "inter",
                          fontSize: "12px",
                          fontWeight: "400",
                          color: "rgba(0, 0, 0, 0.80)",
                        }}
                      >
                        AUD
                      </div>
                    }
                    defaultValue={holding_cost}
                    placeholder={holding_cost || "Amount"}
                    style={{ maxWidth: "129px" }}
                  />
                </Col>
                <Col
                  span={3}
                  style={{
                    fontSize: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "end",
                  }}
                >
                  <Button
                    type="dark"
                    style={{
                      background: "#fff",
                      color:
                        holding_cost && unit ? "#000" : "rgba(0, 0, 0, 0.30)",
                      border: "1px solid rgba(0, 0, 0, 0.30)",
                      borderRadius: "50px",
                      fontWeight: "500",
                      fontSize: "12px",
                      height: "38px",
                      float: "right",
                      width: "81px",
                    }}
                  >
                    Save
                  </Button>
                </Col>
              </Row>
            )
        )}
      </Flex>
    </Flex>
  );
}
