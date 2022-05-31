import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, selectCount } from "./counterSlice.js";

export default function Counter() {
	const count = useSelector((state) => state.value);
	const dispatch = useDispatch();

	// console.log(selectCount());

	return (
		<div>
			<div>
				<button aria-label="Increment value" onClick={() => dispatch(increment())}>
					Increment
				</button>
				<span>{count}</span>
				<button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
					Decrement
				</button>
			</div>
		</div>
	);
}
