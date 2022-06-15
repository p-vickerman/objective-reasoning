// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

function isAdmin (user){
    if (user.userRole === 'ADMIN'){
        return true
    } else {
        return false
    }  
}

function getEmail (user){
    let email = "@codeimmersives.com"
    user = user.firstName + "." + user.lastName + email
   
    return user.toLowerCase()
}

function getPlaylistLength (music){
    return music.songs.length
}

function getHardestHomework(homework){
    if(homework.length === 0){
        return ''}
    let lowest = homework[0].averageScore;
    let lowestName = homework[0].name;

    for (let i = 0; i < homework.length; i++){
        if(homework[i].averageScore < lowest){
            lowest = homework[i].averageScore;
            lowestName = homework[i].name;
        }
    }
    return lowestName
}

function createPhonebook (name, number){
    let object = {};
    for(let i = 0; i < name.length; i++){
        object[name[i]] = number[i];
    }
    return object
    

}




// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};