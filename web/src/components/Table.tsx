import React from 'react';
import MaterialTable from 'material-table'

export default function Table(props : any) {
  let columns : any[] = [];
  
  props.keys.forEach((key : any) => {
    if (key in props.tableData[0]) columns.push({title: key, field: key})
  })

  return (
    <MaterialTable
      title="Relatório Gerado"
      columns={columns}
      data={props.tableData}        
      options={{
        exportButton: true,
        exportAllData: true
      }}
    />
  );
}