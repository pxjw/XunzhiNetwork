/**
 * Created by lenovo on 2015/6/10.
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
        s.className="s1";
    };
    obj.onblur=function(){
        if(!fun(this.value)){
            s.innerHTML="���Ϸ�";
            s.className="s2";
        }
    };
    if(click=="click")
        obj.onblur();
}

//ҳ�����������
onload=login;

function login(click){
    var stat = true;
    var username = document.getElementsByName('username')[0];
    var password = document.getElementsByName('passw')[0];

    tspan(username).nodeName;

    check(username,"�û���6~20λ",function(val){
        if(val.match(/^\S+$/)&&val.length>=6&&val.length<=20)
            return true;
        else
            stat=false;
        return false;
    },click);
    check(password,"����6~18λ",function(val){
        if(val.match(/^\S+$/)&&val.length>=6&&val.length<=20)
            return true;
        else
            stat = false;
        return false;
    },click);

    return stat;
}