import EditMessageForm from '@/components/EditMessageForm';
import { readData } from '@/lib/db';

type Message = {
    id: string | number;
    name: string;
    message: string;
};

const Messages = async ({ params }: { params: { id: number } }) => {
    const { id } = await params;
    const { messages } = await readData();
    const message =  messages.find((item: Message) => Number(item.id) == Number(id));
    const defaultMessage = message.message
    const defaultvalue = message.name
    console.log(defaultMessage);
    console.log(defaultvalue);
    console.log(id);

return ( 
        <div>
            {/* {message && <p>{message.name}: {message.message}</p>} */}
            <EditMessageForm id={id} defaultMessage={defaultMessage} defaultValue={defaultvalue}/>
        </div>
    );
}

export default Messages;
