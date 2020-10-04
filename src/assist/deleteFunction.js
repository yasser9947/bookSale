export const deleteFunction= (words) =>{
    let s = []
    words.split("").forEach(word => {
        if (word  != "/") return s.push(word)
    });
    

    return s.join("")
}


// console.log(deleteFunction("/yasser/ss"))