export function rotateList(array: Array<number>, rotate_num:number): Array<number> {
    while (rotate_num !== 0) {
        let last_index = array.length - 1;
        array.unshift(array[last_index]);
        array.splice(last_index + 1, 1);
        console.log(array);
        rotate_num--;
    }
    return array;
}



