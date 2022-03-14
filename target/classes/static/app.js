// JavaScript source code

const searchForm = document.querySelector('.search-form');
let text = document.getElementById('text');
let index = document.getElementById('index');



searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('submit clicked')

    let xhr = new XMLHttpRequest(),
        params = 'text=' + text.value + '&index=' + index.value;
    xhr.open('GET', '/test?'+params, true);
    
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
            console.log(xhr.responseText);
            let json = JSON.parse(xhr.responseText);
            
            const boxes = document.querySelectorAll('.card');

boxes.forEach(card => {
  card.remove();
});


			document.getElementById('search').style.marginLeft = '10%';
			document.getElementById('search').style.marginTop = '5%';
			document.getElementById('search').style.width = "auto";

            //var e =  document.getElementById('res');
            
            //if (typeof(e) != 'undefined' && e != null)
			//{
  			//	e.remove();
			//}
            //document.getElementsByClassName("title").hidden = true;
            //document.getElementById("search").hidden = true;
            //document.getElementById("search").classList.add('form2');
			//document.getElementById("search").classList.remove('form-container');
            document.getElementById("response").hidden = false;
            let d = document.createElement('div');
            d.setAttribute("class", "res");
            for (var i = 0; i < json.length; i++) {
                var obj = json[i];
                console.log(obj.Title);
                console.log(obj.Url);
                console.log(obj.Text);
                
                let div = document.createElement('div');
                div.setAttribute("class", "card");

                let title = document.createElement('h4');
                title.innerHTML = obj.Title;

                let url = document.createElement('a');
                url.setAttribute("href", obj.Url);
                url.innerHTML = obj.Url;


                let text = document.createElement('p');
                var tex = obj.Text;
                const myArray = tex.split(" ", 30);
                var s="";
                for (j in myArray){
	                s+=myArray[j]+" ";
                }
                text.innerHTML = s.trim()+"...";


                div.appendChild(title);
                div.appendChild(url);
                div.appendChild(text);
                document.getElementById("response").appendChild(div);
            }
            //document.getElementById("response").append(res);
            
        }
    }
    
    console.log(params);
    xhr.send(null);
})

// JavaScript source code
// const searchForm = document.querySelector('.search-form');
// let text = document.getElementById('text');
// let index = document.getElementById('index');


// searchForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     console.log('submit clicked')

//     let xhr = new XMLHttpRequest(),
//         params = 'text=' + text.value + '&index=' + index.value;
//     xhr.open('GET', '/test?'+params, true);
//     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
//             console.log(xhr.responseText);
//             let json = JSON.parse(xhr.responseText);
//             document.getElementById("search").hidden = true;
//             document.getElementById("response").hidden = false;
//             for (var i = 0; i < json.length; i++) {
//                 var obj = json[i];
//                 console.log(obj.Title);
//                 console.log(obj.Url);
//                 console.log(obj.Text);
                
//                 let div = document.createElement('div');
//                 div.setAttribute("class", "card");

//                 let title = document.createElement('h4');
//                 title.innerHTML = obj.Title;

//                 let url = document.createElement('a');
//                 url.setAttribute("href", obj.Url);
//                 url.innerHTML = obj.Url;


//                 let text = document.createElement('p');
//                 var tex = obj.Text;
//                 const myArray = tex.split(" ", 30);
//                 var s="";
//                 for (j in myArray){
// 	                s+=myArray[j]+" ";
//                 }
//                 text.innerHTML = s.trim()+"...";


//                 div.appendChild(title);
//                 div.appendChild(url);
//                 div.appendChild(text);
//                 document.getElementById("response").appendChild(div);
//             }
//         }
//     }
//     console.log(params);
//     xhr.send(null);
// })