import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx)
		return { ...initialProps }
	}
	render() {
		return (
			<Html>
				<Head>
					<script
						src="https://npm-scalableminds.s3.eu-central-1.amazonaws.com/@scalableminds/chatroom@master/dist/Chatroom.js">
					</script>
					<link rel="stylesheet" href="https://npm-scalableminds.s3.eu-central-1.amazonaws.com/@scalableminds/chatroom@master/dist/Chatroom.css" />
				</Head>
				<body>
					<div className="chat-container"></div>
					<Main />
					<NextScript />
					<script
						src="https://npm-scalableminds.s3.eu-central-1.amazonaws.com/@scalableminds/chatroom@master/dist/Chatroom.js">
					</script>
					<script
						dangerouslySetInnerHTML={{
							__html: `
								var chatroom = new window.Chatroom({
								host: "http://ec2-34-252-56-71.eu-west-1.compute.amazonaws.com:5005/",
								title: "Chat with Mike",
								container: document.querySelector(".chat-container"),
								welcomeMessage: "Hi, I am Mike. How may I help you?",
								speechRecognition: "en-US",
								voiceLang: "en-US"
								});
								chatroom.openChat();
									`,
						}}
					></script>
				</body>
			</Html>
		)
	}
}

export default MyDocument