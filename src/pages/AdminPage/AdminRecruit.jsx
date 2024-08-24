import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as XLSX from 'xlsx';
import './AdminRecruit.css';

const AdminRecruit = () => {
	const [info, setInfo] = useState([]);
	let token = localStorage.getItem('accessToken');

	const getList = async () => {
		try {
			const response = await axios.get('https://dmu-dasom.or.kr/api/recruit', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			setInfo(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getList();
	}, []);

	const handleDelete = async (studentId) => {
		try {
			const response = await axios.delete(`https://dmu-dasom.or.kr/api/recruit/${studentId}`);
			if (response.status === 200) {
				getList();
			}
		} catch (error) {
			console.error('Error Delete : ', error);
		}
	};

	const handleStatusChange = async (applyId, statusKey, newStatus) => {
		try {
			const response = await axios.patch(
				`https://dmu-dasom.or.kr/api/recruit/${statusKey}/${applyId}`,
				{
					isPass: newStatus,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			if (response.status === 200) {
				getList();
			}
		} catch (error) {
			console.error('Error updating status:', error);
		}
	};

	const exportToExcel = (title) => {
		let exportData = [];

		if (title === '지원자 목록') {
			exportData = info;
		} else if (title === '1차 합격자') {
			exportData = info.filter((item) => item.firstPass);
		} else {
			exportData = info.filter((item) => item.secondPass);
		}
		const worksheet = XLSX.utils.json_to_sheet(exportData);
		const workbook = XLSX.utils.book_new();
		XLSX.utils.book_append_sheet(workbook, worksheet, title);
		XLSX.writeFile(workbook, `${title}.xlsx`);
	};

	const renderStatusButton = (studentId, statusKey, currentStatus) => (
		<button className="admin-recruit-button" onClick={() => handleStatusChange(studentId, statusKey, !currentStatus)}>
			{currentStatus ? '불합격' : '합격'}
		</button>
	);

	const renderTable = (css, title, data, showActions = false, showReason = false, statusKey = 'firstPass') => (
		<div className="admin-recruit-tablebox">
			{title && <p>{title}</p>}
			<table className={`admin-recruit-table ${css}`}>
				<thead className="admin-recruit-table-thead">
					<tr>
						<th>이름</th>
						<th>학번</th>
						{showReason && <th>이메일</th>}
						<th>연락처</th>
						<th>학과</th>
						<th>학년</th>
						{showReason && <th>지원동기</th>}
						{showActions && <th>합격 / 불합격</th>}
						{showActions && <th></th>}
					</tr>
				</thead>
				<tbody>
					{data.map((item) => (
						<tr key={item._id}>
							<td>{item.applicantName}</td>
							<td>{item.studentId}</td>
							{showReason && <td>{item.applicantEmail}</td>}
							<td>{item.applicantContact}</td>
							{item.applicantDept === 'DEPT_SOFTWARE' ? (
								<td>컴퓨터소프트웨어공학과</td>
							) : item.applicantDept === 'DEPT_AI' ? (
								<td>인공지능소프트웨어공학과</td>
							) : (
								<td>컴퓨터정보공학과</td>
							)}
							<td>{item.applicantGrade}학년</td>
							{showReason && <td>{item.reasonForApply}</td>}
							{showActions && <td>{item[statusKey] ? '합격' : '불합격'}</td>}
							{showActions && (
								<td>
									{renderStatusButton(item.applyId, statusKey, item[statusKey])}
									<button className="admin-recruit-button" onClick={() => handleDelete(item.studentId)}>
										삭제
									</button>
								</td>
							)}
						</tr>
					))}
				</tbody>
				<button className="admin-recruit-button" onClick={() => exportToExcel(title)}>
					엑셀 추출
				</button>
			</table>
		</div>
	);

	return (
		<div>
			<div>{renderTable('first', '지원자 목록', info, true, true, 'firstPass')}</div>
			<div className="admin-recruit-undertable">
				{renderTable(
					'second',
					'1차 합격자',
					info.filter((item) => item.firstPass),
					true,
					false,
					'secondPass'
				)}
				{renderTable(
					'final',
					'최종 합격자',
					info.filter((item) => item.secondPass),
					false
				)}
			</div>
		</div>
	);
};

export default AdminRecruit;
