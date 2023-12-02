
import { useState, useMemo, useCallback, useRef, useEffect} from 'react';
import './App.css';
// import { BrowserRouter,Route, Routes } from 'react-router-dom';
import {AgGridReact} from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

function App() {
  const [rowData,setRowData]=useState([

    // {make: "Mobile", model: "Oppo",price: 14000},
    // {make: "Desktop", model: "Dell",price: 5000},
    // {make: "Laptop", model: "HP",price: 55640},
  ]);
  const [columnDefs,setColumnDefs]=useState([
    { field: 'age', maxWidth: 120, filter: 'agNumberColumnFilter' },
    { field: 'year', maxWidth: 120 },
    { field: 'date' },
    { field: 'sport' },
    { field: 'gold', filter: 'agNumberColumnFilter' },
    { field: 'silver', filter: 'agNumberColumnFilter' },
    { field: 'bronze', filter: 'agNumberColumnFilter' },
    { field: 'total', filter: 'agNumberColumnFilter' },
  ]);
  const defaultColDef = useMemo(()=>({
    sortable:true,
    filter: true
  }),[]);
  const cellClickedListener = useCallback(e=>{
    console.log(e);
  });
  useEffect(() => {
    fetch('https://www.ag-grid.com/example-assets/olympic-winners.json')
    .then(result => result.json())
    .then(rowData => setRowData(rowData))
  }, []);

  return (
    <div className="ag-theme-alpine" style={{height: 500, width: 1500,margin: "auto"}}>
      <AgGridReact onCellClicked={cellClickedListener} rowData={rowData} columnDefs={columnDefs} rowSelection='multiple' alimateRows= {true} defaultColDef={defaultColDef} />
    </div>
  );
}

export default App;
