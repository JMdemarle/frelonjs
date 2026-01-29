import React, { useState, useEffect, } from 'react';
import { useSearchParams } from "react-router-dom";

import { useParams } from 'react-router-dom';

import Grid2 from '@mui/material/Grid'; // Grid version 2
import Paper from '@mui/material/Paper';


import { useDispatch, useSelector } from 'react-redux'
import MenuBar from '../../components/MenuBar'
import { grey, amber, green } from '@mui/material/colors';

import NewPassword from '../components/NewPassword';


function ResetPasswordScreen() {
    const { affReine, affGenealogie, affFilles } = useSelector(state => state.display)
    const [ErrorMessage, setErrorMessage] = useState('');

    const dispatch = useDispatch()
    const [searchParams] = useSearchParams();
    const [token, setToken] = useState();
    
    console.log('new password screen');
    console.log(token);
    console.log(searchParams);
    console.log(searchParams.entries);
    console.log(searchParams.get('token'));
    const handleLoadingError = (res) => {
        if (res.error === 404) {
            setErrorMessage('Reine non trouvée');


        } else {
            console.log("else");
            console.log(res.message);
            console.log(typeof (res.message));
            console.log(res.message);
            setErrorMessage(JSON.parse(res.message).message);
        };
    };

    useEffect(() => {

        let mounted = true;
        //         .catch(handleLoadingError);  
        setToken(searchParams.get('token'));
        console.log(token);

        return () => { mounted = true };

    }, []);


    return (
        <>
            <MenuBar />
            <Grid2 elevation={10} sx={{ bgcolor: amber[100] }} container><p>entrée</p>
            <Paper>
            entrée
            </Paper>
<p>{searchParams}</p>

           <NewPassword token={token} />

            </Grid2>

        </>
    );
}


export default ResetPasswordScreen;


