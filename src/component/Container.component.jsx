import React, { useEffect,useContext } from 'react';
import { PhotoContext } from '../context/PhotoContext.component';
import Gallery from './Gallery.component';
import Loader from './Loader.component';

const Container = ({ searchTerm }) => {

    const { images, loading, runSearch } = useContext(PhotoContext);
    useEffect(() => {
        runSearch(searchTerm);
    },[searchTerm]);

    return (
        <div className='photo-container'>
            {loading ? <Loader/> : <Gallery data={images}/>}
        </div>
    );
}

export default Container;