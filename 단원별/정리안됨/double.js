let menu = {
    width: 200,
    height: 300,
    title: "My menu",
};

function multiplyNumeric(obj) {
    for(let key in obj) {
        if(isNaN(obj.key) === false) {
            obj.key *= 2;
        }
    }
}

console.log(multiplyNumeric(menu));