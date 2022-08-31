import { rotateList } from './RotateList';
import { rotateList1 } from './RotateList1';

describe('Validate Subsequence', () => {

    test("it shoud return [4,5,1,2,3]", () => {
        // given => act
        const numbers: Array<number> = [1, 2, 3, 4, 5];
        const number_of_rotations: number = 2;
        // when => arrange
        const action_trigger_subsequence = rotateList1(numbers, number_of_rotations);
        
        // then => assert
        const target: Array<number> = [4, 5, 1, 2, 3];
        expect(action_trigger_subsequence).toStrictEqual(target);
    })


});