import { DECREMENT } from './types';
import { Path } from 'src/typings';
import actions from 'src/types/actions';

export default (path: Path, amount: number | undefined = undefined): actions[typeof DECREMENT] => ({
    amount,
    path,
    type: DECREMENT
});