import { useEffect, useState } from "react"
import {getGifs} from '../helpers/getGifs'




export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {

        getGifs (category).then( imgs => {
            //timeout solo para mirar el 'Cargando...'
            setTimeout(() => {

                setState({
                    data: imgs,
                    loading: false
                })
                
            }, 800);
        })
      
    }, [category]);    

    

    return state;


}