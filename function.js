function greet (name ,callback)
{
    console.log('hi'+' '+name);
    callback();
}
        function callme()
{
    console.log ('i am call back function');

}   
        greet('Aman',callme);