window.jQuery = function(nodeOrSelector){
    let nodes = {}
    nodes.addClass = function(){}
    nodes.html = function(){}
    return nodes
}

window.$ = window.jQuery

window.jQuery.ajax = function({url, method, body, successFn, failFn, headers}){

    let request = new XMLHttpRequest()
    request.open(method,url)     //配置这个对象 第一部分
    for(let key in headers) {
        let value = headers[key]
        request.setRequestHeader(key, value)
    }
    request.onreadystatechange = ()=>{                //监听对象  readyState 的变化
        if(request.readyState === 4){
            
            if(request.status >=200 && request.status <300){
                successFn.call(undefined, request.responseText)
               }else if(request.status >=400){
                failFn.call(undefined, request)
            }
        }
    }
    request.send(body)     //第四部分                               //发送这个对象
}

function f1(responseText){}
function f2(responseText){}

myButton.addEventListener('click', (e)=>{
    window.jQuery.ajax({
        url: '/xxx',
        method: 'get',
        headers: {
            'content-type':'application/x-www-form-url-urlencoded',
            'gene':'18'
        },
        successFn: (x)=>{
            f1.call(undefined,x)
            f2.call(undefined,x)
        },
        failFn: (x)=>{
            console.log(x)
            console.log(x.status)
            console.log(x.responseText)
        }
    })
})



