import { useState,useEffect } from "react";
import Figure from 'react-bootstrap/Figure';



interface apiGift {
type: string;
username:string;
url: string;

};

 export const FetchAsync =  ( )=>{

    const [url, setUrl] = useState<Record<string, string>[]>();
    // const [url, setUrl] = useState<Array<apiGift>>([]);
    useEffect(()=>{
        getGifs();
    }, []);
    const getGifs = async()=>{
        try{
            let auxArray : any = [];
            const apiKey  = 'dhxVuBlwxXG3HEDzlFY6Se4o0dGLebdC';
            const resp = await fetch(`https://api.giphy.com/v1/stickers/packs?api_key=${apiKey}&tag=&rating=g`); 
            const {data} = await resp.json();
            console.log(data);
            data.map( ( obj :any )=>  auxArray.push(Object.assign({display_name:  obj.display_name, featured_gift: obj.featured_gif.embed_url})));
            console.log( 'arraudaya',auxArray )
            if(auxArray){
                setUrl(auxArray);
            }
        } catch (error) {
            console.log(error)   
        } 
   
    };
    return (<>
            <h1>Hola deddsde pruebas</h1>
            <img  width={171}  height={180} src="https://giphy.com/embed/PHhaNieEvkHao" />  
            {
            url?.map(( urls : any ) =>                
                <>
                
                    <Figure>
                        <Figure.Image
                        width={171}
                        height={180}
                        src={ urls.featured_gift }
                        />
                        <Figure.Caption>{ urls.display_name     }</Figure.Caption>
                    </Figure>
                </>
             )
            }
            
        </>);
};

export default FetchAsync;  