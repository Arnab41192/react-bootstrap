import { getDefaultNormalizer } from "@testing-library/react";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";

const ReactBootStrapTableNext = () => {

    const [data,setData] = useState([]);

    useEffect(()=>{
        getData();
    }

    );

    const selectRow = {
        mode:"checkbox"
    }

    const getData = () => {
        axios("https://jsonplaceholder.typicode.com/comments").then((res) => {
            setData(res.data);
        })
    }

    const columns = [
        {
            dataField: "postId",
            text:"Product Id",
            sort:true
        },
        {
            dataField: "email",
            text:"Email"
        },
     
        {
            dataField: "name",
            text:"Name"
        }
    ]
    return(

        <div className="container">
             <BootstrapTable data={data} keyField={"id"} columns={columns} striped pagination={paginationFactory()}
             selectRow={selectRow}>

             </BootstrapTable>

        </div>

    )
}

export default ReactBootStrapTableNext;