import './ItemListContainer.scss'
import React, { useEffect, useState } from "react";
import { pedirDatos } from '../../helpers/pedirDatos';
import { ItemList } from './ItemList';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({saludo}) => {

    const {catId} =useParams()
    console.log(catId);


    const [data, setData] = useState([])
    const [loading, setLoading] =useState(false)

    useEffect( () => {
        setLoading(true)

        pedirDatos()
            .then(res => {
                if (catId){
                const arrayFiltrado=res.filter(prod =>prod.category===catId)
                setData(arrayFiltrado)
                } else {
                    setData(res)
                }
            })
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