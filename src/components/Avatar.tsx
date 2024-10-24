import { useState } from "react";

interface AvatarProps {
	firstName: string;
	lastName: string;
	image: string;
	imageButton: string;
}

function Avatar(props: AvatarProps) {
	const [count, setCount] = useState(0);

	return (
		<section>
			<p>
				<img src={props.image} alt="Simpson" />
			</p>
			<h1>
				{props.firstName} {props.lastName}
				<img src={props.imageButton} alt="" />
				<button onClick={() => setCount(count + 1)}>{count}</button>
			</h1>
		</section>
	);
}
export default Avatar;
