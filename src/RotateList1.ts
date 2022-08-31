export function rotateList1(array: Array<number>, rotate_num: number): Array<number> {

    let rotate_list_result: Array<number> = [];
    let sort_array:Array<number>=[];

    for (let index = 0; index < array.length; index++) {

        if (index > rotate_num) {
            sort_array.push(array[index])
            
        } else if (index <= rotate_num) {
            rotate_list_result.push(array[index])
        }


    }
    let sort_rotate_list=sort_array.sort((a,b)=>a-b)
    console.log( [...sort_rotate_list,...rotate_list_result])
    return [...sort_rotate_list,...rotate_list_result]

}