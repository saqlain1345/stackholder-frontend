import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ContentHeading from '../../../components/bottombar/contentbar/contentHeading'
import { getClientsData } from '../../../redux/clientReducer'
import CustomDataTable from '../../../uicomponents/CustomTable/CustomDataTable'
import './ListClients.css'

const ListClients = () => {

  const dispatch = useDispatch()
  let getCleints = null
  useEffect(()=>{
    dispatch(getClientsData())
  },[])
  getCleints = useSelector(state=> state.client.data)
  const body = getCleints?.data?.map(e => (
    {Image: "/img/olx.png", Name: e.client_name, Email: e.client_email, Contact: e.client_contact, Address: e.client_address, Status: "Active"}
  ))
  const data={
    header: [
      {
        title: "Image",
        type: "image"
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
        title: "Contact",
        type: "text"
      },
      {
        title: "Address",
        type: "text"
      },
      {
        title: "Status",
        type: "text"
      }
    ],
    body: body
  }


  return (
    <>
            <ContentHeading>Clients List</ContentHeading>
            <CustomDataTable title="Clients List" addButton="/add-client" data={data}/>
    </>
  )
}

export default ListClients