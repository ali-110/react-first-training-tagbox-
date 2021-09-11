module.exports = function () {
    var data = {
        محصولات: [
            { ردیف: 1, نام: "Kayak", نوع: "Watersports", قیمت: 275 },
            { ردیف: 2, نام: "Lifejacket", نوع: "Watersports", قیمت: 48.95 },
            { ردیف: 3, نام: "Soccer Ball", نوع: "Soccer", قیمت: 19.50 },
            { ردیف: 4, نام: "Corner Flags", نوع: "Soccer", قیمت: 34.95 },
            { ردیف: 5, نام: "Stadium", نوع: "Soccer", قیمت: 79500 },
            { ردیف: 6, نام: "Thinking Cap", نوع: "Chess", قیمت: 16 },
            { ردیف: 7, نام: "Unsteady Chair", نوع: "Chess", قیمت: 29.95 },
            { ردیف: 8, نام: "Human Chess Board", نوع: "Chess", قیمت: 75 },
            { ردیف: 9, نام: "Bling Bling King", نوع: "Chess", قیمت: 1200 }
        ],
        suppliers: [
            { ردیف: 1, نام: "Surf Dudes", شهر: "San Jose", محصولات: [1, 2] },
            { ردیف: 2, نام: "Goal Oriented", شهر: "Seattle", محصولات: [3, 4, 5] },            
            { ردیف: 3, نام: "Bored Games", شهر: "New York", محصولات: [6, 7, 8, 9] },                    
        ]
    }
    return data
}
