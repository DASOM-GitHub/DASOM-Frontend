import React, { useState, useEffect } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import "./AdminRecruit.css";

const AdminRecruit = () => {
  const [info, setInfo] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await axios.get("api/service");
      const resData = await response.data;
      setInfo(resData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (studentId) => {
    try {
      const response = await axios.delete(`api/service/${studentId}`);
      if (response.status === 200) {
        setInfo(info.filter((info) => info.studentId !== studentId));
      }
    } catch (error) {
      console.error("Error Delete : ", error);
    }
  };

  const handleStatusChange = async (studentId, status) => {
    try {
      const response = await axios.patch(`api/service/${studentId}`, {
        status: status,
      });
      if (response.status === 200) {
        setInfo(
          info.map((info) =>
            info.studentId === studentId ? { ...info, status } : info
          )
        );
      }
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(info);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Applicants");
    XLSX.writeFile(workbook, "applicants.xlsx");
  };

  return (
    <div>
      <table className="admin-recruit-table">
        <thead className="admin-recruit-table-thead">
          <tr>
            <th>이름</th>
            <th>이메일</th>
            <th>연락처</th>
            <th>학과</th>
            <th>학년</th>
            <th>지원동기</th>
            <th>합격 / 불합격</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          {info.map((info) => (
            <tr key={info.studentId}>
              <td>{info.applicantName}</td>
              <td>{info.applicantEmail}</td>
              <td>{info.applicantContact}</td>
              <td>{info.applicantDept}</td>
              <td>{info.applicantGrade}</td>
              <td>{info.reasonForApply}</td>
              <td>{info.status}</td>
              <td>
                <button
                  className="admin-recruit-button"
                  onClick={() => handleDelete(info.studentId)}
                >
                  삭제
                </button>
                <button
                  className="admin-recruit-button"
                  onClick={() => handleStatusChange(info.studentId, "합격")}
                >
                  합격
                </button>
                <button
                  className="admin-recruit-button"
                  onClick={() => handleStatusChange(info.studentId, "불합격")}
                >
                  불합격
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="admin-recruit-button" onClick={exportToExcel}>
        엑셀 추출
      </button>
    </div>
  );
};

export default AdminRecruit;
