const Categories = [
    { code: "advertisement", name: "Harassment" },
    { code: "adult", name: "Stalking" },
    { code: "development", name: "Domestic Violence" },
    { code: "educational", name: "Rape" },
    { code: "entertainment", name: "Sexual Assault" },
    { code: "facts", name: "Cyber Abuse" },
    { code: "fake-news", name: "Child Abuse" },
    { code: "news", name: "Human Trafficking" },
    { code: "programming", name: "Workplace Harassment" },
    { code: "question", name: "Acid Attacks" },
    { code: "timepass", name: "Public Harassment (Eve-Teasing)" },
]

const getCategoryByCode = (code) => {
    for(let i=0; i< Categories.length; i++){
        if(Categories[i]['code'].toUpperCase() === code.toUpperCase()){
            return  Categories[i]
        }
    }
}

export {Categories, getCategoryByCode}