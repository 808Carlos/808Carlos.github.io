let suma1 = 12
let suma2 = 5
let suma3 = 6
let suma4 = 20

//para 3
if ((suma1 > suma2) && (suma1 > suma3))
{
    console.log("el mayor es suma1")
}
else if (suma2 > suma3)
{
    console.log("el mayor es suma2")
}
else
{
    console.log("el mayor e suma3")
}

//para4
if ((suma1 > suma2) && (suma1 > suma3) && (suma1 > suma4))
{
    console.log("el mayor es suma1")
}
else if ((suma4 > suma2) && (suma4 > suma3))
{
    console.log("el mayor es suma4")
}
else if (suma2 > suma3)
{
    console.log("el mayor es suma2")
}
else
{
    console.log("el mayor es suma3")
}

mayor2(n1,n2) //me devuelve el mayor, osea me devuelve n1 o n2
mayor3(n1,n2,n3)
mayor4(m1,n2,n3,n4)

function mayor2(n1,n2) {

if (n1>n2) return n1;
else return n2;

}

function mayor3(n1,n2,n3) {

 if ((n1>n2) && (n1>n3)) 
 {
    return n1;
 }
 else if (n2>n3)
 {
    return n2;
 }
 else 
 {
    return n3;
 }
}

function mayor4(n1,n2,n3,n4) {

    if ((n1>n2) && (n1>n3) && (n1>n4))
        {
            return n1;
        }
        else if ((n4>n2) && (n4>n3))
        {
            return n4;
        }
        else if (n2>n3)
        {
            return n2
        }
        else
        {
            return n3;
        }

function (n1,n2,n3,n4,n5,n6,n7,n8) 
{

return mayor2( mayor4(n1,n2,n3,n4) , mayor4(n5,n6,n7,n8) );

}

let aNum = [];

aNum[0]=9;
aNum[1]=99;
aNum[2]=999;

//mayor de este array
let mayor = -9999999;
for (let index = 0; index < aNum, length; index++)
{
    if (aNum[index] > mayor)
    {
        mayor = aNum[index];
    }
}
