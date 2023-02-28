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

class Node {
  constructor(id, name, date, amount) {
    this.id = id;
    this.name = name;
    this.date = date;
    this.year =
      Number(date.slice(-2)) > 23
        ? 1900 + Number(date.slice(-2))
        : 2000 + Number(date.slice(-2));
    this.amount = amount;
    this.next = null;
  }
}
class Record {
  constructor() {
    this.head = null;
    this.tail = null;
    this.lenth = 0;
  }
  insert(id, name, date, amount) {
    const node = new Node(id, name, date, amount);
    this.lenth++;
    if (this.head == null) {
      this.head = this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }
  viewInYear(value) {
    let curr = this.head;
    let sum = 0;
    while (curr != null) {
      if (curr.year == value) {
        sum += curr.amount;
      }
      curr = curr.next;
    }
    console.log(`Total purchase amount for the year ${value} is ${sum}`);
  }
  viewDetailsByName(value) {
    let curr = this.head;
    while (curr != null) {
      if (curr.name == value) {
        console.log(
          `Customer id ${curr.id} purchased on ${curr.date} and amount was ${curr.amount}`
        );
      }
      curr = curr.next;
    }
  }
}

const record = new Record();
record.insert(123, "Shailesh", "02/03/22", 3000);
record.insert(124, "Shailes", "02/03/23", 3000);
record.insert(125, "Shaile", "02/03/12", 3000);
record.insert(126, "Shail", "02/04/22", 3000);
record.insert(17, "Shai", "02/03/99", 3000);
record.insert(183, "Sha", "02/03/50", 3000);
record.insert(193, "Sh", "02/03/44", 3000);
record.insert(223, "S", "02/03/55", 3000);
record.insert(123, "Shailesh", "02/03/23", 3000);
record.insert(123, "Shailesh", "02/03/24", 3000);
record.insert(123, "Shailesh", "02/03/81", 3000);
record.insert(123, "Shailesh", "02/03/22", 3000);
record.insert(123, "Shailesh", "02/03/14", 3000);
record.insert(343, "Saaaaaa", "02/03/66", 3000);
record.insert(553, "Sdddd", "02/03/77", 3000);
record.insert(663, "Sslkdknijiw", "02/03/11", 3000);
record.insert(773, "Shaaaaaaaaaaa", "02/03/14", 3000);

record.viewInYear(1999);
record.viewDetailsByName("Shailesh");
