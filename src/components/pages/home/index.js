import React, { useState } from "react";
import Sidebar from "../../layout/sidebar";
import { Button, Flex, Input, Pagination } from "antd";
import { Icons } from "../../icons";
import Products from "./products";
import { duplicate_items } from "../../../lib/constants";

export default function Home() {
  const totalPages = Math.ceil(duplicate_items.length / 10);
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Sidebar>
      <Flex
        style={{
          flexDirection: "column",
          padding: "24px",
          borderRadius: "24px 0px 0px 24px",
          background: "#F5F5F5",
          width: "100%",
        }}
        gap={"16px"}
      >
        <Flex
          style={{
            color: "#000",
            fontWeight: "700",
            fontSize: "24px",
            fontFamily: "inter",
            opacity: "0.9",
          }}
          justify="space-between"
        >
          Products
          <Flex
            justify="center"
            style={{
              padding: "8px 16px",
              borderRadius: "8px",
              color: "#056CE5",
              fontWeight: "400",
              fontSize: "14px",
              cursor: "pointer",
            }}
            gap={"4px"}
          >
            Help <Icons.arrow color={"#056CE5"} />
          </Flex>
        </Flex>
        <Flex
          style={{
            background: "#fff",
            borderRadius: "24px",
            padding: "24px",
            flexDirection: "column",
          }}
          gap={"24px"}
        >
          <Flex align="center" justify="space-between">
            <Flex
              style={{
                padding: "9px 16px",
                height: "21px",
                width: "336px",
                borderRadius: "8px",
                border: "1px solid rgba(0, 0, 0, 0.10)",
              }}
              align="center"
            >
              <Icons.search />
              <Input
                height={"100%"}
                width={"100%"}
                bordered={false}
                className="input"
                placeholder="Search by SKU or reference no"
              />
            </Flex>
            <Button
              type="dark"
              style={{
                background: "#000",
                color: "#fff",
                borderRadius: "50px",
                fontSize: "14px",
                fontFamily: "inter",
                fontWeight: "500",
                height: "38px",
                width: "102px",
              }}
            >
              Classify
            </Button>
          </Flex>
          <Products currentPage={currentPage} setCurrentPage={setCurrentPage} />
          <Pagination
            size="medium"
            style={{ marginLeft: "auto" }}
            total={totalPages}
            defaultPageSize={10}
            onChange={(page) => setCurrentPage(page)}
          />
        </Flex>
      </Flex>
    </Sidebar>
  );
}
