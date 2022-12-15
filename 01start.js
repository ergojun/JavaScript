document.write("<h1>hello book  !!!! </h1>")

//-------------------------------------------------------------
let a = {name:11};
let b = a;
console.log(b);             // 11

a.name = 2;
console.log(b);             // 2

//-------------------------------------------------------------
let computer = {
    system:'windows',
    ram:'8G',
    cpu:'Intel core i5'
}

let html = `<h2> 系统：${computer.system}</h2>
            <p>内存：${computer.ram}</p>
            <p>处理器：${computer.cpu}</p>`;

console.log(html);

//-------------------------------------------------------------
//字符串
//取字符串长度
let str = 'string line';
console.log( str.length );            // 6

//取字符 str.charAt([index])   index in (0,length - 1)
console.log( str.charAt(3) );

//取字符的 Unicode 码  str.charCodeAt();
console.log( str.charCodeAt(4) );

//取字符的 4 个字符码
console.log( str.codePointAt(7) );

//拼接字符串
console.log( "helllo".concat(" world") );     // hello world

//取字符串所在位置 ("search-String",from-index) from-index 默认为 0
console.log( str.indexOf("li",4) );

//从后往前找 ("search-string",last-index)  last-index 默认为 length - 1
console.log( str.lastIndexOf("ing",9) );

//判断是否包含字符串
console.log( str.includes("ing") );            // true
console.log( str.startsWith("s") );            // true
console.log( str.endsWith("A") );              // false

//用正则表达式匹配
console.log( str.search(/d/) );                // -1  未找到

//补全字符串，相当于在字符串首尾插入字符  (总长度,"用来补的字符")
console.log( str.padStart(3) );                 // 默认用空格补
console.log( str.padStart(16,"aaaa ") );        // aaaa string line
console.log( str.padEnd(16," bbbb") );        // string line bbbb

//复制字符串
console.log( "AsB".repeat(3) );               // AsBAsBAsB

//替换字符串
console.log( str.replace("ing","IXPAAA") );   // strIPXAAA line

//截取字符串
console.log( str.slice(3,4) );                // i
console.log( str.substring(3,4) );

//拆分字符串成数组
console.log( "hello world".split("") );         
console.log( "hello world".split(" ") );        // ['hello','world']
console.log( "hello world".split(" ",1) );      // ['hello']

//大小写转换,  有 local 的适用与多语言开发，如在土耳其语，法语
console.log( "hello WORLD".toLocaleLowerCase() );
console.log( "hello WORLD".toLocaleUpperCase() );
console.log( "hello WORLD".toLowerCase() );
console.log( "hello WORLD".toUpperCase() );

//去除空格
let include_space_string = "   hello world   ";
console.log( include_space_string.trim() );             // "hello world"
console.log( include_space_string.trimStart() );        // "hello world   "
console.log( include_space_string.trimEnd() );          // "   hello world"


