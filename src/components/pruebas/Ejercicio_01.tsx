import { useState } from 'react';
import { Card } from 'react-bootstrap';
// import { AvatarGroup } from 'primereact/avatargroup';
// import { Avatar } from 'primereact/avatar';


interface ISub {

    nick: string;
    subMonths: number;
    avatar:string;
     // ?<== se supone que es opcional 
    description?:string;

}


const Ejercicio_01 = ()=>{

    const [subs, setSubs] = useState<Array<ISub>>([
        {
            nick:'carlos',
            subMonths: 7,
            avatar: 'https://i.pravatar.cc/150',
            description:'este usuario es hater y furro'
        },
        {
            nick:'juan' ,
            subMonths: 7,
            avatar: 'https://i.pravatar.cc/150'
        }
    ])
return (
    <>
    {
        subs.map((sub)=><>
            <li>
                <img alt='avatar' src='https://i.pravatar.cc/150' />
                <h4>{sub.nick}</h4>
                 sub.description ? <p>{sub.description} </p> : <p> sin descripción</p>
            </li>
         </>)
    }
   
   
   
   
    --------------------
    {/* {
        subs.map((sub)=> <> 
        <Card style={{ width: '18rem' }}>
        <Card.Img src={sub.avatar} />
        </Card>
        <Card.Body>
            <Card.Title>{sub.nick} </Card.Title>
            <Card.Text>sads</Card.Text>
        </Card.Body>
         </>)
    } */}
    </>
)

}

export default Ejercicio_01;