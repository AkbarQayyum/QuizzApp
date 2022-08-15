import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import axios from 'axios'
import LastPageIcon from '@mui/icons-material/LastPage';
import storeData from '../../../store/store.js'
interface TablePaginationActionsProps {
  count: number;
  page: number;

  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number,
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

export default function ViewCourse() {
  let [rows,setrows]=React.useState([{}])
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  axios.get('/ViewCourses').then((res)=>{
    setrows(res.data);
  })


 


  


  


  
  
  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
function Editdata(e)
{
  let obj={
    id:e,
  }
  
    axios.post('/deletecourse',obj).then((res)=>{
      alert('Course deleted successfully');
    });


    
  
 
}

  return (
    <TableContainer component={Paper} sx={{background:'transparent',margin:'20px auto',width:'95%',boxShadow:"0px 0px 5px 5px rgba(210,210,210,0.9)"}}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
      <TableHead>
        <TableRow >
          <TableCell sx={{textAlign:'center',fontWeight:'bold'}}>Course</TableCell>
          <TableCell sx={{textAlign:'center',fontWeight:'bold'}}>Course Discription</TableCell>
          <TableCell sx={{textAlign:'center',fontWeight:'bold'}}>Teacher Name</TableCell>
          <TableCell sx={{textAlign:'center',fontWeight:'bold'}}>Teacher Discription</TableCell>
        </TableRow>
      </TableHead>
        <TableBody >
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row" sx={{color:'rgb(18, 95, 91)',fontSize:'100%'}}>
                {row.course}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right" sx={{color:'rgb(18, 95, 91)',fontSize:'100%'}}>
                {row.CourseDis}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right" sx={{color:'rgb(18, 95, 91)',fontSize:'100%'}}>
                {row.TeacherName}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right" sx={{color:'rgb(18, 95, 91)',fontSize:'100%'}}>
                {row.TeacherDiscription}
              </TableCell>
            
         

              <TableCell sx={{color:'rgb(18, 95, 91)',fontSize:'100%'}}>
                <button className='button' onClick={()=>{Editdata(row._id);}}>Delete</button>
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}