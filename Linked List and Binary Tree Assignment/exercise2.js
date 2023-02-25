// Create a program that allows users to enter customer data. 
// The customer data should include the following information:

// Customer Id
// Customer Name
// Purchase date(dd/mm/yy)
// Bill amount


// Store this information in a linked list. 
// The program should provide three options for viewing information:

// View all customer data in sorted order based on bill amount
// View the total purchase amount for a specific year
// View details of a specific customer based on name

class Node{
    constructor(id,name,date,amount){
        this.id=id;
        this.name=name;
        this.date=date;
        this.year=Number(date.slice(-2));
        this.amount=amount;
        this.next=null;
    }
}
class Record{
    constructor(){
        this.head=null;
        this.tail=null;
        this.lenth=0;
    }
    insert(id,name,date,amount){
        const node = new Node(id,name,date,amount);
        this.lenth++;
        if(head==null){
            head=tail=node;
        }
        else{
            tail.next=node;
            tail=node;
        }
    }
    viewsorteddata(){
        
    }

}