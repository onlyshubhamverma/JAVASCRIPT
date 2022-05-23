function Person(firstName,lastName,age,skills,dateOfbirth,address,married,profession)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.skills = skills;
    this.dateOfbirth = dateOfbirth;
    this.address = address;
    this.married = married;
    this.profession = profession;
}

Person1 = new Person("shubham","verma",23,['python','c#'],"10/02/1999",{city:"Ludhiana",pincode:141007},"false","AnalystA4");
Person2 = new Person("Mohit","veer",24,["java","c++"],"12/04/1999",{city:"fatehgarh sahib",pincode:141010},"false","SoftwareDeveloper");

print=function()       //printing the object using Global print method.
{
    console.log(Person1);
    console.log(Person2);
}();//function call


function Person(firstName,lastName,age,skills,dateOfbirth,address,married,profession)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.skills = skills;
    this.dateOfbirth = dateOfbirth;
    this.address = address;
    this.married = married;
    this.profession = profession;
}
Asif = new Person("Ranjith","Kumar",23,['java','c#'],"30/07/1998",{city:"Chittoor",pincode:517002},"false","AnalystA4");
Twinkle = new Person("RRK",22,["html","css"],"05/07/1999","false","JrAnalyst");
Person1 = new Person("shubham","verma",23,['python','c#'],"10/02/1999",{city:"Ludhiana",pincode:141007},"false","AnalystA4");
Person2 = new Person("Mohit","veer",24,["java","c++"],"12/04/1999","false","SoftwareDeveloper");

var RRK = Object.create(shubham); //inheriting the common properties/storing Akshay object in Twinkle
print = function()
{
    console.log(Arun);
    console.log(Mohit.lastName);
    console.log(Mohit.address);
    console.log(Ganesh.lastName);
    console.log(Ganesh.skills);
    console.log(Ganesh.address);
    console.log(Ganesh.firstName);
}();