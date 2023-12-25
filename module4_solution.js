var names = ["John", "Jane", "Jack", "Marry", "Lisa"]


for (var i = 0; i < names.length; i++){
    var currentName = names[i];
    if(currentName.charAt(0).toLowerCase() === 'j') {
        crossOriginIsolated.log("Goodbye" + currentName);
    } else {
        console.log("Hello" + currentName)
    }
}