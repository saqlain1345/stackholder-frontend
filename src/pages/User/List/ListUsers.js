import React from 'react';
import ContentHeading from '../../../components/bottombar/contentbar/contentHeading';
import CustomDataTable from '../../../uicomponents/CustomTable/CustomDataTable';
import './ListUsers';

const ListUsers = () => {

    const data ={
        header: [
          {
            title: "Image",
            type: "image"
          },
          {
            title: "User ID",
            type: "text"
          },
          {
            title: "Name",
            type: "text"
          },
          {
            title: "Email",
            type: "text"
          },
          {
            title: "Role",
            type: "text"
          }
        ],
        // body: body
      }
    
    return (
        <>
        <ContentHeading>All Users</ContentHeading>
        <CustomDataTable title="Users List" addButton="/add-user" data={data}/>
        </>
    );
};

export default ListUsers;