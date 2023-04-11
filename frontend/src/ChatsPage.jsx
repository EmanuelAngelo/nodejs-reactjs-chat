import { PrettyChatWindow }  from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
    return (
        <div style={{ height: "100vh", width: "100vw" }}>
        <PrettyChatWindow
            projectId='640ea427-9dff-4c71-871b-ad6fe83e347f'
            username={props.user.username}
            secret={props.user.secret}
            style={{height: '500vh'}}
        />
    </div>)
}

export default ChatsPage


