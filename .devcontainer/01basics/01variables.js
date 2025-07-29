const accountId = 1213
let accountEmail = "123@c.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;
//accountId = 2
console.log(accountId);
accountEmail = "125@c.com"
accountPassword = "1212"
accountCity = "Bengluru"
console.table([accountEmail, accountPassword, accountCity, accountState])
/* 
Prefer not to use var
because of issue in block scope and functional scope
*/