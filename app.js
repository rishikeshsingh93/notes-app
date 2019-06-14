const notes = require('./notes.js');
const yargs = require('yargs') ;  
const chalk = require('chalk') ; 
const addCommand = {
    command : "add" ,  
    describe : "FOR ADDING THE FILE" , 
    builder : { 
        title :  {
             describe : "TITLE OF FILE" , 
             demandOption : true , 
             type : "string" , 
        } , 
        body : { 
              describe : "CONTENT OF FILE" , 
              demandOption : true , 
              type : "string" , 
        }
    } , 
    handler(argv){
        const done  =  notes.addNote(argv.title,argv.body) ; 
        if(done)
        console.log(chalk.green.inverse("Process is Successfull")) ; 
        else
        console.log(chalk.red.inverse("Process is Unsuccessfull")) ; 
    }
} ;  
const removeCommand =  {
    command : "remove" , 
    describe : "FOR REMOVING THE FILE" , 
    builder : { 
        title : {
            describe : "TITLE OF FILE" ,
            demandOption : true ,  
            type : 'string'  , 

        } , 
    } , 
    handler(argv) { 
         const done = notes.removeNote(argv.title) ; 
         if(done)
         console.log(chalk.green.inverse("Process is Successfull")) ; 
         else
         console.log(chalk.red.inverse("Process is Unsuccessfull")) ; 
    }
} ; 
const readCommand =  { 
     command : "read" ,  
     describe : "FOR READING THE FILE" , 
     builder : {
        title : { 
                  describe : "TITLE OF FILE" ,  
                  demandOption : true ,  
                  type : "string" , 
        } , 
     } , 
     handler(argv) { 
        const done = notes.readMyNote(argv.title);
           if(done)
           console.log(chalk.green.inverse("Process is Successfull")) ; 
           else
           console.log(chalk.red.inverse("Process is Unsuccessfull")) ; 
     }
}  ; 
const listCommand = {
     command : "list" , 
     describe : "FOR LISTING THE FILE" , 
     handler() {
           console.log(chalk.green.inverse("All notes information : "))
           const done = notes.listOfNotes();
           if(done)
           console.log(chalk.green.inverse("Process is Successfull")) ; 
           else
           console.log(chalk.red.inverse("Process is Unsuccessfull")) ; 
     }
} ; 

yargs.command(addCommand) ; 
yargs.command(removeCommand) ; 
yargs.command(readCommand) ;
yargs.command(listCommand) ;
yargs.parse() ;  