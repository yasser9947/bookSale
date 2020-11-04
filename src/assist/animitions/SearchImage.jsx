import Axios from "axios"
import swal from "@sweetalert/with-react"



import React from 'react'

export const  SearchImage = ({ image , state , setState}) => {

    const seacrhImages = (value, setstate, state) => {
        swal({
            text: 'مثلا كتاب الثقافة الاسلامية',
            content: "input",
            button: {
                text: "ابحث",
                closeModal: false,
            },
        }).then((value) => {
            Axios.put('/api//book/images', { search: value })
                .then(data => {
                    console.log(data)
                    let crazyArray = ""
                    let a = crazyArray
                    swal(
                        <div>
                            <h1>اختر الصوره بالضغط عليها</h1>
                            <div className="imageInsearch">
                                {data.data.map((ele, i) => <img src={ele.url} key={i} style={{ border: crazyArray[i] }} onClick={() => { setstate({ ...state, image: ele.url })}} height="150px" width="150px" />)}
                            </div>

                        </div>
                    )
                })
        })
    }

    const uploadImagefunc = (e,  setstate ,state) => {

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Client-ID 0c8488e195dbe2d");

        var formdata = new FormData();
        formdata.append("image", e.target.files[0]);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://api.imgur.com/3/image", requestOptions)
            .then(response => response.json())
            .then(result => setstate({ ...state, image: result.data.link }))
            .catch(error => console.log('error', error));
    }

    return (
        <>
            <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", width: "100%" }}>
                <input as="input" className="btn" type="file" style={{ width: "20%" }} onChange={(e) => uploadImagefunc(e , setState , state)} />
                <h6>او ارفع الصوره من جهازك</h6>
                <button className="btn" style={{ width: "25%", padding: "6px 0px" }} type="button" onClick={(e) => seacrhImages(e ,setState , state)} > ابحث عن صوره</button>
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <img name="image" placeholder="الصوره" src={image ? image : state.image} style={{ height: "50px", width: "50px", float: "right", marginTop: "5px", marginRight: "10px" }} value={image} />

            </div>
        </>
    )
}



// const seacrhImages = (value) => {
//     swal({
//         text: 'مثلا كتاب الثقافة الاسلامية',
//         content: "input",
//         button: {
//             text: "ابحث",
//             closeModal: false,
//         },
//     }).then((value) => {
//         Axios.put('/api//book/images', { search: value })
//             .then(data => {
//                 console.log(data)

//                 let a = crazyArray
//                 swal(
//                     <div>
//                         <h1>اختر الصوره بالضغط عليها</h1>
//                         <div className="imageInsearch">
//                             {data.data.map((ele, i) => <img src={ele.url} key={i} style={{ border: crazyArray[i] }} onClick={() => { setstate({ ...state, image: ele.url }); a[i] = "6px solid black"; setCrazyArray(a) }} height="150px" width="150px" />)}
//                         </div>

//                     </div>
//                 )
//             })
//     })
// }
// const uploadImagefunc = (e) => {

//     var myHeaders = new Headers();
//     myHeaders.append("Authorization", "Client-ID 0c8488e195dbe2d");

//     var formdata = new FormData();
//     formdata.append("image", e.target.files[0]);

//     var requestOptions = {
//         method: 'POST',
//         headers: myHeaders,
//         body: formdata,
//         redirect: 'follow'
//     };

//     fetch("https://api.imgur.com/3/image", requestOptions)
//         .then(response => response.json())
//         .then(result => setstate({ ...state, image: result.data.link }))
//         .catch(error => console.log('error', error));
// }