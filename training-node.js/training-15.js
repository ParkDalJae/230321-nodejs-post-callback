const stringExample = "참깨빵 위에 순쇠고기 패티 두 장 특별한 소스 양상추 치즈에 피클 양파까아지 빠빠빠라빠"

function splitString(stringParams){
    let result = stringParams.split(` `)
    return result;
}

function appendString(stringArray,callback){
    let body = "";
    stringArray.forEach(function(element){
        body = body + element
    })
    
    // callback = body
    callback(body);
}

let bodyTemplate = ''
let resultCase = appendString(splitString(stringExample),function(body){
    console.log(body);
    bodyTemplate = bodyTemplate + body.substring(0, body.indexOf("티")+1)
    console.log(bodyTemplate);
})
console.log(typeof(resultCase))

function elementMaker(string){
    return `<div>${string}</div>`
}

console.log("--------------------------")
console.log(elementMaker(bodyTemplate))