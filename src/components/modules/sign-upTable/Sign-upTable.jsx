import React, { useEffect, useState } from "react";
import {
  Box,
  ActionIcon,
  Group,
  Menu,
  rem,
  Anchor,
  ScrollArea,
  LoadingOverlay,
  Card,
  Table,
  Button,
  Pagination,
  Text,
  Center,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import {
  IconDotsVertical,
  IconPencil,
  IconEyeEdit,
  IconTrashX,
} from "@tabler/icons-react";
import { useOutletContext } from "react-router-dom";

import tableCss from "../../../assets/css/Table.module.css";
import axios from "axios";

function SignupTable() {
  const { t } = useTranslation();
  const { mainAreaHeight } = useOutletContext();
  const height = mainAreaHeight + 32;
  const perPage = 20;
  const [page, setPage] = useState(1);
  const [indexData, setIndexData] = useState([]);
  const [allData, setAllData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalRecords, setTotalRecords] = useState(0);

  useEffect(() => {
    setLoading(true);
    axios({
        method: "get",
        url: `${import.meta.env.VITE_API_GATEWAY_URL}/users`,
        headers: {},
      })
      .then((res) => {
        if (res.status === 200) {
          setAllData(res.data.data);
          setTotalRecords(res.data.data.length);
        }
      })
      .catch((error) => {
        console.error("Error fetching user details:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const from = (page - 1) * perPage;
    const to = from + perPage;
    setIndexData(allData.slice(from, to));
  }, [page, perPage, allData]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const totalPages = Math.ceil(totalRecords / perPage);

  return (
    <>
      <Box style={{ display: 'flex', flexDirection: 'column', height: height }}>
        <LoadingOverlay visible={loading} zIndex={1000} overlayProps={{ radius: "sm", blur: 2 }} />
        
        <ScrollArea h={height} scrollbarSize={2} scrollbars="y" type="never">
          <Table type="native">
            <Table withBorder withColumnBorders highlightOnHover striped stickyHeader>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>{t("S/N")}</Table.Th>
                  <Table.Th>{t("Name")}</Table.Th>
                  <Table.Th>{t("Email")}</Table.Th>
                  <Table.Th>{t("Mobile")}</Table.Th>
                  <Table.Th>{t("Company Name")}</Table.Th>
                  <Table.Th>{t("Designation")}</Table.Th>
                  <Table.Th>{t("Tracking Number")}</Table.Th>
                  <Table.Th>{t("Actions")}</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {indexData.map((item, index) => (
                  <Table.Tr key={item.id || index}>
                    <Table.Td>{((page - 1) * perPage) + index + 1}</Table.Td>
                    <Table.Td>{item.name}</Table.Td>
                    <Table.Td>{item.email}</Table.Td>
                    <Table.Td>{item.mobile}</Table.Td>
                    <Table.Td>{item.company_name}</Table.Td>
                    <Table.Td>{item.designation}</Table.Td>
                    <Table.Td>{item.tracking_no}</Table.Td>
                    <Table.Td>
                      <Group spacing="xs">
                        <Menu shadow="md" width={200} position="bottom-end">
                          <Menu.Target>
                            <ActionIcon
                              variant="outline"
                              color="gray"
                              size="sm"
                            >
                              <IconDotsVertical size={16} />
                            </ActionIcon>
                          </Menu.Target>
                          <Menu.Dropdown>
                            <Menu.Item
                              leftSection={<IconEyeEdit size={14} />}
                              onClick={() => {
                                // Handle view action
                                console.log("View:", item);
                              }}
                            >
                              {t("View")}
                            </Menu.Item>
                            <Menu.Item
                              leftSection={<IconPencil size={14} />}
                              onClick={() => {
                                // Handle edit action
                                console.log("Edit:", item);
                              }}
                            >
                              {t("Edit")}
                            </Menu.Item>
                            <Menu.Item
                              leftSection={<IconTrashX size={14} />}
                              color="red"
                              onClick={() => {
                                // Handle delete action
                                console.log("Delete:", item);
                              }}
                            >
                              {t("Delete")}
                            </Menu.Item>
                          </Menu.Dropdown>
                        </Menu>
                      </Group>
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Table>
        </ScrollArea>
        
        {/* Sticky Pagination at Bottom */}
        <Box style={{ 
          borderTop: '1px solid #e9ecef', 
          backgroundColor: '#fff', 
          padding: '12px 16px',
          marginTop: 'auto'
        }}>
          <Group position="apart">
            <Text size="sm" color="dimmed">
              {((page - 1) * perPage) + 1} - {Math.min(page * perPage, totalRecords)} of {totalRecords}
            </Text>
            <Pagination
              value={page}
              onChange={handlePageChange}
              total={totalPages}
              size="sm"
              withEdges
              color="blue"
            />
          </Group>
        </Box>
      </Box>
    </>
  );
}

export default SignupTable;
