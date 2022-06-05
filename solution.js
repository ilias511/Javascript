function solve() {
  let input_text = document.getElementById('text').value;
  let cur_case = document.getElementById('naming-convention').value;
  let str = ''

  input_text= input_text.toLowerCase()
  if (cur_case=='Pascal Case'){
    let words = input_text.split(' ')
    for (const wo of words) {
      str+=wo.replace(/\w+/g,
      function(w){return w[0].toUpperCase() + w.slice(1).toLowerCase();});
    } 

    document.getElementById('result').textContent=
    str


  } else if (cur_case=='Camel Case'){
    let arr = input_text.split(' ');
    let pascalCaseArr = arr.map(w => (w.toUpperCase()[0] + w.substring(1)));
    let camel = pascalCaseArr.join('');
    str = camel[0].toLowerCase() + camel.substring(1);
  
    document.getElementById('result').textContent
    =
    str ;
    


document.getElementById('result').textContent = str

  }else{
    document.getElementById('result').textContent=
    'Error!'  }
}