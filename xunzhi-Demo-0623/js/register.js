/**
 * Created by lenovo on 2015/6/4.
 */
function tspan(cobj){

    while(1){
        if(cobj.nextSibling.nodeName!="SPAN")
            cobj=cobj.nextSibling;
        else
            return cobj.nextSibling;
    }

}

function check(obj,info,fun,click){
    var s = tspan(obj);
    obj.onfocus = function(){

        s.innerHTML=info;
        s.className="s2";

    };
    obj.onblur=function(){
        if(fun(this.value)){
            s.innerHTML="输入正确";
            s.className="s4";
        }else{
            s.innerHTML=info;
            s.className="s3";
        }
    };
    if(click=="click")
        obj.onblur();
}

//页面加载完运行
onload=reg;
function reg(click){
    var stat = true;
    var username = document.getElementsByName('username')[0];
    var password = document.getElementsByName('passw')[0];
    var repassword = document.getElementsByName('repassw')[0];
    var email = document.getElementsByName('email')[0];

    tspan(username).nodeName;

    check(username,"输入用户名6-20之间",function(val){
        if(val.match(/^\S+$/)&&val.length>=6&&val.length<=20)
            return true;
        else
            stat=false;
        return false;
    },click);
    check(password,"输入用密码6-20之间",function(val){
        if(val.match(/^\S+$/)&&val.length>=6&&val.length<=20)
            return true;
        else
            stat = false;
        return false;
    },click);
    check(repassword,"确定密码与上面一致",function(val){
        if(val.match(/^\S+$/)&&val.length>=6&&val.length<=20&&val==password.value)
            return true;
        else
            stat = false;
        return false;
    },click);

    check(email,"请按邮箱规则输入！",function(val){
        if(val.match(/\w+@\w+\.\w/))
            return true;
        else
            stat = false;
        return false;
    },click);

    return stat;
}