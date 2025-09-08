let arr = ["flower","flow","flight"]
let target = "fl";

let jhola = arr[0];
let jhola_leng = jhola.length;

const Data = () => {
    for(let i=1; i<arr.length; i++){
        let current_str = arr[i];

        while(jhola !== current_str.substring(0,jhola_leng)){
            jhola_leng--;

            if(current_str = 0){
                return "";
            }
            jhola = jhola.substring(0,jhola_leng);
        }
    }
    return jhola;
}

Data();