import React from "react";

// img upload
import { useEffect, useState } from 'react';
import FileBase64 from 'react-file-base64';
import { createItem, getItems } from '../../utils/functions';


// function PageContent({ ownPage, userId }) {
function PageContent() {

    // img
    const [item, setItem] = useState({ title: '', image: '' });
    const [items, setItems] = useState([])
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        const result = await createItem(item);
        setItems([...items, result]);
    }
    useEffect(() => {
        const fetchData = async () => {
            const result = await getItems();
            console.log('fetch data;m', result);
            setItems(result);
        }
        fetchData()
    }, [])

    return (
        <div className="container">
            <pre>{JSON.stringify(item, null, '\t')}</pre>
            <form action="" onSubmit={onSubmitHandler}>
                <input type="text" className="input-field"
                    onChange={e => setItem({ ...item, title: e.target.value })}
                />
                <FileBase64
                    type="file"
                    multiple={false}
                    onDone={({ base64 }) => setItem({ ...item, image: base64 })}
                />
                <div className="right-align">
                    <button className="btn">submit</button>
                </div>
            </form>
            {items?.map(item => (
                <div className="card" key={item._id}>
                    <div className="card-image waves-effect waves-block waves-light">
                        <img className="activator" style={{ width: '100%', height: 300 }} src={item.image} alt={item.title}/>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4">{item.title}</span>
                    </div>
                </div>
            ))}
        </div>
    );

    // function for GETting User data by userId

    // function for PUTting (or POSTing?) new/edited User data by userId
    // double-check authentication before sending data

    // function for GETting all UserLinks associated with User by userId and storing them in an array

    // function for PUTting (or POSTing?) new/edited UserLinks data by userId
    // double-check authentication before sending data

    // function for edit mode


    // return (
    //     <>
    //         {/* Display user content: display name, photo, etc. */}
    //         {/* Display edit buttons if ownPage === true */}
    //         {/* Display copyable URL to link to page if ownPage === true */}
    //         {/* Iterate through the array of UserLinks */}
    //         {/* Display edit buttons if ownPage === true */}

    //     </>
    // )
}

export default PageContent;