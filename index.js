var fs = require('fs');
var colors = require('colors');

fs.readdir('.', function(err,data){
	console.log('Dane przed zapisem!'.green);
	console.log(data);
	fs.writeFile('./strukturafolderu.txt', 'A tak wyglądają po zapisie!', function(err){
		if (err) throw err;
		console.log('Zapisano!'.green);
		fs.readFile('./strukturafolderu.txt', 'utf-8', function(err, data) {
            console.log('Dane po zapisie'.green)
            console.log(data);
        });
	});
});