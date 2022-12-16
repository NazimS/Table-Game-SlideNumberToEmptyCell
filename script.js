    
    const cedvel = document.getElementById("cedvel");
    let kod = '';
    let arr = ['']; 
    let bos = [];
    // let n = 1;

    for (let i = 1; i <= 15; i++) {
        arr.push(i);
    }
  
   // design table with random units
    for (let i = 1; i <= 4; i++) {
        kod += "<tr>"
            for (let k = 1; k <= 4; k++) {
                let x = rand(0, arr.length - 1);
                kod += `<td id = "c${i}${k}" onclick = "slide(${i},${k})">${arr[x]}</td>`;
                if (arr[x] == '') bos = [i, k]
                arr.splice(x, 1);
            }
        kod += "</tr>"
    }
    cedvel.innerHTML = kod;

    function  slide(i, k) {
        let bosxana = document.getElementById(`c${bos[0]}${bos[1]}`)
        let basilan  = document.getElementById(`c${i}${k}`)


        if (i == bos[0] && Math.abs(k - bos[1]) == 1 ||
            k == bos[1] && Math.abs(i - bos[0]) == 1 ) {
                bosxana.innerHTML = basilan.innerHTML;
                basilan.innerHTML = ''
                bos = [i, k]
                
            }
        // console.log(i, k);
    }

    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
