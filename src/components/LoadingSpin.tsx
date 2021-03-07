import { Spin } from "antd";


const LoadingSpin = () => {
	const style = {
		display: 'flex',
		justifyContent: 'center',
		marginTop: "250px"
	}
	return <div style={style}>
		<Spin size="large" />
	</div>
}
export default LoadingSpin;