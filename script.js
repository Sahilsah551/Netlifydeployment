function labelcreate(tagname,attrname,attrvalue,content){
    var ele = document.createElement(tagname);
    ele.setAttribute(attrname,attrvalue);
    ele.innerHTML=content
    return ele;
    }
    
    function linebreakers(tagname){
        var ele=document.createElement(tagname);
        return ele;
    }
    
    function inputele(tagname,attrname,attrvalue,attrname1,attrvalue1){
        var ele=document.createElement(tagname);
        ele.setAttribute(attrname,attrvalue);
        ele.setAttribute(attrname1,attrvalue1);
        return ele;
    }
    
    var firstname=labelcreate("Label", "For", "firstname", "Firstname")
    var br = linebreakers("tagname")
    var type=inputele("input", "type","firstname", "id","firstname")
    var br1 = linebreakers("tagname")
    
    document.body.append(firstname,br,type,br1)
    
    var middlename=labelcreate("Label", "For", "middlename", "Middlename")
    var br = linebreakers("tagname")
    var type=inputele("input", "type","middlename", "id","middlename")
    var br1 = linebreakers("tagname")
    
    document.body.append(middlename,br,type,br1)
    
    var lastname=labelcreate("Label", "For", "lastname", "Lastname")
    var br = linebreakers("tagname")
    var type=inputele("input", "type","lastname", "id","lastname")
    var br1 = linebreakers("tagname")
    
    document.body.append(lastname,br,type,br1)
    
    var email=labelcreate("Label", "For", "email", "Email")
    var br = linebreakers("tagname")
    var type=inputele("input", "type","email", "id","email")
    var br1 = linebreakers("tagname")
    
    document.body.append(email,br,type,br1)
    
    var password=labelcreate("Label", "For", "password", "Password")
    var br = linebreakers("tagname")
    var type=inputele("input", "type","password", "id","password")
    var br1 = linebreakers("tagname")
    
    document.body.append(password,br,type,br1)
    
    