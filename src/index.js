const fs = require('fs/promises');

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	fs.writeFile('file.txt', 'World', (err)=>{
		if(err){
			console.log(err);
			return;
		}
		console.log("File Created !");
	});
	// dont chnage function name
}

const myFileReader = async (fileName) => {
	// write code here
	fs.readFile('file.txt', (err, data)=>{
		if(err){
			console.log(err);
			return;
		}
		console.log(data);
	});
	// dont chnage function name
}


const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	fs.writeFile('file.txt', 'Hello', (err)=>{
		if(err){
			console.log(err);
			return;
		}
		console.log("File Updated !");
	});
	// dont chnage function name
}

const myFileDeleter = async (fileName) => {
	// write code here
	fs.unlink('file.txt', (err)=>{
		if(err){
		console.log(err);
		return;
		}
		console.log("File Deleted !");
	});
	// dont chnage function name
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter };