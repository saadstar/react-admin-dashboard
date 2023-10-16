import React, { useState } from 'react'
import { AddUser } from './AddUser';
import "./user.css";
import { DataGrid,  GridToolbar,  } from '@mui/x-data-grid';
import { EditUser } from './EditUser';
import { DeleteUser } from './DeleteUser';

export const Users = () => {
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [editUserId, setEditUserId] = useState("");
  const [deleteUserId, setDeleteUserId] = useState("");

 
  console.log(editUserId + deleteUserId);

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: "avatar",
      headerName: "Avatar",
      width: 100,
      renderCell: (params) => {
       return        <img src={params.row.img || "/noavatar.png"} alt="" />        
      }
  },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
    },
    {
     field: 'email',
    headerName: 'Email',
    width: 110,
    editable: true,
  },
  {
    field: 'Phone',
    headerName: 'phone',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'CreatedAt',
    headerName: 'CreatedAt',
    width: 160,
  },
  {
    field: 'status',
    headerName: 'Verfied',
    width: 100,
    type: Boolean,
      renderCell: (params) => {
       return       params.row.status?<i class="fa-solid fa-check" id="correct"></i>:<i id="wrong" class="fa-solid fa-xmark"></i>      
      }
  },
  {
    field: 'Action',
    headerName: 'Action',
    width: 200,
    renderCell: (params) => {
        const editHandler = () => {
    setEditUserId(params.row.id);
    setEditOpen(true)
  }
        const deleteHandler = () => {
    setDeleteUserId(params.row.id);
    setDeleteOpen(true)
  }
       return (
         <div className='action'>          
           <i class="fa-solid fa-pen-to-square" style={{color:"green",fontSize:"20px"}}  onClick={editHandler}></i>
           <i class="fa-solid fa-trash" style={{color:"red",fontSize:"20px"}} onClick={deleteHandler}></i>
         </div>
       )
      }
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 ,status:true,email:"saad@gmail.com",CreatedAt:"1.2.2023",Phone:23242424},
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 ,status:true,email:"saad@gmail.com",CreatedAt:"1.2.2023",Phone:12957836346},
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 ,status:false,email:"saad@gmail.com",CreatedAt:"1.2.2023",Phone:1293019482},
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 ,status:true,email:"saad@gmail.com",CreatedAt:"1.2.2023",},
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null ,status:true,email:"saad@gmail.com",CreatedAt:"1.2.2023",},
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150,status:false,email:"saad@gmail.com",CreatedAt:"1.2.2023", },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44, status: true, email: "saad@gmail.com", CreatedAt: "1.2.2023", },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 ,status:true,email:"saad@gmail.com",CreatedAt:"1.2.2023",},
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 ,status:true,email:"saad@gmail.com",CreatedAt:"1.2.2023",},
];

  return (
    <div className='users'>
      <div className='info'>
        <h1>Users</h1>
        <button onClick={()=>setOpen(true)}>Add New User</button>
      </div>
      <div className='dataTable'>
      <DataGrid
      className='dataGrid'
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
          }}
          slots={{toolbar:GridToolbar}}
          slotProps={{
            toolbar: {
              showQuickFilter: true,
              quickFilterProps:{debounceMs:500}
            }
          }}
        pageSizeOptions={[5]}
        checkboxSelection
          disableRowSelectionOnClick
          disableColumnFilter 
          disableColumnSelector
          disableDensitySelector
        />
      </div>
      {
        open && <AddUser setOpen={setOpen} slug="user" colums={"colums"} />
      }
      {
        editOpen && <EditUser setEditOpen={setEditOpen} slug="user" colums={"colums"} editUserId={editUserId} />
      }
      {
        deleteOpen && <DeleteUser setDeleteOpen={setDeleteOpen} slug="USER" colums={"colums"} deleteUserId={deleteUserId} />
      }
    </div>
  )
}
