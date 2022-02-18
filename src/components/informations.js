
import {useEffect , useState} from 'react';

const tabs = ['Skills', 'Interests', 'Experience','Certifications','Career objective']
let data = [ 
    {
        kind: "Skills",
        content: ['Skills','Career','Certifications','abc']
    },{
        kind: "Interests",
        content: ['Cao','Hoài','Tấn','abc']
    },{
        kind: "Experience",
        content: ['Skills','Career','Certifications','abc']
    },{
        kind: "Certifications",
        content: ['Tấn','Đẹp','Trai','abc']
    },{
        kind: "Career objective",
        content: ['Nhứt','Trên','Đời','abc']
    },
]

function Informations(){

    const [posts, setPosts] = useState([])
    const [type, setType] = useState('Skills')
    useEffect(() => {
        setPosts(() =>{
            const show = data.filter((e) => e.kind === `${type}`);
        
            // console.log(show[0].content)
            return show[0].content;
          })
        
    },[type])
    return(
        <div className="information">
                        <div className="btns">
                            {tabs.map(tab => (
                            <button
                                key = {tab}
                                className = {type === tab ? "btns--active" : "glow-on-hover"}
                                onClick={() => setType(tab)}
                            >
                                {tab}
                            </button>
                        ))}
        
                        </div>
        
                        <div className="content">
                            <ul>
                                {/* {console.log(posts)} */}
                                    {posts.map((post,index)=> (
                                        <li key={index}>{post}</li>
                                    ))}
                            </ul>
                        </div>
                    </div>
    )
}

export default Informations;