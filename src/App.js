import React,{useState,useEffect} from 'react'
import axios from 'axios'
import BootstrapTable  from 'react-bootstrap-table-next'
import PaginationFactory from 'react-bootstrap-table2-paginator'
import *as ReactBootstrap from 'react-bootstrap'
import paginationFactory from 'react-bootstrap-table2-paginator'

function App() {
  const [players, setplayers] = useState([])
  const [loading, setloading] = useState(false)
 const getPlayerData=async()=>{
    //  try {
    //  const data=  await axios.get("https://nba-players.herokuapp.com/players-stats")
    //     console.log(data)
    //  } catch (error) {
    //     console.log(error)
    //  }
   try {
      axios.get('https://nba-players.herokuapp.com/players-stats')
    .then((response)=>{
      setplayers(response.data)
      console.log(players)
    })
   } catch (error) {
     console.log(error)
   }
   
 }
const columns=[
  {dataField:"name" ,text:"Name"},
 {dataField:"team_acronym" ,text:"Bro"},
  {dataField:"team_name" ,text:"Team"}
]

  useEffect(() => {
      getPlayerData()
  }, [])

  return (
    <>
   <div>
     <BootstrapTable
      keyField="name"
      data={players}
      columns={columns}
      pagination={paginationFactory()}
     
     />
     
   </div>
    </>
  )
}

export default App
