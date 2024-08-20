import React, { useState, useEffect } from "react";

const AdminRecruit = () => {
  const [applicant, setApplicants] = useState([]);

  /*
  const test = [
    {
      id: 1,
      name: "AAA",
      grade: "2학년",
      department: "컴퓨터소프트웨어공학과",
      tel: "010-1111-1111",
      motivation: "abcdefg",
      status: "",
    },
  ];
  */

  useEffect(() => {
    fetch("/api/service")
      .then((response) => response.json())
      .then((data) => setApplicants(data))
      .catch((error) => console.error("Error fetching applicants:", error));
  }, []);

  const handleDelete = (id) => {
    fetch(`/api/service/${id}`, { method: "DELETE" }).then((response) => {
      if (response.ok) {
        setApplicants(applicant.filter((applicant) => applicant.id !== id));
      } else {
        console.error("Error deleting applicant");
      }
    });
  };

  const handleStatusChange = (id, status) => {
    fetch(`/api/service/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status }),
    }).then((response) => {
      if (response.ok) {
        setApplicants(
          applicant.map((applicant) =>
            applicant.id === id ? { ...applicant, status } : applicant
          )
        );
      } else {
        console.error("Error updating status");
      }
    });
  };
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>이름</th>
            <th>학년</th>
            <th>학과</th>
            <th>전화번호</th>
            <th>지원동기</th>
            <th>합격 / 불합격</th>
            <th>관리</th>
          </tr>
        </thead>
        <tbody>
          {applicant.map((applicant) => (
            <tr key={applicant.id}>
              <td>{applicant.name}</td>
              <td>{applicant.grade}</td>
              <td>{applicant.department}</td>
              <td>{applicant.tel}</td>
              <td>{applicant.motivation}</td>
              <td>{applicant.status}</td>
              <td>
                <button onClick={() => handleDelete(applicant.id)}>삭제</button>
                <button
                  onClick={() => handleStatusChange(applicant.id, "합격")}
                >
                  합격
                </button>
                <button
                  onClick={() => handleStatusChange(applicant.id, "불합격")}
                >
                  불합격
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminRecruit;
