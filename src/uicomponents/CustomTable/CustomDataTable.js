import React from 'react'
import CustomDataTablePagination from './CustomDataTablePagination';
import CustomTableBody from './CustomTableBody';
import TableHeader from './CustomTableHeader'

const CustomDataTable = ({title, addButton, data}) => {

    const totalitems = data?.body?.length;
    const totalheader = data?.header?.length;

    return (
        <>
            <TableHeader title={title} addButton={addButton}/>
            
            <CustomTableBody data={data}/>

            <CustomDataTablePagination />
        </>
    )
}

export default CustomDataTable
