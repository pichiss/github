import {Link} from 'react-router-dom';
const List = ({notiData})=>{

    return(
        <div>
        <h1>list</h1>
        {notiData.map((noti)=>
            <div key={noti.notiId}>
                <Link to={`/List/${noti.notiId}`}>{noti.notiName}</Link>
                <Link to={`/edit/${noti.notiId}`}>수정</Link></div>
        )}
       
        </div>
    )
}
export default List;