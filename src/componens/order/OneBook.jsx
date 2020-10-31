import React, { useState } from 'react'
import { useSelector } from 'react-redux'

let imgs = ['https://books-library.online/files/books-library.online-11161130Iz9I7.png',
    'https://abjjadst.blob.core.windows.net/pub/36354673-ae3b-4d09-abfe-0e6fc62b38fc.png',
    'https://1.bp.blogspot.com/-Uy5jAho8350/XZT6T22LDTI/AAAAAAAAF6Q/drNI7gL5gGoxLgmWn5Z3KBdPM2yfjD6dwCLcBGAsYHQ/s1600/%25D8%25A7%25D9%2584%25D8%25B7%25D8%25B1%25D9%2582%2B%25D8%25A7%25D9%2584%25D8%25B1%25D9%258A%25D8%25A7%25D8%25B6%25D9%258A%25D8%25A9%2B%25D9%2581%25D9%258A%2B%25D8%25A7%25D9%2584%25D9%2581%25D9%258A%25D8%25B2%25D9%258A%25D8%25A7%25D8%25A1.jpg',
    'https://modo3.com/thumbs/fit630x300/40765/1438782777/%D9%85%D9%86_%D9%88%D8%B6%D8%B9_%D9%85%D8%A8%D8%A7%D8%AF%D8%A6_%D8%A7%D9%84%D9%81%D9%8A%D8%B2%D9%8A%D8%A7%D8%A1_%D8%A7%D9%84%D9%83%D9%84%D8%A7%D8%B3%D9%8A%D9%83%D9%8A%D8%A9.jpg',
]

export const OneBook = ({ match }) => {
    const [image2, setImage] = useState({ imgs, img: imgs[0] })

    const book = useSelector(store => store.books.books.find(ele => ele._id === match.params.id))
    
    const {  name,   author, image,   number } = book
    const msg = ("السلام عليكم ورحمه الله و بركاته انا مهتم بشراء  " +name + "من موقع الكتاب المستعمل ").split("").map(a => a ===" " ?  "%20" :a).join("")
   
    const changeInage = ({ target: { src } }) => setImage({ imgs: image.imgs.map(ele => ele), img: src })
    return (
        <div className="container">
            <div className="oneBook">
                <div className="oneBook__left">
                    <div>
                        <h1>{name}</h1>
                        <h3> {author}</h3>
                        <h4>:وصف البائع</h4>
                        <p>الكتاب في حاله ممتازه </p>
                    </div>
                    {/* I'm%20interested%20in%20your%20car%20for%20sale */}
                    <button className=" oneBook__btn">   <a href={`https://wa.me/966${number}?text=${msg}`}> طلب الشراء من البائع</a></button>
                </div>
                <div className="oneBook__right">
                    <div className="oneBook__images">
                        {/* {image.imgs.map((ele, key) => ele !== image.img ? <img src={ele} key={key} onClick={(e) => changeInage(e)} alt="" /> : "")} */}
                    </div>
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    )
}
