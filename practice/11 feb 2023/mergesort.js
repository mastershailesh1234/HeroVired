function merge(left, right, middle, arr) {
  var m1 = middle - left + 1;
  var m2 = right - middle;
  var leftArr = new Array(m1);
  var rightArr = new Array(m2);
  for (let i = 0; i < m1; i++) {
    leftArr[i] = arr[left + i];
  }
  for (let i = 0; i < m2; i++) {
    rightArr[i] = arr[middle + 1 + i];
  }
  var x=0,y=0,z=left;
  while(x<m1&&y<m2){
    if(leftArr[x]<=rightArr[y]){
        arr[z]=leftArr[x];
        x++;
    }
    else{
        arr[z]=rightArr[y];
        y++;
    }
    z++;
  }
  while(x<m1){
    arr[z] = leftArr[x];
    x++;
    z++;
  }
  while (y < m2) {
    arr[z] = rightArr[y];
    y++;
    z++;
  }
}
function mergeSort(arr,left,right){
    if(left>=right){
        return;
    }
    var m = Math.floor((left+right)/2);
    mergeSort(arr,left,m);
    mergeSort(arr,m+1,right);
    merge(left,right,m,arr);
}

var arr=[10,23,9,40,50,2,90,100];
console.log(arr);
mergeSort(arr,0,arr.length-1);
console.log(arr);