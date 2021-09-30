
import './App.css';
import MaterialTable from 'material-table';
import { useState } from 'react';

function App() {

  const [tableData,setTabledata]=useState([
    {name:"Shulabh",username:"shubh123",email:"shulabh@gmail.com",phone:"1234567890",website:"www.shulabh.com"},
    {name:"Tarun",username:"tarun23",email:"pandey@gmail.com",phone:"9234567890",website:"www.tarun.com"},
    {name:"Abhay",username:"abhay43",email:"rajawat@gmail.com",phone:"8234567890",website:"www.abhay.com"},
    {name:"Gaurav",username:"pannu92",email:"gaurav@gmail.com",phone:"6834567890",website:"www.pannu.com"},
    {name:"Shubham",username:"thaper123",email:"thaper@gmail.com",phone:"9734567890",website:"www.shubham.com"},
    {name:"Bhola",username:"bhole903",email:"bhola@gmail.com",phone:"9134567890",website:"www.gurjer.com"},
    {name:"Atul",username:"atul423",email:"asharma@gmail.com",phone:"6234567890",website:"www.atulsharma.com"},
    {name:"Sunney",username:"sunney312",email:"sunney@gmail.com",phone:"6934567890",website:"www.sunnydubey.com"},
    {name:"Love",username:"love143",email:"khatter@gmail.com",phone:"7234567890",website:"www.lovekhatter.com"},
    {name:"Kuch",username:"kuch183",email:"sain@gmail.com",phone:"9284567890",website:"www.kushsain.com"},
  ])

  const columns=[
    {title:"Name",field:"name"},
    {title:"Username",field:"username"},
    {title:"Email",field:"email"},
    {title:"Phone Number",field:"phone"},
    {title:"Website",field:"website"}
  ]

  return (
    <div className="App">
      <h1>React Matrial Table</h1>
      <MaterialTable columns={columns} title="Student Information" data={tableData}
      editable={{
        onRowAdd:(newRow)=>new Promise((resolve,reject)=>{
          setTabledata([...tableData,newRow])
          setTimeout(()=>resolve(),500)
        }),
        onRowUpdate:(newRow,oldRow)=>new Promise((resolve,reject)=>{
          const updatedData=[...tableData]
          updatedData[oldRow.tableData.id]=newRow
          setTabledata(updatedData)
          setTimeout(()=>resolve(),500)
        }),
        onRowDelete:(selectedRow)=>new Promise((resolve,reject)=>{
          const updatedData=[...tableData]
          updatedData.splice(selectedRow.tableData.id,1)
          setTabledata(updatedData)
          setTimeout(()=>resolve(),1000)
        })
      }}
      options={{
        sorting:true,search:true,searchFieldAlignment:"right",searchAutoFocus:true,searchFieldVariant:"standard",
        filtering:true,paging:true,pageSizeOptions:[2,4,5,10,50],pageSize:4,paginationType:"stepped",
        showFirstLastPageButtons:false,paginationPosition:"both",exportButton:true,exportAllData:true,
        exportFileName:"table-data",addRowPosition:"first",actionsColumnIndex:-1
      }}/>
    </div>
  );
}

export default App;
