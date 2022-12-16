    
    const cedvel = document.getElementById("cedvel");
    let kod = '';
    let arr = ['']; 
    let empty = [];

    for (let i = 1; i <= 15; i++) {
        arr.push(i);
    }
  
   // design table with random units
    for (let i = 1; i <= 4; i++) {
        
        kod += "<tr>"
            for (let k = 1; k <= 4; k++) {
                let x = rand(0, arr.length - 1);
                kod += `<td id = "c${i}${k}" onclick = "slide(${i},${k})">${arr[x]}</td>`;
                if (arr[x] == '') empty = [i, k]
                arr.splice(x, 1);
            }
        kod += "</tr>"
    }
    cedvel.innerHTML = kod;

    function  slide(i, k) {

        let emptyCell = document.getElementById(`c${empty[0]}${empty[1]}`) // empty cell coordinates
        let clickedCell  = document.getElementById(`c${i}${k}`)  // clicked cell coordinates

        if (i == empty[0] && Math.abs(k - empty[1]) == 1 || k == empty[1] && Math.abs(i - empty[0]) == 1 ) {

                emptyCell.innerHTML = clickedCell.innerHTML;
                clickedCell.innerHTML = ''
                empty = [i, k]
        }
    }

    function rand(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
