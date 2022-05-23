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
Person2 = new Person("Mohit","veer",24,["java","c++"],"12/04/1999","false","SoftwareDeveloper");

var Mohit= Object.create(shubham); //inheriting the common properties/storing shubham object in Mohit
print = function()
{
    console.log(shubham);
    console.log(Mohit.lastName);
    console.log(Mohit.address);
    console.log(shubham.lastName);
    console.log(shubham.skills);
    console.log(shubham.address);
    console.log(shubham.firstName);
}();