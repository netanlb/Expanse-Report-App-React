/*

    This is a wrapper for using LocalStorage as database
    All data will be saved inside of array
    
*/


module.exports = {
    getAllExpanases(){
        return JSON.parse(localStorage.getItem("expanses"))
    },
    insertExpanse(expanseObject){
        let temp = this.getAllExpanases
        temp.push(expanseObject)
    }
}

//Get Years
//Get Months


