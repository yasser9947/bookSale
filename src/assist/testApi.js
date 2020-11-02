import Axios from "axios"
import swal from "sweetalert"

export const  books =[{
    id :"1",
    name : "مبادئ الفيزياء",
    major : "فيزياء",
    bookCase : "جيد" ,
    price : "21" ,
    code :"فيز١٠١", 
    status : true ,
    author :"احمد رمزي" , 
    number :"0548545888",
    image :"https://books-library.online/files/books-library.online-11161130Iz9I7.png"

} , {
    id :"2",
    name : "المدخل الى البناء الجبري",
    major : "رياضيات",
    bookCase : "ممتاز" ,
    price : "45" ,
    code :"ريض ١٣١", 
    status :false ,
    number :"0548545888",
    author :"عبدالعزيز السلمان" , 
    image :"https://media.zid.store/d8719f5d-797e-4bbc-952f-27330387c3b1/f712e3c2-c370-41db-9049-34f81c5eafc3.jpeg"

}]

export let names = [{ name: "اسم الكتاب", to: "name" }, { name: "التخصص", to: "major" }, { name: "الحالة", to: "bookCase" }, { name: "المبلغ", to: "price" }, { name: "المقرر", to: "code" }, { name: "حالة البيع ", to: "status" }]

export let mejors = [ 
    "هندسة كهربائية",
    "هندسة مكانيكية",
    "التمريض",
    "العلاج طبيعي والتأهيل الصحي",
    "اجهزه طبية",
    "المختبرات طبية",
    "تربية خاصة",
    "رياض أطفال",
    "اللغة الانجليزية",
    "لغة عربية",
    "دراسات إسلامية",
    "تربية خاصة",
    "رياض أطفال",
    "قانون",
    "إدارة اعمال",
    "محاسبة",
    "قانون",
    "تقنية معلومات",
    "علوم حاسب",
    "انجليزي",
    "شبكات",
    "موارد بشرية",
    "طب وجراحة الأسنان",
    "علوم حاسب",
    "اللغة الانجليزية",
    "لغة عربية",
    
    "فيزياء", "كيمياء", "رياضيات" , "الطب والجراحه العامه" , "هندسة مدنية وبيئية"]

    export const changeStatus = (id) =>{
        swal({
            title: " هل انت متأكد من انه تم بيع الكتاب؟",
           
            icon: "warning",
            buttons: ["لا سوف اتراجع", "نعم متأكد"],
            successMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
            Axios.put(`/api/book/status/${id}`)
            .then(data => swal("الحمد لله ,الله يربحك", {icon: "success",}))
            .catch(err =>console.log(err))
              
            } else {
              swal({
                text:   "الكتاب لا يزال معروض منصه البيع",
                buttons :"حسنا"
              });
            }
          });



     
    }