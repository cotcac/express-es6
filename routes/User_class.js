class Users {
    constructor(){
        console.log('create new instance of class');
    }

    insert(req, res, next){
        res.send('It works from class yaaa!');
    }
    single(req, res, next) {
        res.send('Response single resoure');
    }
}
module.exports = Users;