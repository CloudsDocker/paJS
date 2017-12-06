let data = [
    [
        {name: "IBM", price:12},
        {name: "Apple", price:120}        
    ],
    [
        {name: "Google", price:100},
        {name: "MorganStanley", price:30}        
    ]
]
Array.prototype.concatAll = function () {
    let results = [];
    
    this.forEach(function(item){
        item.forEach(function(subItem){
            results.push(subItem);
        })
    })
    return results;
}
data.concatAll().forEach(function(item){
    console.log("==== concatAll: " + JSON.stringify(item));
})
