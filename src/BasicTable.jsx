import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { getUsers, setUsers } from './redux/Actions/Actions';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  const dispatch = useDispatch();
  const [currentEditObject, setCurrentEditObject] = React.useState({});
  React.useEffect(() => {
    dispatch(getUsers());
  }, []);

  const getUsersState = useSelector((state) => {
    console.log(state);
    return state?.getUsers;
  });
  const handleEditClick = (id) => {
    if (id === currentEditObject?.id) {
      setCurrentEditObject({});
    } else {
      getUsersState.tableData.forEach((item) => {
        if (item.id === id) {
          setCurrentEditObject(item);
        }
      });
    }
  };

  const handleDeleteClick = (id) => {
    const temp = getUsersState.tableData.filter((item) => {
      return item.id !== id;
    });
    dispatch(setUsers(temp));

    return temp;
  };
  const handleTextBoxChange = (e, type) => {
    setCurrentEditObject({ ...currentEditObject, [type]: e.target.value });
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">First Name&nbsp;</TableCell>
            <TableCell align="left">Last Name&nbsp;</TableCell>
            <TableCell align="left">Avatar Link&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {getUsersState?.tableData?.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">
                {currentEditObject?.id === row.id ? (
                  <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    defaultValue={row.email}
                    onKeyUp={(e) => handleTextBoxChange(e, 'email')}
                  />
                ) : (
                  row.email
                )}
              </TableCell>
              <TableCell component="th" scope="row">
                {currentEditObject?.id === row.id ? (
                  <TextField
                    id="outlined-basic"
                    label="First Name"
                    variant="outlined"
                    defaultValue={row.first_name}
                    onKeyUp={(e) => handleTextBoxChange(e, 'first_name')}
                  />
                ) : (
                  row.first_name
                )}
              </TableCell>
              <TableCell component="th" scope="row">
                {currentEditObject?.id === row.id ? (
                  <TextField
                    id="outlined-basic"
                    label="Last Name"
                    variant="outlined"
                    defaultValue={row.last_name}
                    onKeyUp={(e) => handleTextBoxChange(e, 'last_name')}
                  />
                ) : (
                  row.last_name
                )}
              </TableCell>

              <TableCell component="th" scope="row">
                {currentEditObject?.id === row.id ? (
                  <TextField
                    id="outlined-basic"
                    label="Link"
                    variant="outlined"
                    defaultValue={row.avatar}
                    onKeyUp={(e) => handleTextBoxChange(e, 'avatar')}
                  />
                ) : (
                  row.avatar
                )}
              </TableCell>

              <TableCell align="left">
                <Button onClick={() => handleEditClick(row.id)}> Edit</Button>
              </TableCell>
              <TableCell align="left">
                <Button onClick={() => handleDeleteClick(row.id)}>
                  {' '}
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
