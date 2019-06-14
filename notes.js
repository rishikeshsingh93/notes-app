const fs = require('fs') ;  
const chalk = require('chalk') ; 


//Adding Notes function
const addNote = (title,body)=> { 
     const newNote = {
         title : title ,  
         body : body , 
     } ;  
     const allNotes = findAllNotes() ;
     let copyExist = false ; 
     debugger 
     for(let i=0;i<allNotes.length;i++){
         if(allNotes[i].title==title){
             copyExist = true ; 
             break ; 
         }
     }
     if(copyExist){
         console.log(chalk.red.inverse("Notes Title Already Exists")) ;  
         return false ; 
     }
     else { 
     allNotes.push(newNote) ; 
     fs.writeFileSync('./notes.json',JSON.stringify(allNotes)) ; 
     return true ; 
     }
} ; 



//Removing Note Function   
const removeNote =  (title)=>{ 
     const allNotes =  findAllNotes() ; 
     let removalDone = false ; 
     for(let i=0;i<allNotes.length;i++){
         if(allNotes[i].title==title){
               allNotes.splice(i,1) ; 
               removalDone = true ; 
         }
     }
     if(removalDone){
        fs.writeFileSync('./notes.json',JSON.stringify(allNotes)) ; 
        return true ;
     }
     else {
        console.log(chalk.red.inverse("File does Not Exists")) ; 
        return false ; 
     }  
}

// Listing Note Function
const listOfNotes = ()=>{
    const allNotes = findAllNotes() ;  
    if(allNotes.length==0){
       console.log(chalk.yellow.inverse("No Any Notes exist"));
       return false ; 
    }
    else {
        for(let i=0;i<allNotes.length;i++)
          console.log( chalk.yellow(i+1) + ".  " +  chalk.yellow.inverse(allNotes[i].title)) ; 
        return true ; 
    }
}

const readMyNote = (title) =>{
    const allNotes = findAllNotes() ;  
    let findMyNote  ; 
    for(let i=0;i<allNotes.length ; i++) { 
        if(allNotes[i].title==title){
            findMyNote = allNotes[i] ; 
            break ; 
        }
    }
    if(findMyNote===undefined) {
         console.log(chalk.red.inverse("Your Note is UNAVAILABLE")) ; 
         return false ; 
    }
    else { 
        console.log(chalk.green.inverse(findMyNote.title)) ; 
        console.log(chalk.gray.inverse(findMyNote.body) + "\n") ; 
        return true ; 
    }
}

const findAllNotes= ()=> { 
    try { 
     const allNotesStrObj = fs.readFileSync('./notes.json').toString() ; 
     const allNotes =  JSON.parse(allNotesStrObj) ; 
     return allNotes  ; 
    } catch(error) { 
           return [] ;  
    }
 }


module.exports = {
    addNote : addNote , 
    removeNote : removeNote ,
    listOfNotes : listOfNotes , 
    readMyNote : readMyNote ,  
}; 