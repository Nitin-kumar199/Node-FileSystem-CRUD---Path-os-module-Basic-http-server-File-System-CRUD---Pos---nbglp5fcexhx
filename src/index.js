const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	
	await
	fs.writeFile(fileName, fileContent)
	
	
}
myFileWriter('file.txt', 'I am from filewriter.')


const myFileReader = async (fileName) => {
	
	const data=await
	fs.readFile(fileName)
		return data.toString();
	
	
}
myFileReader('file.txt')
.then(data=>console.log(data));


const myFileUpdater = async (fileName, fileContent) => {
	await
	fs.writeFile(fileName, fileContent)
}
myFileUpdater('file.txt', 'fileUpdater Updated fileWriter !')

const myFileDeleter = async (fileName) => {
	await
	fs.unlink(fileName)
	console.log('file deleted !!!');
}
//myFileDeleter('file.txt')




module.exports = { myFileWriter, myFileReader, myFileUpdater, myFileDeleter};