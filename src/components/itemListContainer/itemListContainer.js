import './ItemListContainer.scss'
import React, { useEffect, useState } from "react";
import { pedirDatos } from '../../helpers/pedirDatos';
import { ItemList } from './ItemList';
import 'bootstrap/dist/css/bootstrap.min.css';

const ItemListContainer = ({saludo}) => {

    const [data, setData] = useState([])
    const [loading, setLoading] =useState(false)

    useEffect( () => {
        setLoading(true)

        pedirDatos()
            .then(res => setData(res))
            .finally(() => {
                setLoading(false)
            })
        }, [])


    return (
        <>
        {loading ? <h2>Cargando...</h2>
        : <ItemList productos={data}></ItemList>
        }
        </>

    )
}

export default ItemListContainer