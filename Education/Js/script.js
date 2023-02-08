let mainTbody = document.getElementById('mainTbody');
let storShortcut = "";
let main2 = document.getElementById('main2')
let storShortcut2 = '';
fetch("Js/Shortcuts/exce.json")
.then(Response => Response.json())
.then(Data => {
    for (let i = 0; i < Data.ExcelShort.length; i++) {
        storShortcut += `<tr>
                            <td>${i+1}</td>
                            <td>${Data.ExcelShort[i].Action}</td>
                            <td>${Data.ExcelShort[i].Shortcut}</td>
                        </tr>`
    }
    
    mainTbody.innerHTML = storShortcut;
    main2.innerHTML = storShortcut;
})

