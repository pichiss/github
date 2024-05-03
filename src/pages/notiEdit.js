import {useState} from 'react';
import {useParams,useNavigate} from 'react-router-dom';

const NotiEdit = ({notiData})=>{
    const {id} = useParams()
    const idx = id - 1;
    const data = notiData[idx]
    const [editData, setEditData] = useState(
        // {notiId : data.notiId,
        // notiName : data.notiName,
        // notitext : data.notitext,
        // notiTit : data.notiTit}
        notiData[idx]
    );
// 변경전 값을 받아오는것.지금 data에 선언을 했으므로 notiData[idx]로 하나만 넣어도 같은 뜻임.대신 그걸넣으면 객체가 아니므로 중괄호를 빼야한다.

    const {notiId,notiName,notitext, notiTit} = editData;
// 객체를 풀어서 밑에 인풋값으로 넣어주려고 에디트데이타를 푼걸 선언하는것

    function editChange(e){
        setEditData({
            ...editData,
            [e.target.name] : e.target.value
        })
        // 여기서 타겟이 된 값들이 변경되는값으로 그걸로 셋에디트데이타에 넣어서 바꿔준다는 뜻
    };

    return(
        <div key={notiId}>
        <h1>NotiEdit</h1>
        <input type=''name='notiName' value={notiName} onChange={editChange}></input>
        <input type=''name='notiTit' value={notiTit} onChange={editChange}></input>
        <textarea name='notitext'value={notitext} onChange={editChange}></textarea>
        </div>
    )
}


export default NotiEdit;