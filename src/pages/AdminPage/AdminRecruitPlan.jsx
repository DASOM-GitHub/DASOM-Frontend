import React, { useState, useEffect } from 'react';
import { TextField, Box, Button } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const AdminRecruitPlan = () => {

    const [dates, setDates] = useState({
        REC_OPEN: dayjs(),
        REC_CLOSE: dayjs(),
        REC_MID_ANNOUNCE: dayjs(),
        REC_FINAL_ANNOUNCE: dayjs(),
      });
    
    useEffect(() => {
      const fetchDates = async () => {
        try {
          const response = await fetch('/api/service');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          
          setDates({
            REC_OPEN: dayjs(data.find(item => item.key === 'REC_OPEN').value),
            REC_CLOSE: dayjs(data.find(item => item.key === 'REC_CLOSE').value),
            REC_MID_ANNOUNCE: dayjs(data.find(item => item.key === 'REC_MID_ANNOUNCE').value),
            REC_FINAL_ANNOUNCE: dayjs(data.find(item => item.key === 'REC_FINAL_ANNOUNCE').value),
          });
        } catch (error) {
          console.error('Failed to fetch dates:', error);
        }
      };
  
      fetchDates();
    }, []);
  
    const handleDateChange = (key, newValue) => {
      setDates((prevDates) => ({
        ...prevDates,
        [key]: newValue
      }));
    };
  
    const handleSave = async (key) => {
      const formattedDate = {
        value: dates[key].format('YYYY-MM-DD HH:mm:ss')
      };
  
      try {
        const response = await fetch(`/api/service/${key}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formattedDate),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
  
        console.log(`${key} updated successfully`);
      } catch (error) {
        console.error(`Failed to update ${key}:`, error);
      }
    };
  
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box
          sx={{
            width: 'fit-content',
            margin: '20px auto',
            padding: '20px',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)'
          }}
        >
          <Box display="flex" flexDirection="column" gap={2}>
            <Box display="flex" alignItems="center" gap={2}>
              <DateTimePicker
                label="모집 시작"
                value={dates.REC_OPEN}
                onChange={(newValue) => handleDateChange('REC_OPEN', newValue)}
                renderInput={(params) => <TextField {...params} />}
              />
              <Button variant="contained" onClick={() => handleSave('REC_OPEN')}>
                저장
              </Button>
            </Box>
            <Box display="flex" alignItems="center" gap={2}>
              <DateTimePicker
                label="지원 종료"
                value={dates.REC_CLOSE}
                onChange={(newValue) => handleDateChange('REC_CLOSE', newValue)}
                renderInput={(params) => <TextField {...params} />}
              />
              <Button variant="contained" onClick={() => handleSave('REC_CLOSE')}>
                저장
              </Button>
            </Box>
            <Box display="flex" alignItems="center" gap={2}>
              <DateTimePicker
                label="서류 합격 발표"
                value={dates.REC_MID_ANNOUNCE}
                onChange={(newValue) => handleDateChange('REC_MID_ANNOUNCE', newValue)}
                renderInput={(params) => <TextField {...params} />}
              />
              <Button variant="contained" onClick={() => handleSave('REC_MID_ANNOUNCE')}>
                저장
              </Button>
            </Box>
            <Box display="flex" alignItems="center" gap={2}>
              <DateTimePicker
                label="최종 합격 발표"
                value={dates.REC_FINAL_ANNOUNCE}
                onChange={(newValue) => handleDateChange('REC_FINAL_ANNOUNCE', newValue)}
                renderInput={(params) => <TextField {...params} />}
              />
              <Button variant="contained" onClick={() => handleSave('REC_FINAL_ANNOUNCE')}>
                저장
              </Button>
            </Box>
          </Box>
        </Box>
      </LocalizationProvider>
    );
  };


export default AdminRecruitPlan;