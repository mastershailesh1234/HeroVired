function removeduplicate(){
    var arr = Array.apply(null,Array(26)).map(function(x,i){return 0});
    // var given = [1,1,1,1,3,3,3,3,5,5,5,5,7,7,7,7,9,9,9,9]
    var given = ["mango","apple","mango","banana","apple"]
    // console.log(arr);
    var ans = [] 
    given.sort();
    ans.push(given[0])
    for(var i=1;i<given.length; i++){
        if(given[i]==given[i-1]){
            continue;
        }
        else{
            ans.push(given[i]);
        }
    }
    console.log(ans)
}

removeduplicate();