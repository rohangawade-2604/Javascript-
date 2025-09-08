`let l1 = [2, 4, 3]
let l2 = [5, 6, 4]

let target = [7, 0, 8]`

const Adding = () => {
    const SumData = l1.map((num , i) => num + l2[i])
    console.log(SumData)

}

Adding()